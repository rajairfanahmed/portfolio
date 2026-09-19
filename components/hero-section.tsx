import Image from "next/image";
import Link from "next/link";
import { bio, socialLinks } from "@/data";
import { Download, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 flex flex-col items-center text-center space-y-8">
      <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-2 border-border-default bg-bg-surface shadow-sm">
        <Image
          src={bio.profilePhotoUrl}
          alt={bio.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 96px, 128px"
        />
      </div>
      
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary">
          {bio.name}
        </h1>
        <p className="text-xl md:text-2xl text-text-muted font-medium">
          {bio.positioningStatement}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link 
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent-primary text-white font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base active:scale-95 transition-all"
        >
          View Projects
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a 
          href={socialLinks.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-bg-surface border border-border-default text-text-primary font-medium hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base active:scale-95 transition-all"
        >
          Download CV
          <Download className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
