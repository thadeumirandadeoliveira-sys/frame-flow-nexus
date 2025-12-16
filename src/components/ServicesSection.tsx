import { Video, Mic, Scissors, Camera, Film, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import videoImage from "@/assets/zve10.jpg";
import direcao from "@/assets/direcao.jpeg";
import editingImage from "@/assets/service-editing.jpg";

const services = [
  {
    icon: Video,
    title: "Produção de Vídeo",
    description: "Captação profissional com equipamentos cinema de última geração e equipe especializada.",
    image: videoImage,
  },
  // {
  //   icon: Mic,
  //   title: "Gravação de Áudio",
  //   description: "Estúdio com acústica tratada e tecnologia de ponta para gravações de alta fidelidade.",
  //   image: audioImage,
  // },
  {
    icon: Scissors,
    title: "Edição e Pós-Produção",
    description: "Montagem, color grading, motion graphics e finalização cinematográfica.",
    image: editingImage,
  },
  {
    icon: Camera,
    title: "Direção de Filmagem",
    description: "Iluminação e composição visual para criar a atmosfera perfeita do seu projeto.",
    image: direcao,
  },
  // {
  //   icon: Film,
  //   title: "Animação e Motion",
  //   description: "Criação de animações 2D, 3D e motion graphics para seu conteúdo audiovisual.",
  //   image: null,
  // },
  // {
  //   icon: Headphones,
  //   title: "Sound Design",
  //   description: "Desenho sonoro, mixagem e masterização para elevar a qualidade do seu áudio.",
  //   image: null,
  // },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em audiovisual com qualidade profissional e criatividade sem limites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-accent transition-smooth shadow-soft hover:shadow-glow overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <CardContent className={`${service.image ? 'pt-6' : 'pt-8'} pb-8`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                    <service.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
