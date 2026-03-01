import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { differenceInYears, format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/shadcn/card";
import { teams } from "@/database/teams";
import type { DriverStatus } from "@/database/drivers";
import { getDriverStatusColor } from "@/lib/utils/getDriverStatusColor";

interface DriverDraggableProps {
  id: string;
  name: string;
  flag: string;
  birthday: string;
  currentTeam: string;
  status: DriverStatus;
  className?: string;
}

export function DriverDraggable({
  id,
  name,
  flag,
  birthday,
  currentTeam,
  status,
  className,
}: DriverDraggableProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "grab",
  };

  const age = differenceInYears(new Date(), new Date(birthday));
  const formattedBirthday = format(new Date(birthday), "dd.MM.yyyy");
  const team = teams.find((t) => t.id === currentTeam);
  const teamName = team?.name || currentTeam;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${isDragging ? "opacity-90" : ""} ${className || ""}`}
    >
      <Card
        className={`flex-row items-center gap-3 py-3 px-4 ${getDriverStatusColor(status)}`}
      >
        <span className="text-2xl shrink-0">{flag}</span>
        <CardHeader className="flex-1 px-0 py-0 gap-0.5">
          <CardTitle className="text-base leading-tight">{name}</CardTitle>
          <CardDescription className="text-xs">
            {teamName} · {age} ({formattedBirthday})
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
