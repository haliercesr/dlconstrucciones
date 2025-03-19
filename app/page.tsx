import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Construcción de calidad"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Construimos tu futuro</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Soluciones constructivas de calidad para proyectos residenciales y comerciales
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/servicios">Nuestros Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Construcción Tradicional",
                description:
                  "Construcción de viviendas y edificios con métodos tradicionales y materiales de alta calidad.",
                image: "/placeholder.svg?height=400&width=600",
                link: "/servicios/construccion-tradicional",
              },
              {
                title: "Sistema Constructivo",
                description:
                  "Sistema constructivo moderno, eficiente y sustentable para proyectos residenciales y comerciales.",
                image: "/placeholder.svg?height=400&width=600",
                link: "/servicios/sistema-constructivo",
              },
              {
                title: "Remodelaciones",
                description:
                  "Transformamos espacios existentes con diseños modernos y funcionales adaptados a tus necesidades.",
                image: "/placeholder.svg?height=400&width=600",
                link: "/servicios/remodelaciones",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="group">
                    <Link href={service.link}>
                      Ver más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experiencia",
                description: "Más de 15 años de experiencia en el sector de la construcción.",
                icon: "🏗️",
              },
              {
                title: "Calidad",
                description: "Utilizamos materiales de primera calidad y técnicas constructivas avanzadas.",
                icon: "✅",
              },
              {
                title: "Puntualidad",
                description: "Cumplimos con los plazos establecidos para la entrega de cada proyecto.",
                icon: "⏱️",
              },
              {
                title: "Garantía",
                description: "Ofrecemos garantía en todos nuestros trabajos para tu tranquilidad.",
                icon: "🛡️",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                testimonial:
                  "Excelente trabajo en la construcción de nuestra casa. Cumplieron con los plazos y el presupuesto acordado. Muy profesionales.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Carlos Rodríguez",
                testimonial:
                  "La remodelación de nuestra oficina quedó perfecta. El equipo fue muy atento a nuestras necesidades y sugerencias.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Laura Martínez",
                testimonial:
                  "Construyeron nuestra casa con el sistema constructivo que ofrecen y estamos muy satisfechos con el resultado. Excelente calidad y atención.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una consulta gratuita y presupuesto sin compromiso.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

