import { useState } from 'react';
import { Truck, Settings, Lightbulb } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <>
    <header className="bg-white border-b border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <img src="/image.png" alt="Eléctricas BC Corp." className="h-12" />
          <a href="tel:+13055550123" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
            +1 (305) 555-0123
          </a>
        </div>
      </div>
    </header>
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Exportador Eléctrico Mayorista para Latinoamérica
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                Material eléctrico y soluciones industriales con entrega inmediata y soporte técnico en español e inglés.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Entregas rápidas</h3>
                  <p className="text-xs text-slate-400 mt-1">Envíos seguros desde EE. UU.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Certificados internacionales</h3>
                  <p className="text-xs text-slate-400 mt-1">Productos con garantía</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Asesoría técnica</h3>
                  <p className="text-xs text-slate-400 mt-1">Soporte especializado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <ContactForm title="Solicita tu cotización" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
