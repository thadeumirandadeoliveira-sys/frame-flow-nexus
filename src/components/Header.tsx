import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo_transp.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, hsl(195 85% 45%), hsl(195 100% 85%))' }}
          >
            <img src={logoImage} alt="Logo MirandaFilms" className="ml-2 w-20 h-20 rounded-full" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-fast"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-fast"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-fast"
            >
              Sobre Nós
            </button>
            <Button variant="hero" size="default" onClick={() => scrollToSection("contact")}>
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-muted-foreground hover:text-foreground transition-fast py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-muted-foreground hover:text-foreground transition-fast py-2"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-fast py-2"
              >
                Sobre Nós
              </button>
              <Button variant="hero" size="default" onClick={() => scrollToSection("contact")} className="w-full">
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
