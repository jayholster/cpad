import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";

interface ReasoningConcept {
  id: string;
  title: string;
  description: string;
  example: string;
  nonReasoningBehavior: string;
}

const concepts: ReasoningConcept[] = [
  {
    id: "multi-step",
    title: "Sustained Multi-Step Logic",
    description: "Can track a chain of reasoning across multiple steps without losing coherence.",
    example: "solving a math proof, debugging code, or analyzing a legal scenario with multiple clauses.",
    nonReasoningBehavior: "Non-reasoning models usually shortcut or skip steps."
  },
  {
    id: "break-down",
    title: "Break Down & Reframe Problems",
    description: "Can split a complex question into sub-questions, answer them separately, then integrate.",
    example: "\"Compare three theories of learning, then synthesize how they overlap and differ.\"",
    nonReasoningBehavior: "Non-reasoning models tend to give a one-shot summary."
  },
  {
    id: "error-checking",
    title: "Error Checking & Self-Correction",
    description: "Can catch mistakes mid-process and revise reasoning.",
    example: "\"Wait, I misapplied that formula, let me redo the calculation correctly.\"",
    nonReasoningBehavior: "Non-reasoning models rarely admit errors or retrace steps."
  },
  {
    id: "transparency",
    title: "Transparency (\"Show Your Work\")",
    description: "Can expose intermediate thoughts, logic trees, or planning steps.",
    example: "Useful for teaching how an answer was reached, not just the answer.",
    nonReasoningBehavior: "Non-reasoning models give the polished final but hide the reasoning."
  },
  {
    id: "comparisons",
    title: "Complex Comparisons & Tradeoffs",
    description: "Can weigh pros/cons across multiple dimensions (cost, ethics, feasibility) and prioritize.",
    example: "\"Rank these policy options for climate mitigation with reasoning.\"",
    nonReasoningBehavior: "Non-reasoning models usually list features without structured evaluation."
  },
  {
    id: "consistency",
    title: "Consistency Across a Longer Task",
    description: "Can maintain a line of thought over extended multi-part tasks.",
    example: "\"Read these five PDFs, extract arguments, then compare themes.\"",
    nonReasoningBehavior: "Non-reasoning models struggle to keep track if you push them past one round."
  }
];

export default function ReasoningModelsComparison() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentConcept = concepts[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : concepts.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < concepts.length - 1 ? prev + 1 : 0));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-ink mb-4">
          What Reasoning Models Can Do That Non-Reasoning Can't
        </h2>
        <p className="text-lg text-ink-muted max-w-3xl mx-auto">
          Explore the key capabilities that distinguish reasoning models from traditional language models.
        </p>
      </div>

      {/* Horizontal Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mb-6">
        {concepts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary scale-125" 
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to concept ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content Card */}
      <Card className="relative">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-center flex-1">
              <CardTitle className="text-xl font-semibold text-ink">
                {currentConcept.title}
              </CardTitle>
              <p className="text-sm text-ink-muted mt-1">
                {currentIndex + 1} of {concepts.length}
              </p>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-ink leading-relaxed">
              {currentConcept.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Reasoning Model Capability */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <h4 className="font-semibold text-ink">Reasoning Models</h4>
              </div>
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                <p className="text-sm text-ink-muted">
                  <span className="font-medium">Example:</span> {currentConcept.example}
                </p>
              </div>
            </div>

            {/* Non-Reasoning Model Limitation */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <h4 className="font-semibold text-ink">Non-Reasoning Models</h4>
              </div>
              <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                <p className="text-sm text-ink-muted">
                  {currentConcept.nonReasoningBehavior}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metacognition Example */}
      <Card>
        <CardContent className="p-6 text-center space-y-4">
          <img 
            src="/lovable-uploads/55f5c579-3741-4c4a-b8ba-ee059e554bf3.png" 
            alt="Example of AI metacognition - counting words in responses"
            className="mx-auto rounded-lg border border-border max-w-full h-auto"
          />
          <div className="space-y-2">
            <h4 className="font-semibold text-ink text-lg">Machine Metacognition</h4>
            <p className="text-ink-muted">
              Reasoning models demonstrate <strong>metacognition</strong> - thinking about thinking. 
              They can reflect on their own thought processes, plan responses, and control their output with self-awareness.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Navigation */}
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm" onClick={goToPrevious}>
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={goToNext}>
          Next
        </Button>
      </div>
    </section>
  );
}