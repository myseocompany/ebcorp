import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src="/image.png" alt="Eléctricas BC Corp." className="h-10 mb-4" />
            <p className="text-slate-400 mb-4 leading-relaxed">
              Distribuidor y exportador eléctrico mayorista con más de 40 años impulsando el desarrollo industrial de Latinoamérica y el Caribe.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Globe className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">+1 (305) 555-0123</p>
                  <p className="text-sm">Lun - Vie: 8:00 AM - 6:00 PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">ventas@ebccorp.com</p>
                  <p className="text-sm">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
            <div className="flex items-start space-x-3 text-slate-400">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Miami, Florida</p>
                <p className="text-sm">Hub logístico para Latinoamérica</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Certificaciones</h4>
              <div className="flex space-x-2">
                {['UL', 'CE', 'ISO', 'IEC'].map((cert) => (
                  <div
                    key={cert}
                    className="bg-slate-800 px-3 py-1 rounded text-xs font-bold text-orange-400"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Eléctricas BC Corp. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-slate-500 text-xs italic">
              "EBC Corp. – Mueve las industrias"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
