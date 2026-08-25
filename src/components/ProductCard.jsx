export default function ProductCard({ producto, onContactar }) {
  const clp = (n) => '$' + Math.round(n).toLocaleString('es-CL')

  return (
    <div className="group cursor-pointer">
      {/* Imagen */}
      <div className="bg-gray-50 aspect-square rounded-sm overflow-hidden mb-6 flex items-center justify-center">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{producto.imagen}</span>
      </div>

      {/* Contenido */}
      <div className="space-y-3">
        <h3 className="text-lg font-light text-gray-900 tracking-tight">{producto.nombre}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{producto.descripcion}</p>

        {/* Precio */}
        <p className="text-2xl font-light text-gray-900 pt-2">{clp(producto.precio)}</p>

        {/* Botón */}
        <button
          onClick={() => onContactar(producto)}
          className="w-full mt-6 py-3 border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm tracking-wide"
        >
          CONTACTAR
        </button>
      </div>
    </div>
  )
}
