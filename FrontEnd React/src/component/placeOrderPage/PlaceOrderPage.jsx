import React from 'react'
import './PlaceOrderPage.css'


const PlaceOrderPage = () => {
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
            
            <div className="place-order-item-card">
                <div className="place-order-item-image"></div>
                <div className="place-order-item-details">
                    <div className="place-order-item-name">Classic Burger</div>
                    <div className="place-order-item-price">Rs. 450</div>
                </div>
            </div>
            
            <div className="place-order-item-card">
                <div className="place-order-item-image"></div>
                <div className="place-order-item-details">
                    <div className="place-order-item-name">Classic Burger</div>
                    <div className="place-order-item-price">Rs. 450</div>
                </div>
            </div>
            
            <div className="place-order-item-card">
                <div className="place-order-item-image"></div>
                <div className="place-order-item-details">
                    <div className="place-order-item-name">Classic Burger</div>
                    <div className="place-order-item-price">Rs. 450</div>
                </div>
            </div>
            
            <div className="place-order-item-card">
                <div className="place-order-item-image"></div>
                <div className="place-order-item-details">
                    <div className="place-order-item-name">Classic Burger</div>
                    <div className="place-order-item-price">Rs. 450</div>
                </div>
            </div>
            
            <div className="place-order-item-card">
                <div className="place-order-item-image"></div>
                <div className="place-order-item-details">
                    <div className="place-order-item-name">Classic Burger</div>
                    <div className="place-order-item-price">Rs. 450</div>
                </div>
            </div>
            
            <div className="place-order-item-card">
                <div className="place-order-item-image"></div>
                <div className="place-order-item-details">
                    <div className="place-order-item-name">Classic Burger</div>
                    <div className="place-order-item-price">Rs. 450</div>
                </div>
            </div>
            
            <div className="place-order-item-card">
                <div className="place-order-item-image"></div>
                <div className="place-order-item-details">
                    <div className="place-order-item-name">Classic Burger</div>
                    <div className="place-order-item-price">Rs. 450</div>
                </div>
            </div>            
        </section>

        <aside className="place-order-cart-container">
            <div className="place-order-cart-header">
                Current Order
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
                    <input type="number" placeholder="Enter cash amount"/>
                </div>
                <button className="place-order-print-btn">Place Order</button>                 
            </div>
        </aside>
    </main>
      </div>
    </div>
  )
}

export default PlaceOrderPage
