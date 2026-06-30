import ProductCard from './ProductCard'

function ProductList({ products, selectedProductId, favoriteProductId, onSelectProduct, onToggleFavorite }) {
  return (
    <section className="product-list">
      <h2>Nos produits</h2>
      <div className="products-grid">
        <ProductCard
          product={products[0]}
          isSelected={selectedProductId === products[0].id}
          isFavorite={favoriteProductId === products[0].id}
          onSelectProduct={onSelectProduct}
          onToggleFavorite={onToggleFavorite}
        />
        <ProductCard
          product={products[1]}
          isSelected={selectedProductId === products[1].id}
          isFavorite={favoriteProductId === products[1].id}
          onSelectProduct={onSelectProduct}
          onToggleFavorite={onToggleFavorite}
        />
        <ProductCard
          product={products[2]}
          isSelected={selectedProductId === products[2].id}
          isFavorite={favoriteProductId === products[2].id}
          onSelectProduct={onSelectProduct}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </section>
  )
}

export default ProductList
