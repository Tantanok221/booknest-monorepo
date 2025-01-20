import { Env, Hono } from "hono";
import { logger } from "hono/logger";
import { initDB } from "@pkg/database/db";
import { trimTrailingSlash } from "hono/trailing-slash";
import { router } from "./trpc";
import { trpcServer } from "@hono/trpc-server";
import { BACKEND_BINDING } from "@pkg/env/constant";
import { cors } from "hono/cors";

export type HonoVariables = {
	db: ReturnType<typeof initDB>;
};

export type HonoEnv = { Bindings: BACKEND_BINDING; Variables: HonoVariables };

const app = new Hono<HonoEnv>();
app.use("*", logger());
app.use("*", trimTrailingSlash());
app.use("*", cors());
app.use("*", async (c, next) => {
	c.set("db", initDB(c.env.DATABASE_URL));
	await next();
});
// app.get(
// 	"*",
// 	cache({
// 		cacheName: (c) => c.req.path,
// 		cacheControl: "max-age=3600",
// 	}),
// );
// const appRouter = router({
// 	artist: trpcArtistRoute,
// 	eventArtist: trpcEventRoute,
// 	tag: trpcTagRoute,
// });

export type AppRouter = typeof appRouter;
app.use(
	"/trpc/*",
	trpcServer({
		router: appRouter,
		createContext: (_opts, c) => {
			console.log("init context");
			return {
				db: initDB(c.env.DATABASE_URL),
			};
		},
	}),
);
// app
// 	.route("/event", EventRoute)
// 	.route("/artist", ArtistRoute)
// 	.route("/tag", TagRoute)
// 	.route("/image", imageRoute);
export { app };