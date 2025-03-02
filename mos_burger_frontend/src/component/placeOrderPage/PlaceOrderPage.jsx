import React, { useEffect, useState } from "react";
import "./PlaceOrderPage.css";
import axios from "axios";

const PlaceOrderPage = () => {

    // Load All Food Items
    const [foodItems, setFoodItems] = useState([]);

  const loadFoodItems = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/v1/stock/getAll")
        .then((response) => {
          setFoodItems(response.data);
        });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  //load selecting food item
  const [categoryName, setCategoryName] = useState("");

  return (
    <div>
      <div className="place-order-body">
        <header className="place-order-header">
          <div className="place-order-logo">MOS BURGER</div>
          <div className="place-order-search-container">
            <div className="place-order-search-box">
              <i className="place-order-fas fa-search"></i>
              <input type="text" placeholder="Search menu items..." />
            </div>
          </div>
        </header>

        <main className="place-order-main-container">
          <nav className="place-order-categories">
            <div className="place-order-category-item">
              <i className="place-order-fas fa-hamburger"></i>
              <span>Burgers</span>
            </div>
            <div className="place-order-category-item">
              <i className="place-order-fas fa-hotdog"></i>
              <span>Submarines</span>
            </div>
            <div className="place-order-category-item">
              <i className="place-order-fas fa-french-fries"></i>
              <span>Fries</span>
            </div>
            <div className="place-order-category-item">
              <i className="place-order-fas fa-utensils"></i>
              <span>Pasta</span>
            </div>
            <div className="place-order-category-item">
              <i className="place-order-fas fa-drumstick-bite"></i>
              <span>Chicken</span>
            </div>
            <div className="place-order-category-item">
              <i className="place-order-fas fa-glass-cheers"></i>
              <span>Beverages</span>
            </div>
          </nav>

          <section className="place-order-items-grid">
            {foodItems.map((food) => (
              <div key={food.itemId} className="place-order-item-card">
                <div>
                  {" "}
                  <img
                    src={food.imagePath}
                    alt={food.itemName}
                    className="place-order-item-image"
                  />{" "}
                </div>
                <div className="place-order-item-details">
                  <div className="place-order-item-name">{food.itemName}</div>
                  <div className="place-order-item-price">Rs. {food.price}</div>
                </div>
              </div>
            ))}
            ;
          </section>

          <aside className="place-order-cart-container">
            <div className="place-order-cart-header">
              Current Order - We Can include the customer select option for this
            </div>
            <div className="place-order-cart-items">
              <div className="place-order-cart-item">
                <div className="place-order-cart-item-details">
                  <div>Classic Burger</div>
                  <div>Rs. 450</div>
                </div>
                <div className="place-order-cart-item-actions">
                  <button className="place-order-quantity-btn">-</button>
                  <span>1</span>
                  <button className="place-order-quantity-btn">+</button>
                </div>
              </div>
              <div className="place-order-cart-item">
                <div className="place-order-cart-item-details">
                  <div>Classic Burger</div>
                  <div>Rs. 450</div>
                </div>
                <div className="place-order-cart-item-actions">
                  <button className="place-order-quantity-btn">-</button>
                  <span>1</span>
                  <button className="place-order-quantity-btn">+</button>
                </div>
              </div>
              <div className="place-order-cart-item">
                <div className="place-order-cart-item-details">
                  <div>Classic Burger</div>
                  <div>Rs. 450</div>
                </div>
                <div className="place-order-cart-item-actions">
                  <button className="place-order-quantity-btn">-</button>
                  <span>1</span>
                  <button className="place-order-quantity-btn">+</button>
                </div>
              </div>
            </div>
            <div className="place-order-cart-summary">
              <div className="place-order-total-amount">
                <span>Discount:</span>
                <span>Rs. 50</span>
              </div>
              <div className="place-order-total-amount">
                <span>Total Amount:</span>
                <span>Rs. 450</span>
              </div>
              <div className="place-order-payment-input">
                <input type="number" placeholder="Enter cash amount" />
              </div>
              <button className="place-order-print-btn">Place Order</button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
