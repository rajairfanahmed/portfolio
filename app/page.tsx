import { site } from "@/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="text-primary">{site.name}</h1>
    </div>
  );
}
