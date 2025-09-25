import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { 
  ExternalLink,
  GraduationCap,
  Users,
  Shield,
  Heart,
  AlertCircle,
  Camera,
  BookOpen,
  Clock
} from "lucide-react";

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Header 
        title="Course Policies"
        subtitle="AA290G: Creating & Learning with AI"
      />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Top Navigation */}
        <section>
          <div className="flex justify-start">
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Course Home
              </Link>
            </Button>
          </div>
        </section>

        {/* Grading Scale */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Grading Scale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-ink-muted mb-4">The following grading scale will be used in the course:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">100-93%</span>
                    <span className="font-bold text-primary">A</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">92-90%</span>
                    <span className="font-bold">A-</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">89-87%</span>
                    <span className="font-bold">B+</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">86-83%</span>
                    <span className="font-bold">B</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">82-80%</span>
                    <span className="font-bold">B-</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">79-77%</span>
                    <span className="font-bold">C+</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">76-70%</span>
                    <span className="font-bold">C</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">69-60%</span>
                    <span className="font-bold">D</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Land Acknowledgement */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                Land Acknowledgement Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-ink-muted leading-relaxed">
                Penn State is a community of learners situated in a complex environment shaped by its contemporary inhabitants and the ancestral custodians of this land. We acknowledge and celebrate the Susquehannock, the original stewards and owners of the land upon which we gather to learn, create, and grow. We recognize the problematic and ongoing nature of colonialism and seek to use our musical and pedagogical skill to work for equity, inclusion, and access for all humans.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Attendance Policy */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-warn" />
                Attendance Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-ink-muted">
                Students are responsible for attending class and for completing all assessments and assignments on the due dates listed in the syllabus. Expectations for attendance include that healthy students are present for every class meeting.
              </p>
              <p className="text-ink-muted">
                Given the hybrid nature of this course, one excused absence will be permitted. An excused absence is an illness, school sponsored trip, required military service, or death in the family. If a student is going to be absent, they must inform the instructor via email, text, or phone prior to the beginning of the class meeting.
              </p>
              <p className="text-ink-muted">
                Additionally, students are expected to be prompt and ready to begin at the designated start time. If a student is going to arrive late, they must inform the instructor via email, text, or phone prior to the beginning of the class meeting. Three unexcused tardies will equal one excused absence.
              </p>
              <div className="bg-warn/10 border border-warn/20 rounded-lg p-4">
                <p className="text-sm text-ink-muted">
                  <strong>Note:</strong> False claims of legitimate or unavoidable absence may be considered academic integrity violations (Senate Policy 49-20, AAPP G-9).
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Academic Integrity */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Academic Integrity Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-ink-muted">
                All Penn State policies regarding ethics and honorable behavior apply to this course. Academic integrity is the pursuit of scholarly activity free from fraud and deception and is an educational objective of this institution.
              </p>
              <p className="text-ink-muted">
                Academic dishonesty includes, but is not limited to, cheating, plagiarizing, fabricating of information or citations, facilitating acts of academic dishonesty by others, having unauthorized possession of examinations, submitting work of another person or work previously used without informing the instructor, or tampering with the academic work of other students.
              </p>
              <p className="text-ink-muted">
                For any material or ideas obtained from other sources, such as the text or things you see on the web, in the library, etc., a source reference must be given. Direct quotes from any source must be identified as such.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="http://artsandarchitecture.psu.edu/students/acad_integrity" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  College Academic Integrity Statement
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Student Disability Resources */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent" />
                Student Disability Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-ink-muted">
                Penn State is committed to ensuring facility and program access to students with either permanent or temporary disabilities through a variety of services and equipment.
              </p>
              <p className="text-ink-muted">
                In order to receive consideration for reasonable accommodations, you must contact the appropriate disability services office at the campus where you are officially enrolled, participate in an intake interview, and provide documentation.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="http://equity.psu.edu/sdr/disability-coordinator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    SDR Website
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="http://equity.psu.edu/sdr/guidelines" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Documentation Guidelines
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Counseling and Psychological Services */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Counseling and Psychological Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-ink-muted">
                Many students at Penn State face personal challenges or have psychological needs that may interfere with their academic progress, social development, or emotional wellbeing. The university offers a variety of confidential services to help you through difficult times.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium text-ink">CAPS (University Park)</p>
                    <p className="text-sm text-ink-muted">814-863-0395</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium text-ink">Penn State Crisis Line</p>
                    <p className="text-sm text-ink-muted">877-229-6400</p>
                    <p className="text-xs text-ink-muted">24 hours/7 days/week</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium text-ink">Crisis Text Line</p>
                    <p className="text-sm text-ink-muted">Text LIONS to 741741</p>
                    <p className="text-xs text-ink-muted">24 hours/7 days/week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources for Acts of Discrimination */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-warn" />
                Resources for Acts of Discrimination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-ink-muted">
                Consistent with University Policy AD29, students who believe they have experienced or observed a hate crime, an act of intolerance, discrimination, or harassment that occurs at Penn State are urged to report these incidents as outlined on the University's Report Bias webpage.
              </p>
              <p className="text-ink-muted">
                If you experience, or know of another student who has experienced discrimination, you may choose to contact the Associate Director for Equity, Diversity and Inclusion for the School of Music, Velvet Brown (vmb10@psu.edu).
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Photo and Video Images */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Camera className="w-6 h-6 text-accent" />
                Photo and Video Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-ink-muted">
                Enrollment in this class implies consent to use your image for school/university promotional materials and on social media sites. Your participation in online Zoom meetings indicates your consent for these sessions to be recorded.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Bottom Navigation */}
        <section>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Back to Course Home
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Syllabus;