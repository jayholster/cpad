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
  Sparkles,
  Brain,
  ShieldCheck,
  Users,
  Layers,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const weeks = Array.from({ length: 15 }, (_, i) => i + 1);

  const courseHighlights = [
    {
      title: "Explore AI Hands-On",
      description: "Build portfolio-ready artifacts that test the limits of current tools while honing creative instincts.",
      icon: Sparkles,
    },
    {
      title: "Think Critically",
      description: "Interrogate the impact of AI systems by comparing capabilities, limitations, and ethical implications.",
      icon: Brain,
    },
    {
      title: "Collaborate & Reflect",
      description: "Design projects together, critique responsibly, and reflect on how AI reshapes learning and society.",
      icon: Users,
    },
  ];

  const weeklyRhythm = [
    {
      title: "Studio Workshop",
      detail: "In-class exploration every Wednesday from 2:30–3:45 PM in Borland 113.",
      icon: Calendar,
    },
    {
      title: "Experiment & Build",
      detail: "Use hybrid lab time and asynchronous work sessions to develop weekly artifacts.",
      icon: Layers,
    },
    {
      title: "Submit & Reflect",
      detail: "Upload work and reflections to Canvas by Sunday at 11:59 PM.",
      icon: Clock,
    },
    {
      title: "Iterate with Feedback",
      detail: "Compare tools, document insights, and share progress with peers and Dr. Holster.",
      icon: ShieldCheck,
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

  const quickSections = [
    {
      title: "About the Course",
      description: "Understand the goals of the studio and how we'll build AI fluency together.",
      href: "#about",
      icon: Sparkles,
    },
    {
      title: "Weekly Rhythm",
      description: "Preview the cadence of workshops, lab time, and Sunday submissions.",
      href: "#rhythm",
      icon: Calendar,
    },
    {
      title: "Course Resources",
      description: "Jump to policies, contact info, and support links whenever you need them.",
      href: "#resources",
      icon: FileText,
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
              <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto">
                Join a design-forward studio course where experimentation, critique, and ethics intersect to shape the future of creative technology.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="card-gradient-border rounded-2xl bg-white/10 text-left text-primary-foreground shadow-xl shadow-black/10">
                <CardContent className="p-6 space-y-1">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">Meeting Time</p>
                  <p className="text-xl font-semibold">Wednesdays 2:30–3:45 PM</p>
                  <p className="text-sm text-primary-foreground/75">Hybrid 50/50 • Borland 113</p>
                </CardContent>
              </Card>
              <Card className="card-gradient-border rounded-2xl bg-white/10 text-left text-primary-foreground shadow-xl shadow-black/10">
                <CardContent className="p-6 space-y-1">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">Instructor</p>
                  <p className="text-xl font-semibold">Dr. Jacob Holster</p>
                  <p className="text-sm text-primary-foreground/75">jbh6331@psu.edu</p>
                </CardContent>
              </Card>
              <Card className="card-gradient-border rounded-2xl bg-white/10 text-left text-primary-foreground shadow-xl shadow-black/10">
                <CardContent className="p-6 space-y-1">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">Weekly Rhythm</p>
                  <p className="text-xl font-semibold">Assignments due Sundays @ 11:59 PM</p>
                  <p className="text-sm text-primary-foreground/75">Stay current with Canvas announcements.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </header>

      <section className="relative -mt-10 md:-mt-16">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-full max-w-5xl rounded-3xl bg-white/70 shadow-xl shadow-primary/10 backdrop-blur" />
        <div className="relative mx-auto grid max-w-5xl gap-4 px-6 py-8 md:grid-cols-3">
          {quickSections.map(({ title, description, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-white/80 p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary/70">Start Here</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="text-sm text-ink-muted">{description}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Explore section
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Course Description */}
        <section id="about" className="relative scroll-mt-24">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-2xl" />
          <Card className="rounded-3xl border-primary/20 bg-white shadow-xl shadow-primary/10">
            <CardContent className="p-10 space-y-6">
              <div>
                <p className="section-eyebrow text-primary">About This Course</p>
                <h2 className="text-3xl font-bold text-ink">Build thoughtful AI practice, not just prompts.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 text-ink-muted">
                  <p>
                    A hands-on exploration of AI tools for creative and analytical work. Students will create portfolio-ready artifacts while learning to evaluate AI systems critically and ethically.
                  </p>
                  <p>
                    This course emphasizes practical experience with AI tools, thoughtful comparison of their capabilities and limitations, and reflection on broader implications for creativity, learning, and society.
                  </p>
                </div>
                <div className="space-y-4">
                  {courseHighlights.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-4 shadow-sm">
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{title}</h3>
                        <p className="text-sm text-ink-muted">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Weekly Rhythm */}
        <section id="rhythm" className="space-y-10 scroll-mt-24">
          <div className="flex flex-col items-start gap-3">
            <p className="section-eyebrow">Course Flow</p>
            <h2 className="text-3xl font-bold text-ink">What a typical week feels like</h2>
            <p className="max-w-2xl text-ink-muted">
              Stay grounded with a predictable cadence. Workshops spark ideas midweek, and Sundays close with reflective submissions that keep you iterating.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-[260px_1fr]">
            <Card className="h-full rounded-3xl border border-primary/20 bg-primary/10 text-primary shadow-none">
              <CardContent className="flex h-full flex-col justify-between gap-6 p-8">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                    Weekly Cadence
                  </span>
                  <p className="text-lg font-semibold text-primary">Use this as your studio rhythm checklist.</p>
                </div>
                <div className="space-y-3 text-sm text-primary/80">
                  <p>Block time midweek for studio activities and experiments.</p>
                  <p>Document what you try, what works, and what needs iteration.</p>
                  <p>Plan your Sunday submissions so there's time for reflection.</p>
                </div>
              </CardContent>
            </Card>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 hidden h-full w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent md:block" />
              <div className="space-y-6">
                {weeklyRhythm.map(({ title, detail, icon: Icon }, index) => (
                  <div
                    key={title}
                    className="group relative flex flex-col gap-3 rounded-2xl border border-border/60 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <span className="absolute -left-8 top-6 hidden h-4 w-4 rounded-full border-2 border-white bg-primary shadow ring-4 ring-primary/20 md:inline-flex" />
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">Step {index + 1}</p>
                        <h3 className="text-lg font-semibold text-ink">{title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Course Info / Resources */}
        <section id="resources" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col items-start gap-3">
            <p className="section-eyebrow">Stay Connected</p>
            <h2 className="text-3xl font-bold text-ink">Essential links & support</h2>
            <p className="text-ink-muted max-w-2xl">
              Reach out, check resources, or review expectations. Every link below keeps you plugged into the flow of the course.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resourceLinks.map(({ label, href, icon: Icon, external, isInternal }) => (
              <Card key={label} className="rounded-2xl border border-border/60 bg-white/90 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-between gap-2"
                    asChild
                  >
                    {isInternal ? (
                      <Link to={href} className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {label}
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </Link>
                    ) : (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="flex w-full items-center gap-2"
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Course Modules */}
        <section id="modules" className="space-y-8 scroll-mt-24">
          <div className="text-center space-y-3">
            <p className="section-eyebrow">Course Modules</p>
            <h2 className="text-3xl font-bold text-ink">Navigate each week at a glance</h2>
            <p className="text-ink-muted max-w-3xl mx-auto">
              Every module introduces a fresh angle on AI practice. Dive into weekly briefs, resource lists, and submission checklists tailored to help you ship meaningful work.
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

        {/* Footer */}
        <footer className="border-t border-border/60 pt-8 text-center text-sm text-ink-muted">
          <p>
            Questions or ideas for the course? Email Dr. Holster at <a href="mailto:jbh6331@psu.edu" className="text-primary underline-offset-4 hover:underline">jbh6331@psu.edu</a> or connect after class.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
