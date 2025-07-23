import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const Testimonial = ({ quote, author, role, rating }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "QuickHire AI helped me land my dream job at Google. The AI feedback was spot on and helped me optimize my resume perfectly.",
      author: "Sarah Johnson",
      role: "Software Engineer at Google",
      rating: 5
    },
    {
      quote: "I was struggling with my resume for months. QuickHire AI gave me actionable feedback that made a huge difference.",
      author: "Michael Chen",
      role: "Product Manager at Microsoft",
      rating: 5
    },
    {
      quote: "The ATS score feature helped me understand why I wasn't getting callbacks. After implementing the suggestions, I got 3 interviews in a week!",
      author: "Jessica Williams",
      role: "Data Scientist at Amazon",
      rating: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Join thousands of job seekers who have improved their resumes and landed their dream jobs with QuickHire AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}