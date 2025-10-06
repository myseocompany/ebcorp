import { Globe, Award, Shield, CheckCircle } from 'lucide-react';

export default function GlobalReach() {
  const certifications = [
    { name: 'UL', description: 'Underwriters Laboratories' },
    { name: 'CE', description: 'Conformité Européenne' },
    { name: 'ISO', description: 'International Organization' },
    { name: 'IEC', description: 'International Electrotechnical' }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full mb-6">
            <Globe className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Confianza internacional
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Exportamos a más de 15 países en Latinoamérica y el Caribe, con la garantía de cumplir los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cobertura estratégica</h3>
                <p className="text-slate-300 leading-relaxed">
                  Desde nuestro hub logístico en Miami, alcanzamos toda la región con tiempos de entrega optimizados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cumplimiento normativo</h3>
                <p className="text-slate-300 leading-relaxed">
                  Todos nuestros productos cumplen con regulaciones internacionales y locales de cada país.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Garantía respaldada</h3>
                <p className="text-slate-300 leading-relaxed">
                  Trabajamos exclusivamente con fabricantes certificados y ofrecemos garantía completa en cada producto.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Certificaciones internacionales</h3>
            <div className="grid grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-700 rounded-lg p-6 text-center hover:bg-slate-600 transition-colors duration-200"
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {cert.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {cert.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8">
          <blockquote className="text-2xl font-semibold italic mb-2">
            "EBC Corp. – Mueve las industrias."
          </blockquote>
          <p className="text-blue-100">
            Más de cuatro décadas impulsando el desarrollo industrial de América Latina
          </p>
        </div>
      </div>
    </section>
  );
}
