import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/shadcn/card";
import {
  statusLegend,
  getDriverStatusColor,
} from "@/lib/utils/getDriverStatusColor";

export function DriverStatusLegend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Driver Status Legend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {statusLegend.map(({ status, label }) => (
            <div key={status} className="flex items-center gap-2">
              <div
                className={`w-4 h-4 border ${getDriverStatusColor(status)}`}
              />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
