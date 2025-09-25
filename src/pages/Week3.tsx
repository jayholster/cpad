import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import WorkshopStations from "@/components/WorkshopStations";
import { Link } from "react-router-dom";
import { 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FileText
} from "lucide-react";

const Week3 = () => {
  const weekNumber = 3;
  const title = "Week 3: AI Ethics & Bias";
  const dueDate = "Sun Sep 14, 11:59 PM";
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


        {/* AI Ethics Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="mb-6">AI Ethics & Bias</h2>
              <p className="text-lg max-w-5xl">
                Today we'll explore the broader implications of AI beyond just functionality. We'll examine two critical dimensions: 
                <strong className="text-foreground"> environmental impact</strong> (carbon emissions and water usage) and <strong className="text-foreground">algorithmic bias</strong> (problems in training 
                data and outputs).
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Stations */}
        <section className="py-20 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-6xl mx-auto px-6">
            <WorkshopStations />
          </div>
        </section>


        {/* Next Steps Assignment */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-primary/5 border border-primary/20 rounded-3xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-medium text-foreground mb-8 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Next Steps: Task 3
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Reflecting on Ethics</h4>
                    <p className="text-muted-foreground text-lg">
                      Reflect on the following questions:
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-card/50 rounded-2xl p-6 border border-border/30">
                      <h5 className="text-lg font-semibold text-foreground mb-3">Scale & trade-offs:</h5>
                      <p className="text-muted-foreground">
                        What did your calculator scenario (you / class of 25 / PSU) reveal about the energy, carbon, and water costs of everyday AI use—and how do you feel about it?
                      </p>
                    </div>
                    
                    <div className="bg-card/50 rounded-2xl p-6 border border-border/30">
                      <h5 className="text-lg font-semibold text-foreground mb-3">Attachment & continuity:</h5>
                      <p className="text-muted-foreground">
                        After the Her clips and the 4o/community artifacts, what obligations—ethical or practical—do AI labs have when changing or removing a feature that relates to "personality," and where are your boundaries for relational AI. Consider the AI attachment assessment in the workshop as a starting point.
                      </p>
                    </div>
                    
                    <div className="bg-card/50 rounded-2xl p-6 border border-border/30">
                      <h5 className="text-lg font-semibold text-foreground mb-3">Bias & design:</h5>
                      <p className="text-muted-foreground">
                        Where have you seen bias or sycophancy shape chatbot/human interactive outcomes (who's represented, who's encouraged, who's put at risk), and how should that influence how you use AI for coursework or work?
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3">Submission Requirements:</h5>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Upload your response as a Word document or PDF</li>
                      <li>• Minimum 1 page or ~5 sentences for each question</li>
                      <li>• Due Sunday at 11:59 PM on Canvas</li>
                    </ul>
                    
                    <div className="pt-4">
                      <Button size="lg" variant="default" asChild>
                        <a href="https://psu.instructure.com/courses/2421561/assignments/17335076" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Submit on Canvas
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
              <div className="p-12">
                <h2 className="text-3xl font-light text-foreground mb-12 text-center">References</h2>
                
                <div className="grid gap-6 text-sm text-muted-foreground leading-relaxed">
                  {[
                    "Business Insider. (2025, June 21). How a data center operator is upgrading its services for AI — and trying to stay green. Business Insider. https://www.businessinsider.com/digital-realty-ai-infrastructure-data-centers-sustainability-strategy-2025-6",
                    "Environmental Protection Agency. (2022). eGRID 2022 summary tables. United States Environmental Protection Agency. https://www.epa.gov/egrid",
                    "Food & Water Watch. (2025, March). AI's water and energy footprint. Food & Water Watch. https://www.foodandwaterwatch.org/wp-content/uploads/2025/03/FSW_0325_AI_Water_Energy.pdf",
                    "Google Cloud. (2025, August 28). Measuring the environmental impact of AI inference. Google Cloud Blog. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference",
                    "ITPro. (2025, August 29). Google boasts that a single Gemini prompt uses roughly the same energy as a basic search — but that's not painting the full picture. ITPro. https://www.itpro.com/technology/artificial-intelligence/google-boasts-that-a-single-gemini-prompt-uses-roughly-the-same-energy-as-a-basic-search-but-thats-not-painting-the-full-picture",
                    "Morgan Stanley. (2025, March 17). AI boom may drain resources: Data centres' water use could hit 1,068 billion litres by 2028; Morgan Stanley report flags 11× rise. The Times of India. https://timesofindia.indiatimes.com/business/international-business/ai-boom-may-drain-resources-data-centres-water-use-could-hit-1068-billion-litres-by-2028-morgan-stanley-report-flags-11x-rise/articleshow/123758252.cms",
                    "Patterson, D., Gonzalez, J., Le, Q., Liang, C., & Dean, J. (2021). Carbon emissions and large neural network training [Preprint]. arXiv. https://arxiv.org/abs/2104.10350",
                    "Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and policy considerations for deep learning in NLP. Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, 3645–3650. https://doi.org/10.48550/arXiv.1906.02243",
                    "U.S. Department of Energy. (2023). Residential energy consumption survey (RECS): Average household electricity use. U.S. Energy Information Administration. https://www.eia.gov/consumption/residential/",
                    "U.S. Environmental Protection Agency. (2023). Greenhouse gases equivalencies calculator – Calculations and references. United States Environmental Protection Agency. https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references"
                  ].map((reference, index) => (
                    <div key={index} className="p-6 bg-background/50 rounded-xl border border-border/30">
                      <p>{reference}</p>
                    </div>
                  ))}
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

export default Week3;