import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

function RootLayout() {
  return (
    <div className="h-screen grid grid-rows-[3rem_1fr]">
      <header className="px-10 flex items-center justify-between h-full gap-2 border-b">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </header>
      <Outlet />
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
