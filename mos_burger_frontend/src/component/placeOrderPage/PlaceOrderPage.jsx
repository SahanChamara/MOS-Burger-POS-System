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
  const handleCategoryClick = async (category) => {
    try {
      await axios
        .get(`http://localhost:8080/api/v1/stock/search/${category}`)
        .then((response) => {
          setFoodItems(response.data);
        });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // customer select drop down
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Smith", phone: "555-1234" },
    { id: 2, name: "Sarah Johnson", phone: "555-5678" },
    { id: 3, name: "Michael Brown", phone: "555-9012" },
    { id: 4, name: "Emily Davis", phone: "555-3456" },
    { id: 5, name: "David Wilson", phone: "555-7890" },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  // Handle Item Card Clicking
  let foodItemArr = [];

  const handleclickItem = (clickedFoodItem) => {
    console.log(clickedFoodItem);

    foodItemArr.push(clickedFoodItem);    

    console.log(foodItemArr);

    foodItemArr.filter((food) => food.itemId === clickedFoodItem.itemId)
    
    
  } 

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
            <div
              className="place-order-category-item"
              onClick={() => handleCategoryClick("Burger")}
            >
              <i className="place-order-fas fa-hamburger"></i>
              <span>Burgers</span>
            </div>
            <div
              className="place-order-category-item"
              onClick={() => handleCategoryClick("submarines")}
            >
              <i className="place-order-fas fa-hotdog"></i>
              <span>Submarines</span>
            </div>
            <div
              className="place-order-category-item"
              onClick={() => handleCategoryClick("Fries")}
            >
              <i className="place-order-fas fa-french-fries"></i>
              <span>Fries</span>
            </div>
            <div
              className="place-order-category-item"
              onClick={() => handleCategoryClick("Pasta")}
            >
              <i className="place-order-fas fa-utensils"></i>
              <span>Pasta</span>
            </div>
            <div
              className="place-order-category-item"
              onClick={() => handleCategoryClick("Chicken")}
            >
              <i className="place-order-fas fa-drumstick-bite"></i>
              <span>Chicken</span>
            </div>
            <div
              className="place-order-category-item"
              onClick={() => handleCategoryClick("Beverages")}
            >
              <i className="place-order-fas fa-glass-cheers"></i>
              <span>Beverages</span>
            </div>
          </nav>

          <section className="place-order-items-grid">
            {foodItems.map((food) => (
              <div key={food.itemId} className="place-order-item-card" onClick={() => handleclickItem(food)}>
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
            <div className="place-order-customer-selection">
              <div className="place-order-cart-header">
                Current Order
                <div className="place-order-customer-dropdown-container">
                  <div
                    className="place-order-selected-customer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>
                      {selectedCustomer
                        ? selectedCustomer.name
                        : "Select Customer"}
                    </span>
                    <i
                      className={`fa fa-chevron-${
                        isDropdownOpen ? "up" : "down"
                      }`}
                    ></i>
                  </div>

                  {isDropdownOpen && (
                    <div className="place-order-dropdown-menu">
                      <div className="place-order-search-customer">
                        <input
                          type="text"
                          placeholder="Search customer by name or phone..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="place-order-customers-list">
                        {filteredCustomers.length > 0 ? (
                          filteredCustomers.map((customer) => (
                            <div
                              key={customer.id}
                              className="place-order-customer-item"
                              onClick={() => handleCustomerSelect(customer)}>
                              <div className="place-order-customer-name">
                                {customer.name}
                              </div>
                              <div className="place-order-customer-phone">
                                {customer.phone}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="place-order-no-customers">
                            No customers found
                          </div>
                        )}
                        <div className="place-order-add-new-customer">
                          <button>+ Add New Customer</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/*             
            <div className="place-order-cart-header">
              Current Order - We Can include the customer select option for this
            </div> */}
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
