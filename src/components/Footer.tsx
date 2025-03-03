
import { Link } from "react-router-dom";
import { Download, BookOpen, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/534ae08e-4b16-421c-98aa-02be85ff18e1.png"
                alt="Regz RolePlay Logo"
                className="h-8 w-auto"
              />
              <span className="font-heading font-bold text-lg">
                Regz RolePlay
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              An immersive MTA San Andreas roleplaying community providing unique gaming experiences.
            </p>
            <div className="mt-auto">
              <p className="text-xs text-muted-foreground">
                &copy; {currentYear} Regz RolePlay. All rights reserved.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-medium text-base mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/rules" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" /> Server Rules
              </Link>
              <Link to="/downloads" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5" /> Downloads
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-medium text-base mb-2">Community</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
              >
                Discord <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="#join-server"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Join Server
              </a>
              <a
                href="mailto:contact@regzroleplay.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              This website is not affiliated with Rockstar Games or MTA San Andreas.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
