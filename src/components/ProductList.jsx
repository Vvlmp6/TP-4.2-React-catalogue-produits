import ProductCard from './ProductCard'

function ProductList() {
  return (
    <section className="product-list">
      <h2>Nos produits</h2>
      <div className="products-grid">
        <ProductCard
          name="Ordinateur portable"
          price={899}
          category="Informatique"
          image="https://placehold.co/300x200?text=Ordinateur"
        />
        <ProductCard
          name="Souris sans fil"
          price={29}
          category="Accessoires"
          image="https://placehold.co/300x200?text=Souris"
        />
        <ProductCard
          name="Casque Triton"
          price={79}
          category="Accessoires"
          image="https://placehold.co/300x200?text=Casque"
        />
      </div>
    </section>
  )
}

export default ProductList
