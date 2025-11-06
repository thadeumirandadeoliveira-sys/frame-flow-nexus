import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const portfolioItems = [
  {
    title: "Campanha Publicitária - Marca Premium",
    category: "Comercial",
    description: "Produção completa de vídeo comercial para lançamento de produto",
  },
  {
    title: "Documentário Corporativo",
    category: "Institucional",
    description: "Registro audiovisual da história e valores da empresa",
  },
  {
    title: "Videoclipe Musical",
    category: "Musical",
    description: "Direção criativa e produção de videoclipe para artista nacional",
  },
  {
    title: "Evento Corporativo",
    category: "Cobertura",
    description: "Cobertura profissional com múltiplas câmeras e edição ao vivo",
  },
  {
    title: "Série Web",
    category: "Conteúdo Digital",
    description: "Produção de série original para plataformas digitais",
  },
  {
    title: "Motion Graphics",
    category: "Animação",
    description: "Vinhetas e animações corporativas para apresentações",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfólio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos mais recentes e premiados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-accent transition-smooth shadow-soft hover:shadow-elegant overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-smooth">
                  <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-smooth shadow-glow">
                    <Play size={28} className="text-accent-foreground ml-1" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-fast">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
