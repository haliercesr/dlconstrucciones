import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nosotros | DL Construcciones",
  description:
    "Conoce más sobre DL Construcciones, nuestra historia, valores y equipo. Somos expertos en construcción con más de 15 años de experiencia en el sector.",
}

export default function AboutPage() {
  return (
    <div className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sobre Nosotros</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-muted-foreground">
            Somos una empresa líder en el sector de la construcción, comprometida con la calidad, la innovación y la
            satisfacción del cliente.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Historia de DL Construcciones"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 ">Nuestra Historia</h2>
            <p className="text-lg mb-4 text-muted-foreground">
              DL Construcciones nació hace más de 15 años con la visión de transformar el sector de la construcción,
              ofreciendo soluciones innovadoras y de alta calidad para todo tipo de proyectos.
            </p>
            <p className="text-lg mb-4 text-muted-foreground">
              Lo que comenzó como un pequeño emprendimiento familiar, se ha convertido en una empresa reconocida por su
              excelencia, profesionalismo y compromiso con cada proyecto que realizamos.
            </p>
            <p className="text-lg text-muted-foreground">
              A lo largo de nuestra trayectoria, hemos completado con éxito cientos de proyectos, desde viviendas
              unifamiliares hasta complejos comerciales, ganándonos la confianza de nuestros clientes y consolidándonos
              como referentes en el sector.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Calidad",
                description:
                  "Nos comprometemos a utilizar los mejores materiales y técnicas constructivas para garantizar resultados excepcionales.",
                icon: "🏆",
              },
              {
                title: "Innovación",
                description:
                  "Constantemente buscamos nuevas tecnologías y métodos para mejorar nuestros procesos y ofrecer soluciones más eficientes.",
                icon: "💡",
              },
              {
                title: "Responsabilidad",
                description:
                  "Asumimos la responsabilidad de cada proyecto, cumpliendo con los plazos y presupuestos acordados.",
                icon: "✓",
              },
              {
                title: "Sostenibilidad",
                description:
                  "Nos preocupamos por el medio ambiente, implementando prácticas constructivas sostenibles y materiales ecoamigables.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Daniel López",
                position: "Director General",
                bio: "Fundador de DL Construcciones con más de 20 años de experiencia en el sector. Lidera la visión estratégica de la empresa.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Laura Martínez",
                position: "Directora de Proyectos",
                bio: "Arquitecta con especialización en diseño sostenible. Coordina y supervisa todos los proyectos para garantizar su correcta ejecución.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Carlos Rodríguez",
                position: "Jefe de Obra",
                bio: "Ingeniero civil con amplia experiencia en la dirección de obras. Responsable de la ejecución y control de calidad en terreno.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "María González",
                position: "Diseñadora de Interiores",
                bio: "Especialista en diseño de interiores con enfoque en la funcionalidad y estética de los espacios residenciales y comerciales.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Javier Sánchez",
                position: "Ingeniero Estructural",
                bio: "Experto en cálculo y diseño de estructuras, garantizando la seguridad y durabilidad de cada construcción.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Ana Pérez",
                position: "Atención al Cliente",
                bio: "Responsable de la comunicación con los clientes, asegurando que sus necesidades sean atendidas durante todo el proceso.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Nuestra Experiencia</h3>
              <ul className="space-y-3">
                {[
                  "Más de 15 años en el sector de la construcción",
                  "Cientos de proyectos completados con éxito",
                  "Equipo de profesionales altamente cualificados",
                  "Conocimiento profundo de técnicas constructivas tradicionales y modernas",
                  "Capacidad para gestionar proyectos de cualquier envergadura",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Nuestro Compromiso</h3>
              <ul className="space-y-3">
                {[
                  "Calidad en cada detalle de nuestras construcciones",
                  "Cumplimiento estricto de plazos y presupuestos",
                  "Transparencia en todos nuestros procesos",
                  "Atención personalizada durante todo el proyecto",
                  "Garantía en todos nuestros trabajos",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar con nosotros?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contáctanos hoy mismo para discutir tu proyecto y descubrir cómo podemos ayudarte a hacerlo realidad.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contacto">Contactar ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

