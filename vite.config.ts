import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

function reactRouterPreviewSupport() {
  return {
    name: "react-router-preview-support",
    configurePreviewServer(server: {
      config: { root: string; build: { outDir: string } };
      middlewares: {
        use: (
          handler: (
            request: { url?: string },
            response: { setHeader: (name: string, value: string) => void },
            next: () => void,
          ) => void,
        ) => void;
      };
    }) {
      server.middlewares.use((request, response, next) => {
        const [pathname, query] = request.url?.split("?") ?? [];

        if (pathname?.endsWith(".data")) {
          response.setHeader("Content-Type", "text/x-turbo; charset=utf-8");
        }

        if (pathname && pathname !== "/" && !pathname.split("/").at(-1)?.includes(".")) {
          const indexFile = resolve(
            server.config.root,
            server.config.build.outDir,
            `.${decodeURIComponent(pathname)}`,
            "index.html",
          );

          if (existsSync(indexFile)) {
            request.url = `${pathname}/index.html${query ? `?${query}` : ""}`;
          }
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), reactRouterPreviewSupport(), reactRouter()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
