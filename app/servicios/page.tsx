import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Construcción | DL Construcciones",
  description:
    "Ofrecemos servicios de construcción tradicional, sistema constructivo moderno, remodelaciones y más. Soluciones de calidad para todo tipo de proyectos.",
}

const services = [
  {
    id: "construccion-tradicional",
    title: "Construcción Tradicional",
    description: "Construcción de viviendas y edificios con métodos tradicionales y materiales de alta calidad.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Estructuras de hormigón armado",
      "Mampostería de ladrillo",
      "Terminaciones de calidad",
      "Diseño personalizado",
    ],
  },
  {
    id: "sistema-constructivo",
    title: "Sistema Constructivo",
    description: "Sistema constructivo moderno, eficiente y sustentable para proyectos residenciales y comerciales.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Construcción rápida y eficiente",
      "Excelente aislamiento térmico y acústico",
      "Menor impacto ambiental",
      "Reducción de costos operativos",
    ],
  },
  {
    id: "remodelaciones",
    title: "Remodelaciones",
    description: "Transformamos espacios existentes con diseños modernos y funcionales adaptados a tus necesidades.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Renovación de espacios",
      "Ampliaciones",
      "Actualización de instalaciones",
      "Mejora de eficiencia energética",
    ],
  },
  {
    id: "diseno-arquitectonico",
    title: "Diseño Arquitectónico",
    description: "Diseños arquitectónicos personalizados que combinan estética, funcionalidad y eficiencia.",
    image: "/placeholder.svg?height=600&width=800",
    features: ["Diseño personalizado", "Planos detallados", "Renderizaciones 3D", "Asesoramiento profesional"],
  },
  {
    id: "construccion-comercial",
    title: "Construcción Comercial",
    description: "Construcción de espacios comerciales, oficinas y locales adaptados a las necesidades de tu negocio.",
    image: "/placeholder.svg?height=600&width=800",
    features: ["Locales comerciales", "Oficinas", "Galpones industriales", "Espacios de retail"],
  },
  {
    id: "obras-civiles",
    title: "Obras Civiles",
    description: "Desarrollo de obras civiles como infraestructuras, pavimentaciones y más.",
    image: "/placeholder.svg?height=600&width=800",
    features: ["Infraestructuras", "Pavimentaciones", "Movimientos de suelo", "Instalaciones urbanas"],
  },
]

export default function ServicesPage() {
  return (
    <div className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de construcción para satisfacer todas tus necesidades. Desde
            construcción tradicional hasta sistemas constructivos modernos y remodelaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
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
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href={`/servicios/${service.id}`}>Ver más detalles</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contáctanos para discutir tus necesidades específicas y obtener un presupuesto personalizado.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

