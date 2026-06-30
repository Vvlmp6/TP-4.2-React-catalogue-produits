function ProductDetails({ product, isFavorite, onAddToCart }) {
  return (
    <section className="product-details">
      <h2>Produit mis en avant</h2>
      <div className="details-card">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Catégorie : {product.category}</p>
        <strong>Prix : {product.price} €</strong>
        {isFavorite && <p>⭐ Ce produit est dans vos favoris.</p>}
        <button onClick={() => onAddToCart(product)}>
          Ajouter au panier
        </button>
      </div>
    </section>
  )
}

export default ProductDetails
