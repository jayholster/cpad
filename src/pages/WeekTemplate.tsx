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
    <div className="min-h-screen bg-background">
      
      <Header 
        title={weekTitle}
        subtitle="AA290G: Creating & Learning with AI"
        dueDate={dueDate}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* Coming Soon Message */}
        <section className="text-center">
          <Card className="border-2 border-dashed border-muted bg-muted/20">
            <CardContent className="p-12">
              <Construction className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-ink mb-4">Content Coming Soon</h2>
              <p className="text-lg text-ink-muted mb-6 max-w-2xl mx-auto">
                This week's materials are currently being prepared. Check back closer to the scheduled date for detailed content, assignments, and resources.
              </p>
              <div className="flex items-center justify-center gap-4">
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
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-ink mb-4">What to Expect</h3>
              <div className="space-y-3 text-ink-muted">
                <p>• Detailed learning objectives and outcomes</p>
                <p>• Interactive activities and demonstrations</p>
                <p>• Weekly assignment instructions and rubrics</p>
                <p>• Required readings and supplementary resources</p>
                <p>• Discussion prompts and reflection questions</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section>
          <div className="flex items-center justify-between">
            {prevWeek ? (
              <Button variant="outline" asChild>
                <Link to={`/week${prevWeek}`} className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Week {prevWeek}
                </Link>
              </Button>
            ) : (
              <div></div>
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
              <div></div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}