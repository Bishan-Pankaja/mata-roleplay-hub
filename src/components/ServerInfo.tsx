
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GamepadIcon, Users, Copy, CheckCheck, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServerInfo() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const serverAddress = "mtasa://connect/regzroleplay.com:22003";

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

    const element = document.getElementById('server-info');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { title: "Custom Economy", description: "Realistic economy system with jobs and businesses" },
    { title: "Vehicle System", description: "Hundreds of custom vehicles with realistic handling" },
    { title: "Property System", description: "Buy houses, businesses, and more" },
    { title: "Gang System", description: "Create or join gangs, battle for territory" },
    { title: "Police System", description: "Join the law enforcement or live a criminal life" },
    { title: "Medical System", description: "Realistic injury and medical treatment system" },
  ];

  return (
    <section 
      id="server-info" 
      className={cn(
        "py-16 md:py-24 transition-all duration-700",
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Join Our MTA San Andreas Server
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the ultimate roleplaying adventure in our carefully crafted MTA San Andreas world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
          <Card className="glass-card overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GamepadIcon className="h-5 w-5 text-primary" />
                Server Connection
              </CardTitle>
              <CardDescription>
                Connect directly to our server using MTA San Andreas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Status:</span> Online
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Players:</span> 128/200
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <code className="text-sm font-mono flex-1 overflow-x-auto scrollbar-hide">
                      {serverAddress}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyToClipboard}
                      className="h-8 w-8 rounded-full flex-shrink-0"
                      aria-label="Copy server address"
                    >
                      {copied ? (
                        <CheckCheck className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {copied && (
                    <div className="absolute -top-8 right-0 text-xs bg-green-500 text-white px-2 py-1 rounded animate-fade-in">
                      Copied!
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">How to connect:</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Install MTA San Andreas</li>
                    <li>Launch the game</li>
                    <li>Click "Quick Connect"</li>
                    <li>Paste the server address</li>
                    <li>Click "Connect"</li>
                  </ol>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline" asChild>
                <a href="/downloads">
                  Download Required Files
                </a>
              </Button>
              <Button className="gap-1.5" asChild>
                <a href="#join-server">
                  Connect Now
                </a>
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Server Features
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="w-full gap-1.5" 
                asChild
              >
                <a href="/rules">
                  View Server Rules <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
