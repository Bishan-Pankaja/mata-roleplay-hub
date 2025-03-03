
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Rules = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const ruleCategories = [
    {
      title: "General Rules",
      rules: [
        "Be respectful to all players and staff members.",
        "No harassment, hate speech, discrimination, or bullying.",
        "No spamming in chat or using excessive caps.",
        "No advertising other servers or websites.",
        "Follow staff instructions at all times.",
        "No exploiting bugs or glitches - report them to staff.",
        "No use of hacks, mods, or third-party software that gives unfair advantages.",
        "Keep discussions in the appropriate channels.",
        "No inappropriate or offensive content, including usernames and profile pictures.",
        "English is the primary language in global chat."
      ]
    },
    {
      title: "Roleplay Guidelines",
      rules: [
        "Stay in character at all times when in roleplay areas.",
        "No random death match (RDM) - don't kill players without a valid roleplay reason.",
        "No vehicle death match (VDM) - don't use vehicles as weapons without roleplay context.",
        "No combat logging (disconnecting during roleplay/combat situations).",
        "No metagaming (using out-of-character information in roleplay).",
        "No powergaming (forcing actions on others or doing impossible things).",
        "Respect others' roleplay and don't intentionally disrupt it.",
        "Use appropriate communication channels for in-character and out-of-character chat.",
        "Follow realistic roleplay scenarios - no superhuman abilities.",
        "No breaking character in roleplay areas."
      ]
    },
    {
      title: "Character & Property Rules",
      rules: [
        "Each player is allowed up to 3 characters.",
        "Characters must have realistic names appropriate for the setting.",
        "Keep your property secure and lock vehicles when not in use.",
        "Don't abandon vehicles in high-traffic areas.",
        "No trespassing on private property without roleplay reason.",
        "Report any property bugs or issues to staff.",
        "Characters should have distinct identities and backgrounds.",
        "No sharing accounts or characters between players.",
        "Respect the boundaries of other players' properties.",
        "All character actions should align with their established background and personality."
      ]
    },
    {
      title: "Criminal Activity Rules",
      rules: [
        "All criminal activities must have proper roleplay context.",
        "No random robberies or muggings without setup.",
        "Give victims a chance to roleplay during criminal activities.",
        "No excessive violence without proper escalation.",
        "Respect the outcomes of criminal roleplay.",
        "Bank/store robberies must follow server-specific guidelines.",
        "Gang territories must be respected by all players.",
        "Criminal organizations must have established structure and hierarchy.",
        "Illegal business operations must maintain secrecy through roleplay.",
        "Hostage situations must follow specific guidelines (time limits, negotiations, etc.)."
      ]
    },
    {
      title: "Law Enforcement Rules",
      rules: [
        "Law enforcement characters must follow proper procedures.",
        "Abuse of police powers will result in disciplinary action.",
        "Police must have probable cause for searches and arrests.",
        "Maintain professional conduct even when dealing with difficult situations.",
        "Follow the proper chain of command within departments.",
        "Complete required training before active duty.",
        "Use appropriate force based on the situation.",
        "Document all significant police actions and arrests.",
        "Respond to emergency calls in a timely manner.",
        "Wear appropriate uniform and equipment for your department and role."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-20 md:py-24">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="mb-4">
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors gap-1 text-sm mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Server Rules and Guidelines
            </h1>
            <p className="text-lg text-muted-foreground">
              These rules are designed to ensure a fair, enjoyable, and immersive experience for all players.
              Failure to comply with these rules may result in warnings, temporary bans, or permanent removal from the server.
            </p>
          </div>
          
          <div className="flex justify-center mb-6">
            <Button asChild className="gap-2">
              <a href="/downloads" className="flex items-center gap-1.5">
                <Download className="h-4 w-4" /> Download Rule Book
              </a>
            </Button>
          </div>

          <div className="space-y-8">
            {ruleCategories.map((category, index) => (
              <Card key={index} className="glass-card overflow-hidden">
                <CardHeader className="bg-secondary/50 border-b">
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ol className="list-decimal list-inside space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="text-sm md:text-base">
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-secondary/20 p-4 md:p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">Important Note</h3>
            <p className="text-muted-foreground text-sm">
              These rules are subject to change at the discretion of the server administration. 
              It is your responsibility to stay updated with the latest rules. 
              The server staff has the final say in all rule interpretations and enforcement matters.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
