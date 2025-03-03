
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, FileDown, FileText, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";

const Downloads = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const downloads = [
    {
      title: "MTA San Andreas",
      description: "The base game client required to connect to our server.",
      icon: Gamepad,
      size: "85.4 MB",
      version: "1.5.9",
      link: "https://multitheftauto.com/download/",
      isExternal: true,
    },
    {
      title: "Server Resources Pack",
      description: "Custom textures, models, and sounds required for our server.",
      icon: FileDown,
      size: "256 MB",
      version: "3.2.1",
      link: "#",
      isExternal: false,
    },
    {
      title: "Regz Roleplay Rules PDF",
      description: "Comprehensive server rules document.",
      icon: FileText,
      size: "1.2 MB",
      version: "2023-05",
      link: "#",
      isExternal: false,
    },
  ];

  const downloadSteps = [
    "Download and install MTA San Andreas from the official website.",
    "Download the Server Resources Pack from our website.",
    "Extract the Resources Pack to your MTA San Andreas installation folder.",
    "Launch MTA San Andreas and click 'Quick Connect'.",
    "Enter our server address: mtasa://connect/regzroleplay.com:22003",
    "Click 'Connect' and enjoy the game!",
  ];

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors gap-1 text-sm mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Downloads
            </h1>
            <p className="text-lg text-muted-foreground">
              Download all necessary files to join our MTA San Andreas roleplaying server.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {downloads.map((item, index) => (
              <Card key={index} className="glass-card flex flex-col overflow-hidden transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4 flex-grow">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-between text-sm text-muted-foreground mt-4">
                      <span>Size: {item.size}</span>
                      <span>Version: {item.version}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-3 border-t">
                  <Button asChild className="w-full gap-2">
                    <a 
                      href={item.link} 
                      target={item.isExternal ? "_blank" : "_self"}
                      rel={item.isExternal ? "noopener noreferrer" : ""}
                    >
                      <Download className="h-4 w-4" /> Download
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-secondary/20 rounded-lg border p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Installation Instructions</h2>
            <ol className="space-y-3 list-decimal list-inside">
              {downloadSteps.map((step, index) => (
                <li key={index} className="text-muted-foreground">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Gamepad className="h-5 w-5 text-primary" />
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-4">
              If you're having trouble downloading or installing any of these files, 
              please join our Discord server for support.
            </p>
            <Button asChild variant="outline" className="gap-2">
              <a 
                href="https://discord.gg" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Our Discord
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;
