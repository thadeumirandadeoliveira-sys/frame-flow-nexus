import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import thumb from "@/assets/thumb.png";

const portfolioItems = [
  {
    title: "Batismo Vitor Gabriel",
    category: "Batismo",
    description: "Vitor Gabriel batismo na igreja de Saquarema dia 21/03/2025",
    link: "https://www.instagram.com/reel/DJmEBR5OFQf/?igsh=aXE2Y2FxeG10djRs"
  },
  {
    title: "Festa de aniversário Beatriz Curty",
    category: "Aniversário",
    description: "Primeiro ano da Beatriz Curty transformado um dia comum em um momento único",
    link: "https://www.instagram.com/reel/DFk2BvjJMeS/?igsh=OHNlYWR0dnIxMWJq"
  },
  {
    title: "Captura de vídeo aérea e mobile",
    category: "Reportagem",
    description: "Fizemos a cobertura do onda na rede, mostrando esses incríveis atletas.",
    link: "https://www.instagram.com/reel/DMeHMxoPpdL/?igsh=MXdia200cjRlcGVt"
  },
  {
    title: "Casamento 06/12/2025",
    category: "Casamento",
    description: "Eternizamos esse momento emocionante, com muita dedicação.",
    link: "https://www.instagram.com/reel/DSAve43jKd4/?igsh=MzlwdmI5cnpodzFo"
  },
  {
    title: "Pre wedding - 28/11/2025",
    category: "Casamento",
    description: "Captando cada detalhe e emoção do casal, eternizando o momento.",
    link: "https://www.instagram.com/reel/DRp3D8DD632/?igsh=MTRtbTBwb3k3YmJ4ag=="
  },
  {
    title: "Pôr do sol ",
    category: "Saquarema",
    description: "Registrando esse pôr do sol incrível nas praias de Saquarema.",
    link: "https://www.instagram.com/reel/DLI1-2Rvuc1/?igsh=NjNxOGd2eXY4b2Rk"
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Card
              key={index}
              className="group bg-card border-border hover:border-accent transition-smooth shadow-soft hover:shadow-elegant overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` , cursor: 'pointer' }}
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-smooth">
                  <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-smooth shadow-glow">
                    <Play size={28} className="text-accent-foreground ml-1" />
                  </div>
                </div>
                <img src={thumb} alt="thumb de videos" style={{backgroundPosition: "center", backgroundSize: "contain"}} />
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
