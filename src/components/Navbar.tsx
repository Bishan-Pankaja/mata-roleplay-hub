
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Download, BookOpen, Home, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Rules", path: "/rules", icon: BookOpen },
    { name: "Downloads", path: "/downloads", icon: Download },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/lovable-uploads/534ae08e-4b16-421c-98aa-02be85ff18e1.png"
            alt="Regz RolePlay Logo"
            className="h-9 w-auto"
          />
          <span className="font-heading font-bold text-xl hidden md:block">
            Regz RolePlay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-1.5 font-medium transition-all duration-300 hover:text-primary",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 ml-2">
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary"
            >
              <a 
                href="https://discord.gg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <ExternalLink className="h-4 w-4" />
                Discord
              </a>
            </Button>
            
            <Button 
              asChild 
              className="rounded-full"
            >
              <a 
                href="#join-server" 
                className="flex items-center gap-1.5"
              >
                Join Server
              </a>
            </Button>
            
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-md md:hidden animate-fade-in-down">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-md transition-all",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            
            <div className="grid grid-cols-2 gap-3 mt-2">
              <Button 
                asChild 
                variant="outline" 
                className="w-full"
              >
                <a 
                  href="https://discord.gg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  Discord
                </a>
              </Button>
              
              <Button 
                asChild 
                className="w-full"
              >
                <a 
                  href="#join-server" 
                  className="flex items-center justify-center gap-1.5"
                >
                  Join Server
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
