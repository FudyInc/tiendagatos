import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { PRODUCTOS, CATEGORIAS } from '../data/productos'

export default function Catalogo() {
  const [categoria, setCategoria] = useState('todos')
  const [modal, setModal] = useState(null)

  const productos = categoria === 'todos'
    ? PRODUCTOS
    : PRODUCTOS.filter((p) => p.categoria === categoria)

  const handleContactar = (producto) => {
    setModal(producto)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 sm:py-32 text-center">
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-500 font-light">Colección Premium</p>
          <h1 className="text-6xl sm:text-7xl font-light text-gray-900 tracking-tight">Tienda Gatos</h1>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            Productos premium para el bienestar total de tu felino. Desde areneros innovadores hasta comida balanceada de calidad superior.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-gray-900 text-white text-sm font-light tracking-wider hover:bg-gray-800 transition">
              EXPLORAR
            </button>
            <button className="px-8 py-3 border border-gray-900 text-gray-900 text-sm font-light tracking-wider hover:bg-gray-900 hover:text-white transition">
              MÁS INFO
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="h-px bg-gray-200"></div>
      </div>

      {/* Catalog Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-gray-500 font-light mb-3">Catálogo</p>
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 tracking-tight mb-4">Todos los Productos</h2>
          <p className="text-gray-600 text-sm font-light">Explora nuestra colección completa de artículos premium para gatos</p>
        </div>

        {/* Filtros */}
        <div className="mb-16 flex gap-3 flex-wrap justify-center">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoria(cat.id)}
              className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition ${
                categoria === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900'
              }`}
            >
              {cat.label.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {productos.map((p) => (
            <ProductCard
              key={p.id}
              producto={p}
              onContactar={handleContactar}
            />
          ))}
        </div>

        {productos.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-sm tracking-wide font-light">Sin productos en esta categoría</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-500 text-xs font-light tracking-wide">
          <p>© 2026 TIENDA GATOS. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </footer>

      {/* Modal de contacto */}
      {modal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-sm w-full p-8">
            <h2 className="text-3xl font-light text-gray-900 mb-2">{modal.nombre}</h2>
            <p className="text-gray-500 text-sm mb-8">{clp(modal.precio)}</p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                // TODO: integrar con ZERO
                alert('Pronto te contactaremos')
                setModal(null)
              }}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Nombre"
                required
                className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none text-sm font-light"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none text-sm font-light"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                required
                className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none text-sm font-light"
              />
              <textarea
                placeholder="Tu mensaje"
                rows={3}
                className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none text-sm font-light resize-none"
              />

              <div className="flex gap-4 pt-8">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="flex-1 py-3 text-gray-500 text-sm font-light hover:text-gray-900 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 border border-gray-900 text-gray-900 text-sm font-light hover:bg-gray-900 hover:text-white transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

const clp = (n) => '$' + Math.round(n).toLocaleString('es-CL')
