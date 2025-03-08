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
    {
      id: "",
      name: "",
      phone: "",
    },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.contactNumber.includes(searchTerm)
  );

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setIsDropdownOpen(false);
    setSearchTerm("");
    console.log(customer);
  };

  // load Customer Details for DropDown
  const loadAllCustomers = async () => {
    await axios
      .get("http://localhost:8080/api/v1/customer/getAll")
      .then((response) => {
        setCustomers(response.data);
      });
  };

  useEffect(() => {
    loadAllCustomers();
  }, []);

  // Handle Item Card Clicking and adding the Cart
  const [foodItemArr, setFoodItemArr] = useState([]);
  const [qtyChanging, setQtyChanging] = useState(0);
  const [incrementQty, setIncrementQty] = useState(0);
  const [decrementQty, setdecrementQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotaDiscuont] = useState(0);

  const handleclickItem = (clickedFoodItem) => {
    const index = foodItemArr.findIndex(
      (item) => item.itemId === clickedFoodItem.itemId
    );

    if (index >= 0) {
      setQtyChanging(foodItemArr[index].qty++);
      console.log(qtyChanging);
    } else {
      const selectedFoodItem = {
        itemId: clickedFoodItem.itemId,
        itemName: clickedFoodItem.itemName,
        price: clickedFoodItem.price,
        discount: clickedFoodItem.itemDiscountPercentage,
        qty: 1,
      };
      setFoodItemArr((previusItems) => [...previusItems, selectedFoodItem]);
    }
  };

  // i use this useEffect to updating price immedietly an fooditemarray changing...
  useEffect(() => {
    const totalP = foodItemArr.reduce((total, item) => total + item.price*item.qty, 0);
    const discount = foodItemArr.reduce((itemDiscount,item) => itemDiscount + item.discount,0);      
    setTotalPrice(totalP);
    setTotaDiscuont(discount);
  }, [foodItemArr,qtyChanging]);

  // this use effect used for debug purpose only...
  useEffect(() => {
    console.log(foodItemArr);
    console.log(totalPrice);
  }, [foodItemArr, totalPrice]);

  // Setting the Order ID
  const [orderId, setOrderId] = useState(0);
  const getLastOrderId = async () => {
    await axios.get('http://localhost:8080/api/v1/placeOrder/lastOrderId')
    .then(response => {
      setOrderId(response.data);   
    });
  }

  useEffect(() => {
    getLastOrderId();    
  },[]);


  // Place Order
  const [order, setOrder] = useState({
    orderId:"",
    orderDate: "",
    totalAmount:0,
    finalAmount:0,
    discountPercentage:0,
    customer:{},
    orderDetailList:[]
  })

  const handlePlacingOrder = () => {
    setOrder({
      orderId: orderId,
      totalAmount: totalPrice,
      discountPercentage:totalDiscount,
      customer: selectedCustomer,
      orderDetailList: foodItemArr
    });
    console.log(order);    

    handlePlaceOrderAPI();
  }

  const handlePlaceOrderAPI = async () => {
    await axios.post("http://localhost:8080/api/v1/placeOrder/place",order)
    .then(response => {
      console.log(response.data);      
    })
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
              <div
                key={food.itemId}
                className="place-order-item-card"
                onClick={() => handleclickItem(food)}
              >
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
                Order ID : {orderId}
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
                              key={customer.customerId}
                              className="place-order-customer-item"
                              onClick={() => handleCustomerSelect(customer)}
                            >
                              <div className="place-order-customer-name">
                                {customer.name}
                              </div>
                              <div className="place-order-customer-phone">
                                {customer.contactNumber}
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
              {foodItemArr.map((cartAddingFoodItem) => (
                <div
                  key={cartAddingFoodItem.itemId}
                  className="place-order-cart-item"
                >
                  <div className="place-order-cart-item-details">
                    <div>{cartAddingFoodItem.itemName}</div>
                    <div>Rs. {cartAddingFoodItem.price}</div>
                  </div>
                  <div className="place-order-cart-item-actions">
                    <button className="place-order-quantity-btn">-</button>
                    <span>{cartAddingFoodItem.qty}</span>
                    <button className="place-order-quantity-btn">+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="place-order-cart-summary">
              <div className="place-order-total-amount">
                <span>Discount:</span>
                <span>Rs. {totalDiscount}</span>
              </div>
              <div className="place-order-total-amount">
                <span>Total Amount:</span>
                <span>Rs. {totalPrice}</span>
              </div>
              <div className="place-order-payment-input">
                <input type="number" placeholder="Enter cash amount" />
              </div>
              <button className="place-order-print-btn" onClick={handlePlacingOrder}>Place Order</button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
