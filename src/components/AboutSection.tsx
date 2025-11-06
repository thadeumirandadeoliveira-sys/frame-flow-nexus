import { Award, Users, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometimento com a mais alta qualidade em cada projeto",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes e apaixonados por audiovisual",
  },
  {
    icon: Zap,
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos para resultados cinematográficos",
  },
  {
    icon: Target,
    title: "Foco no Cliente",
    description: "Sua visão é nossa prioridade em cada etapa do processo",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos um estúdio audiovisual especializado em transformar ideias em conteúdo visual de impacto.
              Com mais de uma década de experiência, nossa equipe combina expertise técnica com criatividade
              para entregar projetos que superam expectativas.
            </p>
          </div>

          <div className="mb-16 animate-fade-in-up">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-elegant">
              <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Proporcionar experiências audiovisuais memoráveis através da combinação perfeita entre
                tecnologia de ponta, talento criativo e dedicação absoluta aos nossos clientes.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência no mercado audiovisual brasileiro, reconhecidos pela excelência técnica,
                inovação criativa e compromisso com resultados que geram valor real para nossos clientes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent transition-smooth shadow-soft hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <value.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
