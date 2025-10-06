import { Settings, Gauge, ToggleLeft, Wrench, Wind, Lightbulb } from 'lucide-react';

export default function Products() {
  const categories = [
    {
      icon: Settings,
      title: 'Automatización y control',
      description: 'Variadores de frecuencia, PLCs, sensores y controladores industriales.'
    },
    {
      icon: Gauge,
      title: 'Medición e indicación',
      description: 'Instrumentos de medición, indicadores digitales y equipos de monitoreo.'
    },
    {
      icon: ToggleLeft,
      title: 'Maniobra eléctrica',
      description: 'Contactores, relés, protecciones y componentes de control eléctrico.'
    },
    {
      icon: Wrench,
      title: 'Herramientas industriales',
      description: 'Equipamiento profesional para mantenimiento y montaje industrial.'
    },
    {
      icon: Wind,
      title: 'Neumática',
      description: 'Válvulas, cilindros, actuadores y sistemas de aire comprimido.'
    },
    {
      icon: Lightbulb,
      title: 'Iluminación industrial',
      description: 'Luminarias LED, sistemas de iluminación especializada y accesorios.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Soluciones integrales para tu industria
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Amplio portafolio de productos eléctricos e industriales de marcas reconocidas mundialmente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-orange-600 group-hover:to-orange-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors inline-flex items-center">
                  Ver catálogo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            ¿No encuentras lo que buscas? Contáctanos y te ayudamos a encontrar la solución perfecta.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
