export default function ProductCard({ producto, onContactar }) {
  const clp = (n) => '$' + Math.round(n).toLocaleString('es-CL')

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="text-6xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center">
        {producto.imagen}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{producto.nombre}</h3>
        <p className="text-sm text-gray-600 mb-4 h-10 line-clamp-2">{producto.descripcion}</p>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500">Precio</p>
            <p className="text-2xl font-bold text-blue-600">{clp(producto.precio)}</p>
          </div>
          <button
            onClick={() => onContactar(producto)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Contactar
          </button>
        </div>
      </div>
    </div>
  )
}
