import type { Route } from "./+types/home";
import { usePuterStore } from "~/lib/puter";
import { Link } from "react-router";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { ArrowRight, CheckCircle, FileText, Star } from "lucide-react";
import { Hero } from "~/components/ui/animated-hero";
import { CallToActionSection } from "~/components/CallToActionSection";
import { FeatureSection } from "~/components/ui/feature-section";
import { TestimonialSection } from "~/components/ui/testimonial-section";
import { StatsSection } from "~/components/ui/stats-section";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "QuickHire AI - Smart Resume Feedback" },
    {
      name: "description",
      content: "Smart feedback for your dream job applications!",
    },
  ];
}

export default function Home() {
  const { kv } = usePuterStore();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list("resume:*", true)) as KVItem[];

      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  return (
    <>


      <main className="flex-1">
        <Hero />

        {/* How It Works Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Our platform provides comprehensive resume analysis and feedback to help you land your dream job in three simple steps.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Upload Your Resume</h3>
                <p className="mt-2 text-muted-foreground">
                  Submit your resume in PDF format and provide the job description for the role you're targeting.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Star className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Receive AI Feedback</h3>
                <p className="mt-2 text-muted-foreground">
                  Our AI analyzes your resume against the job description, providing a detailed report and an ATS score.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Optimize and Apply</h3>
                <p className="mt-2 text-muted-foreground">
                  Use our feedback to improve your resume and increase your chances of getting an interview.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <FeatureSection />
        
        {/* Stats Section */}
        <StatsSection />

        {/* Resume List Section (if user has resumes) */}
        {!loadingResumes && resumes.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Your Resumes
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Review your submissions and check AI-powered feedback.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {resumes.map((resume) => (
                  <Link key={resume.id} to={`/resume/${resume.id}`}>
                    <Card className="h-full border-border/40 bg-background/60 transition-all hover:border-primary/50 hover:shadow-md">
                      <CardContent className="flex flex-col p-6">
                        <h3 className="line-clamp-1 text-xl font-bold">
                          {resume.name || "Untitled Resume"}
                        </h3>
                        <p className="line-clamp-2 flex-1 text-muted-foreground">
                          {resume.jobTitle || "No job title specified"}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            {new Date(resume.createdAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            <Star className="h-3 w-3" />
                            {resume.score || "N/A"}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Find answers to common questions about our platform and services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
                <h3 className="text-xl font-bold mb-3">How accurate is the AI feedback?</h3>
                <p className="text-muted-foreground">Our AI is trained on thousands of successful resumes and hiring patterns. It provides highly accurate feedback based on industry standards and ATS requirements.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
                <h3 className="text-xl font-bold mb-3">Do you offer enterprise solutions?</h3>
                <p className="text-muted-foreground">Yes, we provide customized enterprise solutions for companies of all sizes. Contact our sales team to discuss your specific requirements.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
                <h3 className="text-xl font-bold mb-3">Is there a free trial available?</h3>
                <p className="text-muted-foreground">Yes, we offer a limited free trial that allows you to analyze one resume. Sign up on our platform to get started.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
                <h3 className="text-xl font-bold mb-3">How secure is my resume data?</h3>
                <p className="text-muted-foreground">We take data security seriously. All uploaded resumes are encrypted, and we never share your personal information with third parties without your consent.</p>
              </div>
            </div>
          </div>
        </section>

        <CallToActionSection />
      </main>


    </>
  );
}
