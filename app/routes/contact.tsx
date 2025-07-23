import type { Route } from "./+types/contact";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact QuickHire AI - Get in Touch" },
    {
      name: "description",
      content: "Contact QuickHire AI for questions about our AI-powered resume optimization platform, partnership opportunities, or support.",
    },
  ];
}

export default function Contact() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              We'd love to hear from you! Reach out with questions, feedback, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Send us a message</h2>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      className="w-full" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Your email address" 
                      className="w-full" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="What is this regarding?" 
                    className="w-full" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    placeholder="Your message here..." 
                    className="w-full resize-none" 
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="flex flex-col">
              <div className="bg-muted/30 rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-lg text-muted-foreground">
                        <a href="mailto:info@quickhireai.com" className="hover:text-primary transition-colors">
                          info@quickhireai.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-lg text-muted-foreground">
                        <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                          +1 (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-lg text-muted-foreground">
                        123 AI Street<br />
                        Innovation City, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Find quick answers to common questions about QuickHire AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">How quickly will I receive a response?</h3>
              <p className="text-muted-foreground">We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your subject line.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Do you offer enterprise solutions?</h3>
              <p className="text-muted-foreground">Yes, we provide customized enterprise solutions for companies of all sizes. Contact our sales team to discuss your specific requirements.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Is there a free trial available?</h3>
              <p className="text-muted-foreground">Yes, we offer a limited free trial that allows you to analyze one resume. Sign up on our platform to get started.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">How secure is my resume data?</h3>
              <p className="text-muted-foreground">We take data security seriously. All uploaded resumes are encrypted, and we never share your personal information with third parties without your consent.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}