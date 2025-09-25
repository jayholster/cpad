import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FileText,
  Sparkles,
  Users,
  Calendar,
  Globe,
  Play,
  Volume2
} from "lucide-react";
import klingInterface from "@/assets/kling-interface.png";
import klingDemo from "@/assets/kling-demo.gif";
import googleFlowDemo from "@/assets/google-flow-demo.gif";
import notatingImagesDemo from "@/assets/notating-images-demo.gif";
import midjourneyMoodboard from "@/assets/midjourney-moodboard.png";

const Week5 = () => {
  const weekNumber = 5;
  const title = "Week 5: World Models and Video Upskilling";
  const dueDate = "Sun Sep 28, 11:59 PM";
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
        {/* World Models Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="mb-4">World Models</h2>
              <p className="text-lg max-w-3xl">
                Moving generative AI from making frames to making worlds
              </p>
            </div>

            {/* Video Demo */}
            <div className="bg-card/30 rounded-2xl p-6 border border-border/30 max-w-4xl mx-auto mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground">DeepMind's Genie 3</h3>
                  <p className="text-sm text-muted-foreground">Interactive world generation in action</p>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ugoR9GfEHQk?si=N6stAwwhhTOe-PMN" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  World models move generative AI from making frames (images/video) to making worlds (coherent, explorable environments), enabling agents—and artists—to act, test, and learn inside simulations before touching reality. These are generative AI systems that learn an internal simulator of an environment—its objects, physics, and causal dynamics—and then use that simulator to predict and render what happens next.
                </p>
                
                <p>
                  Runway frames this as building an internal representation that can simulate future events, a step toward "general world models" for video and interactive media.
                  <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline">
                    Runway
                  </a>
                </p>
                
                <p>
                  DeepMind's Genie 3 illustrates the idea: from a text prompt, it generates persistent, interactive 3D worlds that run in real time, with improved temporal consistency over prior versions and enough memory to keep track of objects and layout as you move around—useful for training agents or prototyping virtual experiences.
                  <a href="https://deepmind.google/" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline">
                    Google DeepMind
                  </a>
                </p>
                
                <p>
                  Researchers argue true video world models should be causal, interactive, persistent, real-time, and physically accurate; progress on these fronts is why world models are discussed as a bridge from today's text/video generators to embodied, decision-making systems. Sort of like the holodeck on Star Trek.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Game Worlds */}
        <section className="py-10 bg-gradient-to-b from-background/50 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="mb-3">Game Worlds</h2>
            </div>

            {/* Game World Example Image */}
            <div className="rounded-2xl overflow-hidden mb-6 max-w-4xl mx-auto">
              <img src="/lovable-uploads/e0508721-e67d-4fb9-b6a7-82bed4b08525.png" alt="Interactive game world example" className="w-full h-auto" />
            </div>

            {/* Game Worlds Description */}
            <div className="bg-card/30 rounded-2xl p-6 border border-border/30 max-w-4xl mx-auto mb-8">
              <p className="text-sm text-muted-foreground">
                Interactive environments where stories, characters, and media generate on the fly. Consider designing worlds for:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-card/20 rounded-lg border border-border/20">
                <h4 className="font-medium text-foreground mb-2">Educational Simulations</h4>
                <p className="text-sm text-muted-foreground">Historical events, scientific concepts, or language learning</p>
              </div>
              <div className="p-4 bg-card/20 rounded-lg border border-border/20">
                <h4 className="font-medium text-foreground mb-2">Creative Sandboxes</h4>
                <p className="text-sm text-muted-foreground">Open-ended environments for artistic expression and experimentation</p>
              </div>
              <div className="p-4 bg-card/20 rounded-lg border border-border/20">
                <h4 className="font-medium text-foreground mb-2">Narrative Adventures</h4>
                <p className="text-sm text-muted-foreground">Branching stories that adapt to player choices and actions</p>
              </div>
            </div>

            <div className="bg-card/30 rounded-2xl p-6 border border-border/30 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground">Design Your Game World</h3>
                  <p className="text-sm text-muted-foreground">Collaborative brainstorming exercise</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Title/Name:
                  </label>
                  <Textarea 
                    placeholder="What would you call your game world?"
                    className="min-h-[60px] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    One-sentence description:
                  </label>
                  <Textarea 
                    placeholder="Describe your world in one compelling sentence..."
                    className="min-h-[60px] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Player goals (3 bullets): what the player is trying to achieve or learn.
                  </label>
                  <Textarea 
                    placeholder="• Goal 1:&#10;• Goal 2:&#10;• Goal 3:"
                    className="min-h-[80px] resize-none"
                  />
                </div>

              </div>

              <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-xs text-muted-foreground mb-2">
                  <strong className="text-foreground">Try it yourself:</strong> Explore interactive world generation at Runway's Game Worlds
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://play.runwayml.com/" target="_blank" rel="noopener noreferrer">
                    Game Worlds Beta <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling Tools */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="mb-4">Storytelling Tools</h2>
              <p className="max-w-2xl">
                Essential tools for AI-powered video creation and editing
              </p>
            </div>

            {/* Video Generation Tools */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Play className="w-4 h-4 text-primary" />
                    Kling AI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Keyframe workflow with DeepSeek prompt assistance for smooth video transitions</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src={klingInterface} alt="Kling AI interface" className="w-full h-auto" />
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer">
                      Try Kling <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Google Flow Studio
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Create/extend clips, maintain continuity with camera movements</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src={googleFlowDemo} alt="Google Flow Studio" className="w-full h-auto" />
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://labs.google/fx/tools/flow" target="_blank" rel="noopener noreferrer">
                      Flow Studio <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Preparation & Workflow */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Notating Images
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Add arrows/boxes/notes on frames for motion paths and timing guidance. Input an image you made into ChatGPT and ask it to annotate it, or open it in PowerPoint or another visual editor.</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src={notatingImagesDemo} alt="Image annotation demo" className="w-full h-auto" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Midjourney Moodboards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Build reference boards and apply consistent vibes using --p or Personalization toggle</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src={midjourneyMoodboard} alt="Midjourney moodboard interface" className="w-full h-auto" />
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://docs.midjourney.com/hc/en-us/articles/39193335040013-Moodboards" target="_blank" rel="noopener noreferrer">
                      Docs <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Character & Animation */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Wan-Animate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Animate characters from single images using performance video (motion + lip-sync)</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src="/lovable-uploads/636289ec-53a6-4fce-adb6-e428a1784b2c.png" alt="Character animation example" className="w-full h-auto" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://humanaigc.github.io/wan-animate/" target="_blank" rel="noopener noreferrer">
                        Project <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/Wan-Video/Wan2.2" target="_blank" rel="noopener noreferrer">
                        GitHub <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Play className="w-4 h-4 text-primary" />
                    Runway Aleph & Act Two
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Runway's latest video generation models for high-quality, consistent video content</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src="/lovable-uploads/7f9da2b4-5566-48c4-b753-191e30a1b0bb.png" alt="Runway Aleph and Act Two" className="w-full h-auto" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium text-sm text-foreground">Aleph</h4>
                      <p className="text-xs text-muted-foreground">Advanced video generation with improved consistency and quality</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground">Act Two</h4>
                      <p className="text-xs text-muted-foreground">Character-driven video generation with expressive facial animations</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://runwayml.com/research/introducing-runway-aleph" target="_blank" rel="noopener noreferrer">
                        Aleph <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://runwayml.com/research/introducing-act-two" target="_blank" rel="noopener noreferrer">
                        Act Two <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Audio & Post-Production */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-primary" />
                    Audio Generation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">AI tools for generating music and voice content</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src="/lovable-uploads/9c5cdc04-f670-401d-94e7-f67f508166d0.png" alt="Audio generation tools" className="w-full h-auto" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium text-sm text-foreground">Suno / Udio (music)</h4>
                      <p className="text-xs text-muted-foreground">Generate background music quickly; be specific or vibe-based</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground">ElevenLabs (voice)</h4>
                      <p className="text-xs text-muted-foreground">High-quality AI voices for narration and character dialogue</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://suno.com/" target="_blank" rel="noopener noreferrer">
                        Suno <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer">
                        ElevenLabs <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/20 border-border/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Staying Caught Up
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Follow AI video communities: r/aivideo, Runway's Discord, and AI video Twitter for latest releases</p>
                  <div className="rounded-lg overflow-hidden">
                    <img src="/lovable-uploads/a26db62a-ad69-4847-8c6e-d829371b9ce7.png" alt="r/aivideo community" className="w-full h-auto" />
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.reddit.com/r/aivideo/" target="_blank" rel="noopener noreferrer">
                      r/aivideo <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        {/* Tool Chaining Section */}
        <section className="py-20 bg-gradient-to-b from-background/50 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="mb-6">AI Tool Chaining</h2>
              <p className="text-lg max-w-4xl">
                Combining multiple AI tools and connecting their outputs to create more sophisticated results than any single tool could achieve alone.
              </p>
            </div>

            {/* Video Section */}
            <div className="relative max-w-5xl mx-auto mb-16">
              <div className="aspect-video bg-card rounded-3xl p-2 shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/mMiNiRBKiDs?si=VFTNqX2hyKykfuKD" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Workflow Visual */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border/50 max-w-5xl mx-auto">
              <h3 className="text-2xl font-medium text-foreground mb-8 text-center">Example workflow for this video</h3>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {[
                  { name: "ChatGPT", single: true },
                  { name: "Midjourney", single: true },
                  { name: "wan 2.2 + Veo", single: true },
                  { name: "Udio", single: true },
                  { name: "Filmora Editor", single: true }
                ].map((tool, index, array) => (
                  <div key={tool.name} className="flex items-center">
                    <div className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20">
                      {tool.name}
                    </div>
                    {index < array.length - 1 && (
                      <div className="mx-4 text-muted-foreground text-2xl">→</div>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                Used ChatGPT for prompts and planning → Midjourney for images and upscaling → wan 2.2 + Veo for animating + sound effects → Udio for music → edited with Filmora Editor.
              </p>
            </div>
          </div>
        </section>


        {/* Nano Banana Image Editing */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="mb-6">Nano Banana for Editing Images</h2>
              <p className="text-lg max-w-4xl">
                Edit images with natural language using Google's Nano Banana model in AI Studio.
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 mb-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-medium text-foreground mb-6">Try it yourself:</h3>
              <ol className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-1">1</span>
                  <span>Open <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">AI Studio</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-1">2</span>
                  <span>Select the Nano Banana model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-1">3</span>
                  <span>Upload an image and try the prompts shown below</span>
                </li>
              </ol>
            </div>

            {/* Image Grid - Single Example */}
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Dog Example */}
              <div className="space-y-4">
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/f9aafd32-d250-4a6c-8abb-7fd1e15bc930.png" 
                    alt="Original dog photo" 
                    className="w-full h-auto rounded-2xl border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full font-medium">Original</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/5418daa5-2d3f-4509-b0d8-fc94a7e229c6.png" 
                    alt="Edited dog photo" 
                    className="w-full h-auto rounded-2xl border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full font-medium">Edited</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 border border-border/30">
                  <code className="text-sm text-foreground font-mono">"turn towards his head a bit more"</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Task Assignment */}
        <section className="py-10 bg-gradient-to-b from-background/50 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-card/30 rounded-2xl p-6 border border-border/30 max-w-4xl mx-auto">
              <div className="p-6">
                <h3 className="text-2xl font-medium text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-accent" />
                  Video Upskilling (Task 5)
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Due: {dueDate}</p>
                      <p className="text-sm text-muted-foreground">Submit your video creation and reflection</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Assignment Requirements</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Make one 40 to 120 second video/short film that clearly uses at least one tool from today (Kling, Runway, Flow, Wan-Animate, Nano Banana, Suno/Udio, ElevenLabs, or image annotations). You can revise last week's reel, add a new element to it, make something entirely new, or try another approach—as long as the tool use is obvious. Submit the video plus two short sentences (which tool you used and what you changed).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="py-8 bg-background/80 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              {prevWeek && (
                <Link to={`/week${prevWeek}`}>
                  <Button variant="outline" className="gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Week {prevWeek}
                  </Button>
                </Link>
              )}
            </div>
            
            <Link to="/">
              <Button variant="ghost">Course Home</Button>
            </Link>
            
            <div>
              {nextWeek && (
                <Link to={`/week${nextWeek}`}>
                  <Button variant="outline" className="gap-2">
                    Week {nextWeek}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Week5;