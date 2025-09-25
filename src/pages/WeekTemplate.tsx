import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import {
  Calendar,
  FileText,
  ExternalLink,
  Construction,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface WeekTemplateProps {
  weekNumber: number;
  title?: string;
  dueDate?: string;
}

export default function WeekTemplate({ weekNumber, title, dueDate }: WeekTemplateProps) {
  const weekTitle = title || `Week ${weekNumber}: TBD`;
  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 15 ? weekNumber + 1 : null;

  return (
    <div className="relative min-h-screen bg-background text-ink">
      <div className="absolute inset-0 -z-30 bg-grid-soft opacity-40" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-background to-background" />

      <Header
        title={weekTitle}
        subtitle="AA290G: Creating & Learning with AI"
        dueDate={dueDate}
      />

      <div className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 py-12 space-y-12">
          {/* Coming Soon Message */}
          <section className="text-center">
            <Card className="rounded-3xl border border-border/70 bg-white shadow-xl">
              <CardContent className="p-12 space-y-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Construction className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-ink">Content Coming Soon</h2>
                <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                  This week's materials are currently being prepared. Check back closer to the scheduled date for detailed content, assignments, and resources.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="outline" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Check Canvas for Updates
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:jbh6331@psu.edu" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Contact Instructor
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Placeholder Information */}
          <section>
            <Card className="rounded-3xl border border-border/70 bg-white shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-ink mb-4">What to Expect</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3 text-ink-muted">
                    <p>• Detailed learning objectives and outcomes</p>
                    <p>• Interactive activities and demonstrations</p>
                    <p>• Weekly assignment instructions and rubrics</p>
                  </div>
                  <div className="space-y-3 text-ink-muted">
                    <p>• Required readings and supplementary resources</p>
                    <p>• Discussion prompts and reflection questions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <section>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {prevWeek ? (
                <Button variant="outline" asChild>
                  <Link to={`/week${prevWeek}`} className="flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Week {prevWeek}
                  </Link>
                </Button>
              ) : (
                <div className="h-10" />
              )}

              <Button asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Back to Course Home
                </Link>
              </Button>

              {nextWeek ? (
                <Button variant="outline" asChild>
                  <Link to={`/week${nextWeek}`} className="flex items-center gap-2">
                    Week {nextWeek}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <div className="h-10" />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
