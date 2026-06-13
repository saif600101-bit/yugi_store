import { useState } from 'react'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import './App.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Blue Eyes White Dragon',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop',
    description: 'Legendary blue dragon card - Ultra Rare'
  },
  {
    id: 2,
    name: 'Dark Magician',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1570629810787-a32b8e3c82f4?w=300&h=300&fit=crop',
    description: 'Spellcaster magic card - Super Rare'
  },
  {
    id: 3,
    name: 'Exodia the Forbidden One',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop',
    description: 'Forbidden legendary card - Secret Rare'
  },
  {
    id: 4,
    name: 'Red Eyes Black Dragon',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop',
    description: 'Powerful red dragon - Ultra Rare'
  },
  {
    id: 5,
    name: 'Celtic Guardian',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop',
    description: 'Warrior creature card - Rare'
  },
  {
    id: 6,
    name: 'Gaia The Fierce Knight',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=300&h=300&fit=crop',
    description: 'Strong warrior card - Rare'
  },
]

function App() {
  const [cart, setCart] = useState<Product[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const total = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/40 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                🃏 يوجي
              </div>
              <span className="text-sm text-purple-300">YUGI STORE</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="hover:text-purple-400 transition">Home</a>
              <a href="#" className="hover:text-purple-400 transition">Products</a>
              <a href="#" className="hover:text-purple-400 transition">About</a>
              <a href="#" className="hover:text-purple-400 transition">Contact</a>
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="relative p-2 hover:bg-purple-500/20 rounded-lg transition"
                >
                  <ShoppingCart size={24} />
                  {cart.length > 0 && (
                    <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-purple-500/20 rounded-lg transition"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#" className="block py-2 hover:text-purple-400 transition">Home</a>
              <a href="#" className="block py-2 hover:text-purple-400 transition">Products</a>
              <a href="#" className="block py-2 hover:text-purple-400 transition">About</a>
              <a href="#" className="block py-2 hover:text-purple-400 transition">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Welcome to YUGI Store
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover rare and legendary trading cards from the Yu-Gi-Oh! universe
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500/60 transition group"
                >
                  <div className="relative overflow-hidden h-64 bg-black">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price > 45 ? '⭐ Ultra Rare' : '🌟 Rare'}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-purple-300">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-pink-500">${product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg font-semibold transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">No cards found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          {/* Shopping Cart Sidebar */}
          {showCart && (
            <div className="w-full md:w-80 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-lg p-6 h-fit sticky top-20">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Shopping Cart</h2>

              {cart.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-2 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((product, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start bg-slate-700/50 p-3 rounded border border-purple-500/20"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{product.name}</p>
                          <p className="text-pink-500 font-bold">${product.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-400 hover:text-red-300 transition text-xs font-bold ml-2"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-purple-500/30 pt-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Subtotal:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-400">Shipping:</span>
                      <span>${(cart.length * 5).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mb-4">
                      <span>Total:</span>
                      <span className="text-pink-500">${(total + (cart.length * 5)).toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-bold transition mb-2">
                    Checkout
                  </button>
                  <button
                    onClick={() => setCart([])}
                    className="w-full border border-red-500/50 hover:bg-red-500/10 py-2 rounded-lg font-semibold transition text-red-400"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-20 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-300">About Us</h3>
              <p className="text-gray-400">Your premier destination for rare Yu-Gi-Oh! trading cards</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-300">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Shop</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-300">Policies</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-300">Contact</h3>
              <p className="text-gray-400">Email: info@yugistore.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YUGI Store. All rights reserved. 🃏</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
