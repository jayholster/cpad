import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Mail,
  Video,
  Calendar,
  FileText,
  ExternalLink,
  Clock,
  BookOpen,
} from "lucide-react";

const Home = () => {
  const weeks = Array.from({ length: 15 }, (_, i) => i + 1);

  const infoCards = [
    {
      title: "Schedule",
      icon: Calendar,
      lines: ["Wednesdays 2:30–3:45", "Hybrid 50/50"],
    },
    {
      title: "Location & Instructor",
      icon: BookOpen,
      lines: ["Borland 113", "Dr. Jacob Holster"],
    },
    {
      title: "Deadlines",
      icon: Clock,
      lines: ["Weekly tasks due", "Sundays @ 11:59 PM"],
    },
  ];

  const resourceLinks = [
    {
      label: "Email Dr. Holster",
      href: "mailto:jbh6331@psu.edu",
      icon: Mail,
    },
    {
      label: "Zoom Room Link",
      href: "https://psu.zoom.us/j/5207592977",
      icon: Video,
      external: true,
    },
    {
      label: "Canvas Course",
      href: "https://psu.instructure.com/courses/2421561",
      icon: ExternalLink,
      external: true,
    },
    {
      label: "Course Policies",
      href: "/syllabus",
      icon: FileText,
      isInternal: true,
    },
  ];

  const getWeekData = (weekNum: number) => {
    const weekData = [
      { title: "Getting Started", from: "from-blue-600", via: "via-purple-600", to: "to-blue-800" },
      { title: "Text-Based AI Models", from: "from-emerald-400", via: "via-green-500", to: "to-teal-600" },
      { title: "AI Ethics & Bias", from: "from-red-500", via: "via-rose-500", to: "to-pink-600" },
      { title: "Diffusion Basics", from: "from-violet-500", via: "via-purple-500", to: "to-indigo-600" },
      { title: "World Models & Video Upskilling", from: "from-orange-400", via: "via-amber-500", to: "to-yellow-600" },
      { title: "Vibecoding Artifacts", from: "from-cyan-400", via: "via-sky-500", to: "to-blue-600" },
      { title: "Custom GPTs", from: "from-lime-400", via: "via-green-500", to: "to-emerald-600" },
      { title: "Agents", from: "from-fuchsia-500", via: "via-pink-500", to: "to-rose-600" },
      { title: "Palmer Museum", from: "from-slate-600", via: "via-gray-600", to: "to-zinc-700" },
      { title: "Design-Based Research", from: "from-indigo-400", via: "via-blue-500", to: "to-purple-600" },
      { title: "Project Workshop", from: "from-teal-400", via: "via-cyan-500", to: "to-sky-600" },
      { title: "Individual Meetings", from: "from-amber-400", via: "via-orange-500", to: "to-red-600" },
      { title: "Project Workshop", from: "from-green-400", via: "via-emerald-500", to: "to-teal-600" },
      { title: "Final Presentations", from: "from-purple-500", via: "via-violet-500", to: "to-indigo-600" },
      { title: "Final Presentations", from: "from-rose-500", via: "via-pink-500", to: "to-red-600" },
    ];

    return weekData[weekNum - 1] || weekData[0];
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-ink">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute inset-0 -z-30 bg-grid-soft opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/90 via-primary to-primary/80" />
        <div className="absolute inset-0 -z-20 bg-grid-soft opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-primary-foreground">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1 text-sm uppercase tracking-[0.35em] text-primary-foreground/80">
                AA290G • Fall 2025
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Creating & Learning with AI
              </h1>
              <div className="bg-white/10 backdrop-blur-md mx-auto inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-primary-foreground/85">
                Wed 2:30–3:45 • Borland 113 • Dr. Jacob Holster
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {infoCards.map(({ title, icon: Icon, lines }) => (
                <Card key={title} className="card-gradient-border rounded-2xl bg-white/10 text-left text-primary-foreground shadow-xl shadow-black/10">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-center gap-3 text-primary-foreground/80">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm uppercase tracking-[0.3em]">{title}</p>
                    </div>
                    {lines.map((line) => (
                      <p key={line} className="text-sm md:text-base text-primary-foreground/90">
                        {line}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Course Description */}
        <section id="about" className="relative scroll-mt-24">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-2xl" />
          <Card className="rounded-3xl border-primary/20 bg-white shadow-xl shadow-primary/10">
            <CardContent className="p-10 space-y-6">
              <div>
                <p className="section-eyebrow text-primary">About This Course</p>
                <h2 className="text-3xl font-bold text-ink">Creating & Learning with AI</h2>
              </div>
              <div className="space-y-4 text-ink-muted">
                <p>
                  A hands-on exploration of AI tools for creative and analytical work. Students will create portfolio-ready artifacts while learning to evaluate AI systems critically and ethically.
                </p>
                <p>
                  This course emphasizes practical experience with AI tools, thoughtful comparison of their capabilities and limitations, and reflection on broader implications for creativity, learning, and society.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Course Info */}
        <section className="space-y-8">
          <div className="flex flex-col items-center text-center gap-2">
            <p className="section-eyebrow">Course Snapshot</p>
            <h2 className="text-3xl font-bold text-ink">Schedule, location, and deadlines</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {infoCards.map(({ title, icon: Icon, lines }) => (
              <Card key={title} className="rounded-2xl border border-border/70 bg-white shadow-lg">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <div className="text-sm text-ink-muted space-y-1">
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Course Resources */}
        <section id="resources" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col items-center text-center gap-2">
            <p className="section-eyebrow">Stay Connected</p>
            <h2 className="text-3xl font-bold text-ink">Course contacts and resources</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {resourceLinks.map(({ label, href, icon: Icon, external, isInternal }) => (
              <Button
                key={label}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                asChild
              >
                {isInternal ? (
                  <Link to={href}>
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                )}
              </Button>
            ))}
          </div>
        </section>

        {/* Course Modules */}
        <section id="modules" className="space-y-8 scroll-mt-24">
          <div className="text-center space-y-3">
            <p className="section-eyebrow">Course Modules</p>
            <h2 className="text-3xl font-bold text-ink">Explore weekly modules</h2>
            <p className="text-ink-muted max-w-3xl mx-auto">
              Each module links to dedicated resources, assignments, and activities for the week.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {weeks.map((week) => {
              const weekData = getWeekData(week);

              return (
                <Card
                  key={week}
                  className="group overflow-hidden rounded-2xl border border-border/70 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className={`h-36 bg-gradient-to-br ${weekData.from} ${weekData.via} ${weekData.to} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl font-bold">Week {week}</div>
                          <div className="text-sm opacity-90">{weekData.title}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          asChild
                        >
                          <Link to={`/week${week}`} className="flex items-center">
                            <FileText className="w-4 h-4" />
                            View Module
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
