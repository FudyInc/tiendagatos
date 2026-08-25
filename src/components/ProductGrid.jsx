import ProductCard from './ProductCard'

export default function ProductGrid({ productos, onContactar }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {productos.map((p) => (
        <ProductCard
          key={p.id}
          producto={p}
          onContactar={onContactar}
        />
      ))}
    </div>
  )
}
