import { site } from "@/data";

export default function HomePage() {
  return (
    <div className="py-16 md:py-24">
      <h1 className="text-primary">{site.name}</h1>
    </div>
  );
}
