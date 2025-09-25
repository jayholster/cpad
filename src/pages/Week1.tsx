import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import CourseTimeline from "@/components/CourseTimeline";
import TaskChecklist from "@/components/TaskChecklist";

import StatsCards from "@/components/StatsCards";
import LearningOutcomes from "@/components/LearningOutcomes";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Video, 
  Calendar, 
  FileText, 
  MessageCircle, 
  ExternalLink,
  Info,
  Users,
  CheckCircle2,
  Clock,
  Copy,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";

const Week1 = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const taskItems = [
    {
      name: "Gemini",
      url: "https://gemini.google/students",
      description: "AI Pro for Students / free tier"
    },
    {
      name: "ChatGPT",
      url: "https://chat.openai.com/signup",
      description: "free; Plus recommended if possible"
    },
    {
      name: "Claude",
      url: "https://claude.ai",
      description: "free"
    },
    {
      name: "Lovable",
      url: "https://lovable.dev",
      description: "free tier"
    },
    {
      name: "Udio",
      url: "https://udio.com",
      description: "free plan/trial"
    },
    {
      name: "Leonardo AI",
      url: "https://leonardo.ai",
      description: "free, ~150 fast tokens/day"
    },
    {
      name: "Perplexity",
      url: "https://perplexity.ai/backtoschool",
      description: "Back to School page"
    },
    {
      name: "Firebase Studio",
      url: "https://firebase.google.com/docs/studio",
      description: "free access"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <Header 
        title="Week 1: Getting Started"
        subtitle="AA290G: Creating & Learning with AI"
        dueDate="Sun Aug 31, 11:59 PM"
      />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        
        {/* Top Navigation */}
        <section>
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Course Home
              </Link>
            </Button>
            
            <Button asChild>
              <Link to="/week2" className="flex items-center gap-2">
                Week 2
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
        

        {/* What This Course Is */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-ink mb-6">What This Course Is</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-ink">Make</h3>
                    <p className="text-ink-muted text-sm">text, image, music, video—portfolio-ready artifacts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-medium text-ink">Learn by doing</h3>
                    <p className="text-ink-muted text-sm">weekly mini-tasks + one bigger project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-warn mt-0.5" />
                  <div>
                    <h3 className="font-medium text-ink">Compare/contrast tools</h3>
                    <p className="text-ink-muted text-sm">strengths, limits, trade-offs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-ink">Reflect on impact</h3>
                    <p className="text-ink-muted text-sm">bias, privacy, attribution, cultural context</p>
                  </div>
                </div>
              </div>
            </div>
            
            <LearningOutcomes />
          </div>
        </section>

        {/* Logistics */}
        <section>
          <h2 className="text-2xl font-semibold text-ink mb-6">Logistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-ink">Meets Wednesdays 2:30–3:45</p>
                      <p className="text-sm text-ink-muted">(Borland 113)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-ink">Hybrid 50/50</p>
                      <p className="text-sm text-ink-muted">in-person + weekly async work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-warn mt-0.5" />
                    <div>
                      <p className="font-medium text-ink">All weekly tasks due Sundays</p>
                      <p className="text-sm text-ink-muted">@ 11:59 PM (Canvas)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-ink mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="#calendar" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Full Course Calendar
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="https://psu.instructure.com/courses/2421561" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Canvas Course Page
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Assignments & Points */}
        <section>
          <h2 className="text-2xl font-semibold text-ink mb-6">Assignments & Points</h2>
          <StatsCards />
          <div className="mt-4 text-center">
            <p className="text-ink-muted">
              <strong>Note:</strong> Presentations + in-class work are required to pass
            </p>
          </div>
        </section>

        {/* Course Calendar */}
        <section id="calendar">
          <h2 className="text-2xl font-semibold text-ink mb-6">Full Course Calendar</h2>
          <CourseTimeline />
        </section>


        {/* Use of AI & Originality */}
        <section>
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-4">Use of AI & Originality</h3>
                  <div className="space-y-3 text-ink-muted">
                    <p>• You are expected to use AI; you must also add value beyond it</p>
                    <p>• Document your process (briefly) when you submit: models, prompts, key edits</p>
                    <p>• If work looks low-effort or obviously AI-written, I'll tell you that in feedback and ask for revision or process evidence</p>
                    <p>• I may request a live walkthrough or source files for any submission</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Space Care */}
        <section>
          <h2 className="text-2xl font-semibold text-ink mb-6">Space Care (Borland 113)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-ink">Use the whiteboards</p>
                    <p className="text-sm text-ink-muted">walls & tables — erase before you leave</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-ink">No food or drinks</p>
                    <p className="text-sm text-ink-muted">clean spills/crumbs immediately if it happens</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-ink">Tidy up</p>
                    <p className="text-sm text-ink-muted">cables and chairs — leave better than found</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Get Help */}
        <section>
          <h2 className="text-2xl font-semibold text-ink mb-6">How to Get Help</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card className="border border-border hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-ink">Canvas</p>
                      <p className="text-sm text-ink-muted">weekly module pages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-border hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-ink">Office hours</p>
                      <p className="text-sm text-ink-muted">email to schedule (Zoom or in-person)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <Card className="border border-border hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-warn" />
                    <div>
                      <p className="font-medium text-ink">Quick questions</p>
                      <p className="text-sm text-ink-muted">ask in class or Canvas discussion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button variant="default" className="w-full" asChild>
                <a href="mailto:jbh6331@psu.edu" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Dr. Holster
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Week 1 Activities */}
        <section>
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-ink mb-8">Week 1 Activities</h2>
              
              <div className="space-y-10">
                {/* Step 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">1</div>
                    <h3 className="text-xl font-medium text-ink">Make one phone-readable poster (1080×1920) in ChatGPT Images</h3>
                  </div>
                  <p className="text-ink-muted mb-6 italic">Pair up if needed.</p>
                  
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/16247eaa-1cf6-47d8-bad4-7fc12c923d2b.png" 
                      alt="Example Two Truths and a Lie poster showing a cartoon person with options: A) I love to travel, B) Moved here from Colorado, C) Play saxophone"
                      className="w-64 h-auto rounded-lg shadow-md border border-border mx-auto"
                    />
                    <p className="text-sm text-ink-muted text-center mt-2 italic">Example poster</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="bg-primary text-primary-foreground">Option A</Badge>
                          <h4 className="font-semibold text-ink">Two Truths and a Lie</h4>
                        </div>
                        <div className="space-y-3 text-sm text-ink-muted">
                          <p><strong>Prompt (paste + fill):</strong></p>
                          <div className="bg-muted/50 p-4 rounded border-l-4 border-primary space-y-2">
                            <p>Create a clean poster titled "Two Truths & a Lie."</p>
                            <p>Three big caption boxes labeled A, B, C with simple icons.</p>
                            <p>A: [SHORT TRUTH HERE] B: [SHORT TRUTH HERE] C: [SHORT LIE HERE]</p>
                            <p>High contrast, large text, no emojis/watermarks.</p>
                            <p>Randomly remix statements with letter names. Do not reveal which is the lie.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="bg-secondary text-secondary-foreground">Option B</Badge>
                          <h4 className="font-semibold text-ink">About Me</h4>
                        </div>
                        <div className="space-y-3 text-sm text-ink-muted">
                          <p><strong>Prompt (paste + fill):</strong></p>
                          <div className="bg-muted/50 p-4 rounded border-l-4 border-secondary space-y-2">
                            <p>Create a clean poster titled "About Me."</p>
                            <p>Big stylized avatar/character representing me (no photo),</p>
                            <p>one headline "Hi, I'm [First name]" and three micro-tags: [tag1], [tag2], [tag3].</p>
                            <p>High contrast, large text, no emojis/watermarks.</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="w-3 h-3" />
                              Open ChatGPT
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">2</div>
                    <h3 className="text-xl font-medium text-ink">Turn it into a website</h3>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-ink-muted mb-2 italic">Example result:</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://visual-detailer-web.lovable.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-3 h-3" />
                        View Example Website
                      </a>
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="bg-primary text-primary-foreground">Option A</Badge>
                          <h4 className="font-semibold text-ink">ChatGPT (code)</h4>
                        </div>
                        <div className="space-y-4 text-sm text-ink-muted">
                          <div>
                            <p className="font-medium text-ink mb-2">On mobile:</p>
                            <div className="bg-muted/50 p-3 rounded border-l-4 border-primary">
                              <p>Paste your Step 1 text + images, ask:</p>
                              <p className="italic mt-2">"Make a simple mobile-first one-page website from this. Show the result in a canvas/preview I can scroll on my phone."</p>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-ink mb-2">On desktop:</p>
                            <div className="bg-muted/50 p-3 rounded border-l-4 border-primary">
                              <p>Paste the same, ask:</p>
                              <p className="italic mt-2">"Make a simple mobile-first one-page website from this. Return a single HTML file (index.html) I can open in my browser."</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="w-3 h-3" />
                              Open ChatGPT
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="bg-secondary text-secondary-foreground">Option B</Badge>
                          <h4 className="font-semibold text-ink">Lovable (no-code)</h4>
                        </div>
                        <div className="space-y-3 text-sm text-ink-muted">
                          <div className="bg-muted/50 p-3 rounded border-l-4 border-secondary">
                            <p>New page → paste your Step 1 text + drop in your images.</p>
                            <p className="mt-2">Choose a clean layout → Publish/Preview → open on your phone to check readability.</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="w-3 h-3" />
                              Open Lovable
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Task 1 - Account Setup */}
        <section id="task1">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-ink">
                Task 1: Set up ALL accounts & capture login screenshots
              </h3>
              <Badge variant="warn" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Due Sun Aug 31, 11:59 PM
              </Badge>
            </div>
            
            <div className="grid gap-4">
              {taskItems.map((item, index) => (
                <Card key={index} className="border border-border hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                          <span className="font-semibold text-ink">{item.name}</span>
                        </div>
                        <p className="text-sm text-ink-muted">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyUrl(item.url)}
                          className="flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" />
                          {copiedUrl === item.url ? "Copied!" : "Copy URL"}
                        </Button>
                        <Button
                          variant="accent"
                          size="sm"
                          asChild
                        >
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Visit
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Task 1 Submission Information */}
        <section>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-ink mb-4">Task 1: What to Submit</h3>
              <div className="text-sm text-ink-muted space-y-3">
                <p><strong>Submit a single PDF or DOCX file containing:</strong></p>
                
                <div className="space-y-2">
                  <p><strong>8 screenshots</strong> (one per tool): your logged-in home/dashboard for each.</p>
                  <p><strong>Short reflection (100–150 words):</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Which tool will you reach for first and why?</li>
                    <li>• Any signup snags to flag (1–2 sentences).</li>
                  </ul>
                </div>
                
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-2">How to create PDF:</p>
                  <p>Save all screenshots and your reflection in one PDF. On Mac, select all screenshot files, click quick actions, create a PDF. On Windows, select all of your images and hit print, print to PDF.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Navigation */}
      <div className="py-8 bg-background/80 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              {/* No previous week for Week 1 */}
            </div>
            
            <Link to="/">
              <Button variant="ghost">Course Home</Button>
            </Link>
            
            <div>
              <Link to="/week2">
                <Button variant="outline" className="gap-2">
                  Week 2
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Week1;
