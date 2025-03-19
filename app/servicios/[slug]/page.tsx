import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Check } from "lucide-react"

// Define the services data
const services = [
  {
    id: "construccion-tradicional",
    title: "Construcción Tradicional",
    description: "Construcción de viviendas y edificios con métodos tradicionales y materiales de alta calidad.",
    longDescription:
      "Nuestro servicio de construcción tradicional ofrece soluciones completas para la edificación de viviendas y edificios utilizando métodos probados y materiales de primera calidad. Nos especializamos en estructuras de hormigón armado, mampostería de ladrillo y terminaciones de alto nivel que garantizan durabilidad y estética. Cada proyecto es personalizado según las necesidades y preferencias del cliente, asegurando resultados que superan las expectativas.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Estructuras de hormigón armado",
      "Mampostería de ladrillo",
      "Terminaciones de calidad",
      "Diseño personalizado",
      "Asesoramiento profesional",
      "Materiales de primera calidad",
    ],
    process: [
      "Consulta inicial y evaluación de necesidades",
      "Diseño y planificación del proyecto",
      "Presupuesto detallado",
      "Ejecución de la obra",
      "Control de calidad",
      "Entrega final",
    ],
  },
  {
    id: "sistema-constructivo",
    title: "Sistema Constructivo",
    description: "Sistema constructivo moderno, eficiente y sustentable para proyectos residenciales y comerciales.",
    longDescription:
      "Nuestro sistema constructivo moderno representa la evolución en la construcción, ofreciendo una alternativa eficiente, rápida y sustentable para proyectos residenciales y comerciales. Utilizamos tecnologías avanzadas y materiales innovadores que proporcionan excelente aislamiento térmico y acústico, reduciendo significativamente los costos operativos y el impacto ambiental. Este sistema permite una construcción más rápida sin comprometer la calidad ni la durabilidad.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Construcción rápida y eficiente",
      "Excelente aislamiento térmico y acústico",
      "Menor impacto ambiental",
      "Reducción de costos operativos",
      "Versatilidad en diseños",
      "Mayor resistencia sísmica",
    ],
    process: [
      "Evaluación del proyecto",
      "Diseño adaptado al sistema constructivo",
      "Fabricación de componentes",
      "Montaje en obra",
      "Instalaciones y terminaciones",
      "Control de calidad y entrega",
    ],
  },
  {
    id: "remodelaciones",
    title: "Remodelaciones",
    description: "Transformamos espacios existentes con diseños modernos y funcionales adaptados a tus necesidades.",
    longDescription:
      "Nuestro servicio de remodelaciones está diseñado para transformar espacios existentes en ambientes modernos, funcionales y adaptados a las necesidades actuales. Nos especializamos en renovaciones completas, ampliaciones, actualización de instalaciones y mejoras en la eficiencia energética. Trabajamos con un enfoque minucioso que respeta la estructura original mientras incorpora elementos contemporáneos que revitalizan el espacio y aumentan su valor.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Renovación de espacios",
      "Ampliaciones",
      "Actualización de instalaciones",
      "Mejora de eficiencia energética",
      "Optimización de espacios",
      "Modernización de acabados",
    ],
    process: [
      "Evaluación del espacio actual",
      "Diseño conceptual",
      "Planificación detallada",
      "Demolición selectiva",
      "Reconstrucción y renovación",
      "Acabados e instalaciones",
      "Entrega del proyecto",
    ],
  },
  {
    id: "diseno-arquitectonico",
    title: "Diseño Arquitectónico",
    description: "Diseños arquitectónicos personalizados que combinan estética, funcionalidad y eficiencia.",
    longDescription:
      "Nuestro servicio de diseño arquitectónico ofrece soluciones personalizadas que equilibran perfectamente la estética, la funcionalidad y la eficiencia. Nuestro equipo de arquitectos trabaja estrechamente con cada cliente para comprender sus necesidades, preferencias y estilo de vida, creando diseños únicos que reflejan su personalidad y cumplen con sus requisitos específicos. Proporcionamos planos detallados, renderizaciones 3D y asesoramiento profesional durante todo el proceso.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Diseño personalizado",
      "Planos detallados",
      "Renderizaciones 3D",
      "Asesoramiento profesional",
      "Soluciones sostenibles",
      "Optimización de espacios",
    ],
    process: [
      "Entrevista inicial y análisis de necesidades",
      "Desarrollo de concepto",
      "Anteproyecto",
      "Proyecto ejecutivo",
      "Renderizaciones y visualizaciones",
      "Documentación técnica",
    ],
  },
  {
    id: "construccion-comercial",
    title: "Construcción Comercial",
    description: "Construcción de espacios comerciales, oficinas y locales adaptados a las necesidades de tu negocio.",
    longDescription:
      "Nuestro servicio de construcción comercial está especializado en crear espacios de negocio funcionales, atractivos y adaptados a las necesidades específicas de cada cliente. Desarrollamos locales comerciales, oficinas, galpones industriales y espacios de retail que combinan diseño estratégico, funcionalidad operativa y estética corporativa. Entendemos las particularidades de cada industria y trabajamos para crear ambientes que potencien la productividad y la imagen de marca.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Locales comerciales",
      "Oficinas",
      "Galpones industriales",
      "Espacios de retail",
      "Diseño corporativo",
      "Soluciones a medida",
    ],
    process: [
      "Análisis de necesidades comerciales",
      "Diseño estratégico",
      "Planificación y presupuesto",
      "Gestión de permisos",
      "Construcción",
      "Instalaciones especializadas",
      "Entrega llave en mano",
    ],
  },
  {
    id: "obras-civiles",
    title: "Obras Civiles",
    description: "Desarrollo de obras civiles como infraestructuras, pavimentaciones y más.",
    longDescription:
      "Nuestro servicio de obras civiles abarca el desarrollo de infraestructuras, pavimentaciones, movimientos de suelo e instalaciones urbanas. Contamos con la experiencia, el equipo y la maquinaria necesarios para ejecutar proyectos de gran envergadura con precisión y eficiencia. Nos especializamos en obras que requieren planificación detallada, cumplimiento de normativas estrictas y coordinación de múltiples aspectos técnicos, garantizando resultados duraderos y de calidad.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Infraestructuras",
      "Pavimentaciones",
      "Movimientos de suelo",
      "Instalaciones urbanas",
      "Obras hidráulicas",
      "Estructuras especiales",
    ],
    process: [
      "Estudio técnico preliminar",
      "Planificación y diseño",
      "Obtención de permisos",
      "Preparación del terreno",
      "Ejecución de la obra",
      "Control de calidad",
      "Entrega y documentación",
    ],
  },
]

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((service) => service.id === params.slug)

  if (!service) {
    return {
      title: "Servicio no encontrado | DL Construcciones",
    }
  }

  return {
    title: `${service.title} | DL Construcciones`,
    description: service.description,
    openGraph: {
      title: `${service.title} | DL Construcciones`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
    },
  }
}

// Generate static paths for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((service) => service.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <Link href="/servicios" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a servicios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
            <div className="mb-8">
              <p className="text-base mb-6">{service.longDescription}</p>
              <h3 className="text-2xl font-bold mb-4">Características</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar presupuesto</Link>
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Paso {index + 1}</h3>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Galería de Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} - Imagen ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en nuestro servicio de {service.title.toLowerCase()}?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contáctanos hoy mismo para obtener más información y un presupuesto personalizado para tu proyecto.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">Contactar ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

