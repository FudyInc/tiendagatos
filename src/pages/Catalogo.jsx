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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8 border-b-4 border-blue-700">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Nuestros Productos</h1>
          <p className="text-blue-100 mt-2">Todo lo que tu gato necesita</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoria(cat.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition whitespace-nowrap ${
                categoria === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((p) => (
            <ProductCard
              key={p.id}
              producto={p}
              onContactar={handleContactar}
            />
          ))}
        </div>

        {productos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Sin productos en esta categoría
          </div>
        )}
      </div>

      {/* Modal de contacto */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-sm w-full p-6">
            <h2 className="text-2xl font-bold mb-4">{modal.nombre}</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                // TODO: integrar con ZERO
                alert('Pronto te contactaremos')
                setModal(null)
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Tu email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="tel"
                placeholder="Tu teléfono (WhatsApp)"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                placeholder="Cuéntanos qué te interesa"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
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
