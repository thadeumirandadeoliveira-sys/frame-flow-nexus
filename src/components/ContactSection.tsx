import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Whatsapp from "@/assets/wp_icon.svg";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vamos transformar sua ideia em realidade. Solicite um orçamento sem compromisso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Contact Info */}
            <div className="flex flex-row gap-6 justify-center">
              <Card className="bg-card border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Instagram</h3>
                      <p className="text-sm text-muted-foreground">@mirandafilmstv_</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <img src={Whatsapp} alt="WhatsApp" style={{width: 28}}/>
                      </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-sm text-muted-foreground">(22) 99938-8406</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="bg-card border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Endereço</h3>
                      <p className="text-sm text-muted-foreground">
                        São Paulo, SP<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>

            {/* Contact Form */}
            {/* <div className="lg:col-span-2 animate-fade-in">
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-nos sobre seu projeto..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
