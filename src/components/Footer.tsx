import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 
              className="text-2xl font-bold bg-clip-text text-transparent mb-4"
              style={{ backgroundImage: 'linear-gradient(90deg, hsl(195 85% 45%), hsl(195 100% 85%))' }}
            >
              MirandaFilms
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transformando ideias em experiências visuais memoráveis com excelência técnica e criatividade.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-fast"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-fast"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-fast"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-fast"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-fast">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-fast">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-fast">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-fast">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Produção de Vídeo</li>
              <li>Gravação de Áudio</li>
              <li>Edição e Pós-Produção</li>
              <li>Motion Graphics</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} MirandaFilms. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
