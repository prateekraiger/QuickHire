import { Users, FileCheck, Building, Award } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "10,000+",
    label: "Happy Users",
    description: "Job seekers who improved their resumes"
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    value: "25,000+",
    label: "Resumes Analyzed",
    description: "Detailed feedback provided"
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    value: "500+",
    label: "Companies Hiring",
    description: "From our optimized resumes"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "85%",
    label: "Success Rate",
    description: "Users who received interview calls"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            We've helped thousands of job seekers land their dream jobs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all hover:border-primary/30">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}