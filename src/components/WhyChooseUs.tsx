import { CheckCircle, Award, Clock, Users, Globe, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Más de 40 años de experiencia',
      description: 'Líderes en el sector eléctrico industrial con trayectoria comprobada.'
    },
    {
      icon: Globe,
      title: 'Exportación directa desde Miami',
      description: 'Envíos ágiles y seguros a toda Latinoamérica y el Caribe.'
    },
    {
      icon: Zap,
      title: 'Stock inmediato y marcas líderes',
      description: 'Invertek, Festo, Finder, Palazzoli, Autonics y más. Disponibilidad garantizada.'
    },
    {
      icon: Clock,
      title: 'Asistencia técnica 24/7',
      description: 'Soporte postventa continuo para resolver tus necesidades operativas.'
    },
    {
      icon: CheckCircle,
      title: 'Cumplimiento normativo internacional',
      description: 'Productos certificados bajo normas IEC, UL y RETIE.'
    },
    {
      icon: Users,
      title: 'Asesoría personalizada',
      description: 'Equipo técnico especializado para dimensionar tu proyecto correctamente.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            ¿Por qué empresas confían en EBC Corp?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Somos el socio estratégico que tu industria necesita para mantener operaciones continuas y eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-2">
              ¿Listo para optimizar tu suministro eléctrico?
            </p>
            <a
              href="#contacto"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Solicita tu cotización y recibe asesoría personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
