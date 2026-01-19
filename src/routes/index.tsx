import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/shadcn/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="p-10">
      <h3 className="text-xl font-semibold">Features</h3>
      <ul className="list-disc [&>li]:ml-6">
        <li>Driver Lineup 2026. Fixed Display.</li>
        <li>
          Driver Lineup 2027. Should be changable, driver status (running
          contract, contract runs out, etc..) should be displayed by a color.
        </li>
        <li>Add new drivers, edit drivers</li>
        <li>
          add a driver WC prediction page
          <ul className="list-disc [&>li]:ml-6">
            <li>
              this page should persist through reloads. ideally both with db and
              localStorage. and a username should be set. we need to find out if
              that is possible without auth.
            </li>
          </ul>
        </li>
      </ul>
      <div className="mt-10 w-40 mx-auto p-2 bg-muted text-muted-foreground">
        muted text
      </div>
      <div className="mt-10 w-80 mx-auto p-10 bg-card flex flex-col gap-2 items-center justify-center">
        <Button>Guten Tag</Button>
        <div className="p-2 bg-muted text-muted-foreground">muted text</div>
      </div>
      <Button className="mt-10 flex mx-auto">Outside</Button>
      <Button variant="secondary" className="mt-10 flex mx-auto">
        Outside
      </Button>
      <Button variant="destructive" className="mt-10 flex mx-auto">
        Outside
      </Button>
    </main>
  );
}
