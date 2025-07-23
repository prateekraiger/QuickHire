import { Link } from "react-router";
import { Button } from "./ui/button";

export function CallToActionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Upload your resume and get a free AI-powered review to see how you stack up against the competition.
          </p>
          <div className="mt-6">
            <Link to="/upload">
              <Button size="lg" className="gap-1">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
