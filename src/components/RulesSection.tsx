
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle, BookOpen, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function RulesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('rules-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const generalRules = [
    "Respect all players and staff members",
    "No harassment, hate speech, or discrimination",
    "No cheating, hacking, or exploiting bugs",
    "No advertising other servers",
    "Use common sense and follow roleplay etiquette",
  ];

  const roleplayRules = [
    "Stay in character at all times in roleplay areas",
    "No random death match (RDM)",
    "No vehicle death match (VDM)",
    "No combat logging",
    "No metagaming (using out-of-character information in roleplay)",
  ];

  return (
    <section 
      id="rules-section" 
      className={cn(
        "py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10 transition-all duration-700",
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Server Rules
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our server rules are designed to ensure everyone has a fair and enjoyable experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-12">
          <Card className="glass-card overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                General Rules
              </CardTitle>
              <CardDescription>
                Rules that apply to all players at all times
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {generalRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Roleplay Guidelines
              </CardTitle>
              <CardDescription>
                Specific rules for roleplaying scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {roleplayRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-6">
            View the complete list of server rules and guidelines on our rules page
          </p>
          <Button asChild className="gap-2">
            <a href="/rules">
              View All Rules <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
