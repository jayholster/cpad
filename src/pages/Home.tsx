import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Video, 
  Calendar, 
  FileText, 
  ExternalLink,
  BookOpen,
  Clock
} from "lucide-react";

const Home = () => {
  const weeks = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Creating & Learning with AI
              </h1>
              <p className="text-xl text-primary-foreground/80 font-medium">
                AA290G • Fall 2025
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10 inline-block">
              <p className="text-primary-foreground/90">
                Wed 2:30–3:45 • Borland 113 • Dr. Jacob Holster
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Course Description */}
        <section>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-ink mb-6">About This Course</h2>
              <div className="space-y-4 text-ink-muted">
                <p>A hands-on exploration of AI tools for creative and analytical work. Students will create portfolio-ready artifacts while learning to evaluate AI systems critically and ethically.</p>
                <p>This course emphasizes practical experience with AI tools, thoughtful comparison of their capabilities and limitations, and reflection on broader implications for creativity, learning, and society.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Course Info */}
        <section>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border border-border">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-ink mb-2">Schedule</h3>
                <p className="text-ink-muted text-sm">Wednesdays 2:30–3:45</p>
                <p className="text-ink-muted text-sm">Hybrid 50/50</p>
              </CardContent>
            </Card>
            
            <Card className="border border-border">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-ink mb-2">Deadlines</h3>
                <p className="text-ink-muted text-sm">Weekly tasks due</p>
                <p className="text-ink-muted text-sm">Sundays @ 11:59 PM</p>
              </CardContent>
            </Card>
            
            <Card className="border border-border">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 text-warn mx-auto mb-3" />
                <h3 className="font-semibold text-ink mb-2">Materials</h3>
                <p className="text-ink-muted text-sm">Canvas modules</p>
                <p className="text-ink-muted text-sm">Weekly content</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:jbh6331@psu.edu" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Dr. Holster
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://psu.zoom.us/j/5207592977" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Zoom Room Link
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://psu.instructure.com/courses/2421561" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Canvas Course
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/syllabus" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Course Policies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Weekly Modules */}
        <section>
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">Course Modules</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {weeks.map((week) => {
              // Use actual course titles from timeline data
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

              const weekData = getWeekData(week);

              return (
                <Card key={week} className="border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className={`h-32 bg-gradient-to-br ${weekData.from} ${weekData.via} ${weekData.to} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                          <div className="text-2xl font-bold">Week {week}</div>
                          <div className="text-sm opacity-90">{weekData.title}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                          <Link to={`/week${week}`} className="flex items-center justify-center gap-2">
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