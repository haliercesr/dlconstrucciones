import { Building2, Users, Clock } from "lucide-react"
import AnimatedCounter from "./animated-counter"

export default function StatsSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-orange text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Números</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Building2 className="h-8 w-8" />
            </div>
            <AnimatedCounter end={350} suffix="+" className="text-4xl md:text-5xl font-bold mb-2" />
            <p className="text-lg">Proyectos Completados</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <AnimatedCounter end={280} suffix="+" className="text-4xl md:text-5xl font-bold mb-2" />
            <p className="text-lg">Clientes Satisfechos</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <AnimatedCounter end={15} suffix="" className="text-4xl md:text-5xl font-bold mb-2" />
            <p className="text-lg">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  )
}

