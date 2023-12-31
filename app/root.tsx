import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { TamaguiProvider } from "@tamagui/web";
import tamaguiConfig from "../tamagui.config";
import tamaguiResetStyles from '@tamagui/core/reset.css';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: tamaguiResetStyles }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <style
            dangerouslySetInnerHTML={{
              __html: tamaguiConfig.getCSS(),
            }}
          />
      </head>
      <body>
        <TamaguiProvider config={tamaguiConfig} disableInjectCSS={true}>
          <Outlet />
        </TamaguiProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
