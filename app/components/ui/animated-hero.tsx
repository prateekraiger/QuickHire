import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, CheckCircle, Star, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["AI-Powered", "Smart", "Instant", "Professional"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
          {/* Left Section - Text Content */}
          <motion.div
            className="flex flex-col gap-8 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Zap className="w-4 h-4" />
              #1 AI Resume Analyzer
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Get{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    {titles.map((title, index) => (
                      <motion.span
                        key={index}
                        className={`absolute left-0 top-0 font-bold ${
                          title === "AI-Powered"
                            ? "text-primary"
                            : title === "Smart"
                            ? "text-blue-500"
                            : title === "Instant"
                            ? "text-purple-500"
                            : "text-accent"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          titleNumber === index
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: titleNumber > index ? -20 : 20 }
                        }
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {title}
                      </motion.span>
                    ))}
                  </span>
                  <span className="invisible">{titles[0]}</span>
                </span>{" "}
                <br />
                Resume Feedback
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform your resume with AI-powered analysis. Get instant
                feedback, ATS optimization, and land your dream job faster than
                ever.
              </p>
            </div>

            {/* Features List */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                "ATS-optimized resume scoring",
                "Instant AI-powered feedback",
                "Industry-specific recommendations",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg" className="gap-2 px-8 py-6 text-lg" asChild>
                <Link to="/upload">
                  Get Started Free <MoveRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Resumes Analyzed
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-foreground">
                    4.9
                  </span>
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Image/Visual */}
          <motion.div
            className="relative lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent rounded-3xl transform -rotate-2 -z-10"></div>

            {/* Main Resume Image Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/resume-1.png"
                alt="Sample Resume Analysis"
                className="w-full h-auto rounded-lg shadow-md"
              />

              {/* AI Score Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="font-bold">95/100</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-3 z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">ATS Optimized</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-3 z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Instant Feedback</span>
              </div>
            </motion.div>

            {/* Additional floating badge */}
            <motion.div
              className="absolute top-1/2 -left-4 bg-white rounded-lg shadow-lg p-3 z-10"
              animate={{ x: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Analyzing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
