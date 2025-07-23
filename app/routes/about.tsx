import type { Route } from "./+types/about";
import { Rocket, Target, Cpu, Users, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About QuickHire AI - Our Mission & Vision" },
    {
      name: "description",
      content: "Learn about QuickHire AI's mission to revolutionize hiring with AI technology, our vision, and the team behind our innovative platform.",
    },
  ];
}

export default function About() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About QuickHire AI</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              We're revolutionizing the hiring process with cutting-edge AI technology, empowering job seekers to land their dream jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-muted/30 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
              <div className="mb-6 p-4 bg-primary/10 rounded-full inline-block">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To bridge the gap between job seekers and employers by providing intelligent, data-driven insights into resume optimization and candidate matching, making the job search process more efficient and effective for everyone involved.
              </p>
            </div>
            <div className="bg-muted/30 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/30">
              <div className="mb-6 p-4 bg-primary/10 rounded-full inline-block">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be the leading AI-powered platform for career advancement and talent acquisition, making the job market more transparent, accessible, and equitable for everyone, regardless of their background or experience level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Technology</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Powered by advanced AI to deliver accurate and effective resume optimization
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="p-4 bg-primary/10 rounded-full mr-6 mb-4 md:mb-0">
                <Cpu className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Advanced AI Analysis</h3>
                <p className="text-lg text-muted-foreground">
                  QuickHire AI utilizes advanced machine learning algorithms and natural language processing (NLP) to analyze resumes, extract key skills, and match them against job descriptions with remarkable accuracy.
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Our proprietary ATS (Applicant Tracking System) compatibility checker helps job seekers optimize their resumes to pass initial screening filters, significantly increasing their chances of landing an interview. We continuously research and integrate the latest AI advancements to provide the most accurate and effective tools for our users.
            </p>
            <p className="text-lg text-muted-foreground">
              With our technology, we can identify missing keywords, suggest improvements to resume structure, and provide actionable feedback that helps candidates stand out in a competitive job market.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Passionate experts dedicated to transforming the hiring landscape
            </p>
          </div>
          <div className="bg-muted/30 rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="p-4 bg-primary/10 rounded-full mr-6 mb-4 md:mb-0">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Diverse Expertise</h3>
                <p className="text-lg text-muted-foreground">
                  Our team brings together AI engineers, data scientists, HR professionals, and career development experts with decades of combined experience.
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              We believe in the power of technology to create opportunities and are committed to building a platform that is not only powerful but also user-friendly and accessible to everyone. We are constantly striving to innovate and improve our services, driven by the success stories of our users and our passion for making a positive impact on people's careers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-primary/10 rounded-full">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Join Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Whether you're a job seeker looking for an edge or a company aiming to streamline your hiring process, QuickHire AI is here to help. Join our growing community and experience the future of recruitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/upload">Try QuickHire AI Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}