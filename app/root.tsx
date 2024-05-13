import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import logo from "/logo.png";
import { Activity, LibraryBig, Lightbulb, Settings } from "lucide-react";
import "./tailwind.css";
import "./global.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="grid wrapper w-full h-screen">
      <nav className="bg-slate-100 p-4 px-2 ">
        <a href="/">
          <img src={logo} className="h-12" alt="Rejuve.bio logo" />
        </a>
        <ul className="mt-8 w-min m-auto text-slate-400">
          <li className="p-2 rounded mb-2 text-black bg-slate-200">
            <a href="#">
              <Lightbulb size={24} />
            </a>
          </li>
          <li className="p-2 rounded mb-2">
            <a href="#">
              <LibraryBig size={24} />
            </a>
          </li>
          <li className="p-2 rounded mb-2">
            <a href="#">
              <Activity size={24} />
            </a>
          </li>
          <li className="p-2 rounded mb-2">
            <a href="#">
              <Settings size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <main className="overflow-y-auto ">
        <Outlet />
      </main>
    </div>
  );
}
