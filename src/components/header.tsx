import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="px-10 flex items-center justify-between h-full gap-2 border-b">
      <nav className="flex items-center gap-6">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </nav>

      <ThemeToggle />
    </header>
  );
}
