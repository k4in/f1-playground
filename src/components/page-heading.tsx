import { cn } from "@/lib/utils/cn";

interface PageHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHeading({ children, className }: PageHeadingProps) {
  return (
    <h1 className={cn("text-2xl font-bold", className)}>
      {children}
    </h1>
  );
}
