function Cart({
  cartItems,
  customerName,
  onCustomerNameChange,
  onOrderSubmit,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
  onClearCart
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const totalArticles = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <section className="cart">
      <h2>Panier ({totalArticles})</h2>

      {cartItems.length === 0 && (
        <p>Votre panier est vide.</p>
      )}

      {cartItems.length > 0 && (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} €
                <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                <button onClick={() => onRemoveFromCart(item.id)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <p>Total : {total} €</p>
          <button onClick={onClearCart}>
            Vider le panier
          </button>
        </>
      )}

      <form onSubmit={onOrderSubmit} className="order-form">
        <label>
          Votre nom :
          <input
            type="text"
            value={customerName}
            onChange={(event) => onCustomerNameChange(event.target.value)}
            placeholder="Ex : Jean"
          />
        </label>
        <button type="submit" disabled={cartItems.length === 0}>
          Valider la commande
        </button>
      </form>
    </section>
  )
}

export default Cart
