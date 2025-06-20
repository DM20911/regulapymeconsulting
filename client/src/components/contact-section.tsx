import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consulta enviada",
        description: "Nos pondremos en contacto con usted en las próximas 24 horas.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar su consulta. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contacto" className="py-20 bg-navy-900 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-6">
              <span className="text-white">Comience Hoy su</span>{" "}
              <span className="text-gold-500">Proyecto Empresarial</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Estamos listos para ayudarle a materializar sus objetivos
              empresariales. Contáctenos para una consulta gratuita y descubra
              cómo podemos impulsar su éxito.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Teléfono</div>
                  <div className="text-blue-100">+56 2 2345 6789</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-100">contacto@regulapymeconsulting.cl</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Oficina</div>
                  <div className="text-blue-100">
                    Av. Providencia 1234, Oficina 567
                    <br />
                    Providencia, Santiago
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Horario de Atención</div>
                  <div className="text-blue-100">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 9:00 - 13:00
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="font-playfair font-semibold text-2xl text-navy-900 mb-6">
                Solicite su Consulta Gratuita
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Nombre *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Su nombre completo"
                              className="border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Empresa
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nombre de su empresa"
                              className="border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Email *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="su@email.com"
                              className="border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Teléfono *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+56 9 1234 5678"
                              className="border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="servicio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">
                          Servicio de Interés
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:ring-gold-500 focus:border-gold-500">
                              <SelectValue placeholder="Seleccione un servicio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="constitucion">Constitución de Empresas</SelectItem>
                            <SelectItem value="formalizacion">Formalización Empresarial</SelectItem>
                            <SelectItem value="modificacion">Modificación de Empresas</SelectItem>
                            <SelectItem value="asesoria">Asesoría Corporativa</SelectItem>
                            <SelectItem value="compliance">Compliance Legal</SelectItem>
                            <SelectItem value="litigios">Litigios Corporativos</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">
                          Mensaje
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Cuéntenos sobre su proyecto o consulta..."
                            className="border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 text-navy-900 py-4 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                    size="lg"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar Consulta"}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Campos obligatorios. Nos comprometemos a responder en menos de 24 horas.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
