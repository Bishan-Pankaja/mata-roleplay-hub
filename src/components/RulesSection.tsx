
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle, BookOpen, ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// Define rules in both languages
const rulesData = {
  en: {
    general: {
      title: "General Rules",
      description: "Rules that apply to all players at all times",
      rules: [
        "Respect all players and staff members",
        "No harassment, hate speech, or discrimination",
        "No cheating, hacking, or exploiting bugs",
        "No advertising other servers",
        "Use common sense and follow roleplay etiquette",
      ]
    },
    roleplay: {
      title: "Roleplay Guidelines",
      description: "Specific rules for roleplaying scenarios",
      rules: [
        "Stay in character at all times in roleplay areas",
        "No random death match (RDM)",
        "No vehicle death match (VDM)",
        "No combat logging",
        "No metagaming (using out-of-character information in roleplay)",
      ]
    },
    viewAll: "View All Rules",
    viewComplete: "View the complete list of server rules and guidelines on our rules page"
  },
  si: {
    general: {
      title: "සාමාන්‍ය නීති",
      description: "සෑම විටම සියලුම ක්‍රීඩකයින්ට අදාළ වන නීති",
      rules: [
        "සියලුම ක්‍රීඩකයින් සහ කාර්ය මණ්ඩලයට ගරු කරන්න",
        "හිරිහැර කිරීම, වෛරී කථා හෝ වෙනස්කම් කිරීම නොකරන්න",
        "වංචා කිරීම, හැකින් හෝ දෝෂ සූරාකෑම නොකරන්න",
        "වෙනත් සේවාදායකයන් ප්‍රචාරණය නොකරන්න",
        "සාමාන්‍ය බුද්ධිය භාවිතා කර රෝල්ප්ලේ ආචාරධර්ම අනුගමනය කරන්න",
      ]
    },
    roleplay: {
      title: "රෝල්ප්ලේ මාර්ගෝපදේශ",
      description: "රෝල්ප්ලේ අවස්ථා සඳහා විශේෂිත නීති",
      rules: [
        "රෝල්ප්ලේ ප්‍රදේශවල සෑම විටම චරිතය තුළ රැඳී සිටින්න",
        "අහඹු මරණ තරඟ (RDM) නොකරන්න",
        "වාහන මරණ තරඟ (VDM) නොකරන්න",
        "සටන් පිටවීම් නොකරන්න",
        "මෙටාගේමින් නොකරන්න (රෝල්ප්ලේ තුළ චරිතයෙන් පිටත තොරතුරු භාවිතා කිරීම)",
      ]
    },
    viewAll: "සියලුම නීති බලන්න",
    viewComplete: "අපගේ නීති පිටුවේ සම්පූර්ණ සේවාදායක නීති සහ මාර්ගෝපදේශ ලැයිස්තුව බලන්න"
  }
};

export function RulesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<"en" | "si">("en");

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

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "si" : "en");
  };

  const currentRules = rulesData[language];

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
            {language === "en" ? "Server Rules" : "සේවාදායක නීති"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === "en" 
              ? "Our server rules are designed to ensure everyone has a fair and enjoyable experience" 
              : "අපගේ සේවාදායක නීති සෑම කෙනෙකුටම සාධාරණ සහ සතුටුදායක අත්දැකීමක් ලබා දීමට සැලසුම් කර ඇත"}
          </p>
          <Button 
            onClick={toggleLanguage} 
            variant="outline" 
            size="sm" 
            className="mt-4 gap-2 rounded-full"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "සිංහල" : "English"}
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-12">
          <Card className="glass-card overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                {currentRules.general.title}
              </CardTitle>
              <CardDescription>
                {currentRules.general.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentRules.general.rules.map((rule, index) => (
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
                {currentRules.roleplay.title}
              </CardTitle>
              <CardDescription>
                {currentRules.roleplay.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentRules.roleplay.rules.map((rule, index) => (
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
            {currentRules.viewComplete}
          </p>
          <Button asChild className="gap-2">
            <a href="/rules">
              {currentRules.viewAll} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
