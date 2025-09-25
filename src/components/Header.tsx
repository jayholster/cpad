import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  dueDate?: string;
}

export default function Header({ title, subtitle, dueDate }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10 bg-radial-fade opacity-70" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 -z-30 bg-grid-soft opacity-40" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 text-center md:text-left">
            <p className="section-eyebrow text-primary-foreground/70">AA290G • Creating & Learning with AI</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <Badge variant="secondary" className="text-sm px-4 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground">
              Penn State University
            </Badge>
            {dueDate && (
              <Badge variant="warn" className="text-sm flex items-center gap-2 px-4 py-1 rounded-full bg-warn/20 text-primary-foreground">
                <Calendar className="w-3.5 h-3.5" />
                Due: {dueDate}
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="frosted-surface rounded-xl p-4 text-left text-primary-foreground/90">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-foreground/60 mb-2">Meeting Time</p>
            <p className="text-lg font-medium">Wednesday • 2:30–3:45 PM</p>
            <p className="text-sm text-primary-foreground/70">Hybrid 50/50 • Borland 113</p>
          </div>
          <div className="frosted-surface rounded-xl p-4 text-left text-primary-foreground/90">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-foreground/60 mb-2">Instructor</p>
            <p className="text-lg font-medium">Dr. Jacob Holster</p>
            <p className="text-sm text-primary-foreground/70">jbh6331@psu.edu</p>
          </div>
          <div className="frosted-surface rounded-xl p-4 text-left text-primary-foreground/90">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-foreground/60 mb-2">Course Rhythm</p>
            <p className="text-lg font-medium">Weekly submissions due Sundays</p>
            <p className="text-sm text-primary-foreground/70">11:59 PM Eastern</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary/70 via-primary/40 to-transparent" />
    </header>
  );
}
