import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ReasoningModelsComparison from "@/components/ReasoningModelsComparison";
import ShowdownPrompts from "@/components/ShowdownPrompts";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  FileText, 
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Week2 = () => {
  const weekNumber = 2;
  const title = "Week 2: Text-Based AI Models";
  const dueDate = "Sun Sep 7, 11:59 PM";
  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 15 ? weekNumber + 1 : null;

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title={title}
        subtitle="AA290G: Creating & Learning with AI"
        dueDate={dueDate}
      />

      {/* Main Content */}
      <div className="relative">
        
        
        {/* Reasoning Models Comparison Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <ReasoningModelsComparison />
          </div>
        </section>

        {/* Reasoning Showdown Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-foreground mb-6">Reasoning Showdown</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Compare reasoning models head-to-head in structured team activities.
              </p>
            </div>

            {/* Team Setup */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-medium text-foreground mb-8 flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Team Setup (4 students per group)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base font-medium">1</div>
                      <div>
                        <span className="font-semibold text-foreground block">ChatGPT Instant User</span>
                        <span className="text-sm text-muted-foreground">Uses the instant model</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base font-medium">2</div>
                      <div>
                        <span className="font-semibold text-foreground block">Claude User</span>
                        <span className="text-sm text-muted-foreground">Uses Claude</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base font-medium">3</div>
                      <div>
                        <span className="font-semibold text-foreground block">Gemini 2.5 User</span>
                        <span className="text-sm text-muted-foreground">Uses Gemini</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base font-medium">4</div>
                      <div>
                        <span className="font-semibold text-foreground block">ChatGPT Extension User</span>
                        <span className="text-sm text-muted-foreground">Uses Thinking mode plus one extension</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-medium text-foreground mb-8">Rules</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Prompt Delivery</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Instructor announces one prompt at a time</li>
                      <li>• Each role inputs the same prompt into their assigned tool</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Group Response Recording</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• After reviewing the four responses, the team decides together which was best</li>
                      <li>• Record that winning response and a short explanation in the shared Google Doc</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Ranking</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Teams must rank all four responses (1st–4th)</li>
                      <li>• Rankings and explanations go into the shared Google Doc</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Showdown Prompts */}
            <ShowdownPrompts />

            {/* Data Analysis Prompt */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-medium text-foreground mb-6">Data Analysis Prompt</h3>
                <div className="bg-muted/50 rounded-2xl p-6 border border-border/30">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Here's a dataset from a class activity where 6 groups ranked responses from ChatGPT Instant, Claude, Gemini 2.5, and ChatGPT Extension across multiple prompts. Analyze it by:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Calculating how often each tool placed 1st, 2nd, 3rd, or 4th overall</li>
                    <li>• Creating a summary table that shows average rank per tool</li>
                    <li>• Identifying which prompts had the most disagreement across groups (highest variance in rankings)</li>
                    <li>• Giving a short narrative on patterns: e.g., did one tool win more in science prompts vs analogy prompts?</li>
                    <li>• Visualizing the results (bar charts for average rank, heatmap for tool performance across prompts)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extended Tools Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-foreground mb-6">Extended Tools</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Explore advanced reasoning capabilities for specialized tasks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Deep Research */}
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Deep Research
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">What it does:</h4>
                      <p className="text-muted-foreground">
                        Breaks a problem into sub-questions, pulls from multiple sources (papers, PDFs, web), and synthesizes answers into a long-form, evidence-based explanation.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Goal:</h4>
                      <p className="text-muted-foreground">
                        Accuracy, comprehensiveness, citations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Feels like:</h4>
                      <p className="text-muted-foreground">
                        A student writing a mini research paper after reading a stack of articles.
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-3">Strengths:</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Reliable references and citations</li>
                        <li>• Stronger at "what do we know about X?" questions</li>
                        <li>• Good for class tasks where you want breadth and detail</li>
                      </ul>
                    </div>
                    
                    <div className="bg-destructive/10 rounded-2xl p-4 border border-destructive/20">
                      <h4 className="font-semibold text-foreground mb-3">Limitations:</h4>
                      <p className="text-muted-foreground">
                        Can be slower, less conversational, sometimes over-detailed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agent Mode */}
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-foreground mb-6 flex items-center gap-3">
                    <ExternalLink className="w-6 h-6 text-accent" />
                    Agent Mode
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">What it does:</h4>
                      <p className="text-muted-foreground">
                        Treats the model as an autonomous problem-solver. It plans steps, uses tools iteratively, and adapts based on intermediate results.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Goal:</h4>
                      <p className="text-muted-foreground">
                        Solve tasks, like ordering panera or creating a powerpoint, in addition to explanations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Feels like:</h4>
                      <p className="text-muted-foreground">
                        A student actually doing the work in front of you (checking sources, running a calculation, revising approach) instead of just writing a summary.
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-3">Strengths:</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Better at complex, multi-step tasks</li>
                        <li>• Dynamic: can change approach mid-task</li>
                        <li>• Good for workflow, problem-solving, or tool chaining</li>
                      </ul>
                    </div>
                    
                    <div className="bg-destructive/10 rounded-2xl p-4 border border-destructive/20">
                      <h4 className="font-semibold text-foreground mb-3">Limitations:</h4>
                      <p className="text-muted-foreground">
                        More prone to overcomplicating; sometimes burns time chasing unnecessary steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Activity */}
        <section className="py-20 bg-gradient-to-b from-background/50 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-medium text-foreground mb-8">Class Activity: Community Problem Root Cause Analysis</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Phase 1: Solo Problem Mapping</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Choose an issue that impacts a community you care about</li>
                      <li>• Write the problem at the top of a writable surface</li>
                      <li>• Using dry-erase markers, map root causes directly on classroom walls and tables</li>
                      <li>• Repeatedly ask <em>"Why does this happen?"</em> to reach 3-5 layers</li>
                      <li>• <strong>Note:</strong> Please erase your work afterward</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Phase 2: Gallery Walk & Feedback</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Quietly visit others' maps during the gallery walk</li>
                      <li>• On each map, add one concise note:</li>
                      <li className="ml-4">- What stands out to you?</li>
                      <li className="ml-4">- A branch that deserves deeper probing</li>
                      <li className="ml-4">- One more "Why?" or additional cause to explore</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Phase 3: Identify Leverage Points</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Return to your own map and identify 1-2 leverage points</li>
                      <li>• Look for: small, feasible changes with big ripple effects OR roots that drive many branches</li>
                      <li>• Circle or highlight your chosen leverage points</li>
                      <li>• Briefly annotate why you chose them and what could change if improved</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Assignment */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-primary/5 border border-primary/20 rounded-3xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-medium text-foreground mb-8 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Next Steps: Assignment
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Goal</h4>
                    <p className="text-muted-foreground text-lg">
                      Deepen your problem analysis, ground it in scholarship, and practice AI-assisted synthesis/presentation.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 rounded-2xl p-6 border border-border/30">
                    <div className="aspect-video">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/LPZh9BOjkQs?si=WR86N3t_Wp5ksPbr" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">Key Tasks</h4>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Watch 3Blue1Brown's LLM explainer and write a takeaway (2-3 sentences)</li>
                        <li>• Expand your root-cause map with 3-4 branches, one going 3+ layers deep</li>
                        <li>• Find 3-4 peer-reviewed scholarly sources</li>
                        <li>• Run "Deep Research" with your papers using the provided prompt</li>
                        <li>• Generate a 7-9 slide PowerPoint deck using ChatGPT Agent</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">Deliverables</h4>
                      <div className="grid gap-2 text-muted-foreground">
                        <div>• 3Blue1Brown takeaway (PDF/text)</div>
                        <div>• Root-cause map image + paragraph</div>
                        <div>• Deep Research report (PDF)</div>
                        <div>• Slide deck (.pptx)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="rounded-full px-8">
                      <a 
                        href="https://psu.instructure.com/courses/2421561/assignments/17335075" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Full Assignment
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 bg-gradient-to-b from-background/50 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {prevWeek ? (
                <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                  <Link to={`/week${prevWeek}`} className="flex items-center gap-3">
                    <ChevronLeft className="w-4 h-4" />
                    Week {prevWeek}
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}
              
              <Button size="lg" asChild className="rounded-full px-8">
                <Link to="/" className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4" />
                  Back to Course Home
                </Link>
              </Button>
              
              {nextWeek ? (
                <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                  <Link to={`/week${nextWeek}`} className="flex items-center gap-3">
                    Week {nextWeek}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Week2;