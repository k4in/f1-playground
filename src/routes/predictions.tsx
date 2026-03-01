import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { drivers } from "@/database/drivers";
import { DriverDraggable } from "@/components/driver-draggable";
import { DriverStatusLegend } from "@/components/driver-status-legend";
import { PageHeading } from "@/components/page-heading";

export const Route = createFileRoute("/predictions")({
  component: Predictions,
});

function Predictions() {
  const eligibleDrivers = drivers.filter(
    (driver) => driver.status === "active" || driver.status === "hasContract",
  );

  const [items, setItems] = useState(eligibleDrivers);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.name === active.id);
        const newIndex = items.findIndex((item) => item.name === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <main className="p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <PageHeading>Driver Championship Predictions</PageHeading>
          <p className="text-muted-foreground">
            Drag and drop to rank drivers by your predicted championship order.
            Only drivers with active contracts or current deals are shown.
          </p>
          <DriverStatusLegend />
        </div>

        <div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items.map((item) => item.name)}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-col gap-3">
                {items.map((driver, index) => (
                  <div key={driver.name} className="flex items-center gap-3">
                    <span className="text-lg font-bold text-muted-foreground w-8 text-right">
                      {index + 1}.
                    </span>
                    <DriverDraggable
                      id={driver.name}
                      name={driver.name}
                      flag={driver.flag}
                      birthday={driver.birthday}
                      currentTeam={driver.currentTeam}
                      status={driver.status}
                      className="flex-1"
                    />
                  </div>
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </main>
  );
}
