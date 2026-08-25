import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-light tracking-wide text-gray-900">
          TIENDA GATOS
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition">Inicio</a>
          <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition">Productos</a>
          <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition">Contacto</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-900 transition">
            <ShoppingBag size={20} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-900"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-sm font-light text-gray-600 hover:text-gray-900">Inicio</a>
            <a href="#" className="block text-sm font-light text-gray-600 hover:text-gray-900">Productos</a>
            <a href="#" className="block text-sm font-light text-gray-600 hover:text-gray-900">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  )
}
