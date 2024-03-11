import "./Chatbot.css";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.item_sku}</p>
      <h4>Pros:</h4>
      <ul>
        {item.pros.map((pro, index) => (
          <li key={index}>{pro}</li>
        ))}
      </ul>
      <h4>Cons:</h4>
      <ul>
        {item.cons.map((con, index) => (
          <li key={index}>{con}</li>
        ))}
      </ul>
      <img src={item.image_url} alt={`product ${item.item_sku}`} />
      <button className="cart-button">View product page</button>
    </div>
  );
};

export default ProductCard;
