import * as React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/helper/trpc.ts";
import { httpLink, loggerLink } from "@trpc/client";
import { routeTree } from "@/routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: import.meta.env.VITE_BACKEND_URL,
    }),
    loggerLink(),
  ],
});

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>,
);
