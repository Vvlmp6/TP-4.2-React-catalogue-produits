import { useState, useEffect } from 'react'
import { products } from './data/products'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [showDetails, setShowDetails] = useState(true)
  const [favoriteProductId, setFavoriteProductId] = useState(null)
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  )
  const [customerName, setCustomerName] = useState('')

  useEffect(() => {
    console.log('Panier mis à jour :', cartItems)
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  function toggleFavorite(productId) {
    if (favoriteProductId === productId) {
      setFavoriteProductId(null)
    } else {
      setFavoriteProductId(productId)
    }
  }

  function handleAddToCart(product) {
    const existing = cartItems.find((item) => item.id === product.id)
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  function increaseQuantity(productId) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function decreaseQuantity(productId) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId))
  }

  function clearCart() {
    setCartItems([])
  }

  function handleOrderSubmit(event) {
    event.preventDefault()
    if (customerName.trim() === '') {
      alert('Veuillez saisir votre nom.')
      return
    }
    if (cartItems.length === 0) {
      alert('Votre panier est vide.')
      return
    }
    alert(`Merci ${customerName}, votre commande est prête !`)
  }

  return (
    <>
      <Header />
      <main>
        <ProductList
          products={products}
          selectedProductId={selectedProduct.id}
          favoriteProductId={favoriteProductId}
          onSelectProduct={setSelectedProduct}
          onToggleFavorite={toggleFavorite}
        />
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Masquer les détails' : 'Afficher les détails'}
        </button>
        {showDetails && (
          <ProductDetails
            product={selectedProduct}
            isFavorite={favoriteProductId === selectedProduct.id}
            onAddToCart={handleAddToCart}
          />
        )}
        <Cart
          cartItems={cartItems}
          customerName={customerName}
          onCustomerNameChange={setCustomerName}
          onOrderSubmit={handleOrderSubmit}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          onRemoveFromCart={removeFromCart}
          onClearCart={clearCart}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
