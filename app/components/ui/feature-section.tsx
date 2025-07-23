import { Cpu, FileSearch, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: <FileSearch className="h-10 w-10 text-primary" />,
    title: "ATS Optimization",
    description: "Our AI analyzes your resume against Applicant Tracking Systems to ensure maximum visibility to recruiters."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Keyword Analysis",
    description: "We identify missing keywords and skills from the job description to help you tailor your resume perfectly."
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "AI-Powered Feedback",
    description: "Get detailed, actionable feedback on how to improve your resume's content, format, and impact."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Privacy First",
    description: "Your data is secure and never shared with third parties. We prioritize your privacy at every step."
  }
];

export function FeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Our advanced AI tools help you create the perfect resume for your dream job
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-muted/30 rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all hover:border-primary/30">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}