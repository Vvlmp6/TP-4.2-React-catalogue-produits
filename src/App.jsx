import { useState } from 'react'
import { products } from './data/products'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [showDetails, setShowDetails] = useState(true)
  const [favoriteProductId, setFavoriteProductId] = useState(null)

  function toggleFavorite(productId) {
    if (favoriteProductId === productId) {
      setFavoriteProductId(null)
    } else {
      setFavoriteProductId(productId)
    }
  }

  function handleAddToCart(product) {
    console.log('Produit à ajouter au panier :', product.name)
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
      </main>
      <Footer />
    </>
  )
}

export default App
