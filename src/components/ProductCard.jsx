function ProductCard({ name, price, category, image }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>Catégorie : {category}</p>
        <strong>{price} €</strong>
      </div>
    </article>
  )
}

export default ProductCard
