import { type DriverStatus } from "@/database/drivers";

export function getDriverStatusColor(status: DriverStatus): string {
  switch (status) {
    case "active":
      return "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800";
    case "hasContract":
      return "bg-green-300 dark:bg-green-800/50 border-green-400 dark:border-green-700";
    case "inactive":
      return "bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800";
    case "out":
      return "bg-destructive/10 dark:bg-destructive/20 border-destructive/20 dark:border-destructive/30";
    case "youth":
      return "bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800";
    default:
      return "";
  }
}

export const statusLegend: { status: DriverStatus; label: string }[] = [
  { status: "hasContract", label: "Has Contract for next season" },
  { status: "active", label: "Active, but no contract for next season" },
  {
    status: "inactive",
    label: "Out of contract, drove within the last few seasons",
  },
  { status: "out", label: "Out or no chance of comeback" },
  { status: "youth", label: "Youth Driver or never driven before" },
];
