"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  phone: z.string().min(8, { message: "Ingrese un número de teléfono válido" }),
  service: z.string().min(1, { message: "Seleccione un servicio" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)

      // Show success toast
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      })

      // Reset form
      form.reset()
    }, 1500)
  }

  return (
    <div className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte con tu próximo proyecto. Completa el formulario o
            utiliza nuestros datos de contacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu número de teléfono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicio de interés</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="construccion-tradicional">Construcción Tradicional</SelectItem>
                          <SelectItem value="sistema-constructivo">Sistema Constructivo</SelectItem>
                          <SelectItem value="remodelaciones">Remodelaciones</SelectItem>
                          <SelectItem value="diseno-arquitectonico">Diseño Arquitectónico</SelectItem>
                          <SelectItem value="construccion-comercial">Construcción Comercial</SelectItem>
                          <SelectItem value="obras-civiles">Obras Civiles</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntanos sobre tu proyecto o consulta"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Corrientes 1234, Piso 5<br />
                    Ciudad Autónoma de Buenos Aires
                    <br />
                    Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">
                    +54 11 1234-5678
                    <br />
                    +54 11 8765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Correo electrónico</h3>
                  <p className="text-muted-foreground">
                    info@dlconstrucciones.com
                    <br />
                    ventas@dlconstrucciones.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Horario de atención</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 9:00 - 13:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://youtube.com/@dlconstrucciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Nuestra ubicación</h2>
          <div className="h-[400px] w-full bg-muted rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895483!2d-58.38375908417525!3d-34.60373446500075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20CABA!5e0!3m2!1ses!2sar!4v1616005781382!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación de DL Construcciones"
            ></iframe>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "¿Cuál es el proceso para iniciar un proyecto?",
                answer:
                  "El proceso comienza con una consulta inicial donde evaluamos tus necesidades. Luego realizamos una propuesta y presupuesto. Una vez aprobado, procedemos con el diseño detallado y la ejecución del proyecto.",
              },
              {
                question: "¿Trabajan en toda la provincia?",
                answer:
                  "Sí, trabajamos en toda la provincia de Buenos Aires y alrededores. También podemos considerar proyectos en otras provincias dependiendo de su envergadura.",
              },
              {
                question: "¿Cuánto tiempo toma completar un proyecto?",
                answer:
                  "El tiempo varía según el tipo y tamaño del proyecto. Una vivienda unifamiliar puede tomar entre 6 y 12 meses, mientras que remodelaciones menores pueden completarse en semanas.",
              },
              {
                question: "¿Ofrecen garantía por sus trabajos?",
                answer:
                  "Sí, todos nuestros trabajos cuentan con garantía. El período específico depende del tipo de proyecto y se detalla en el contrato.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

