function ProductCard({ product, isSelected, isFavorite, onSelectProduct, onToggleFavorite }) {
  return (
    <article className={`product-card ${isSelected ? 'selected' : ''}`}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>Catégorie : {product.category}</p>
        <strong>{product.price} €</strong>
        <button onClick={() => onSelectProduct(product)}>
          Voir les détails
        </button>
        <button onClick={() => onToggleFavorite(product.id)}>
          {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
