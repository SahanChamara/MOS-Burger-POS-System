import React from "react";
import Navbar from "../navbar/navbar";
import "./CustomerManagement.css";

const CustomerManagement = () => {
  return (
    <div>
      <div className="customer-body">
        <header className="customer-header">
          <div className="customer-header-container">
            <div className="customer-logo-container">
              <div className="customer-logo-icon">
                <i className="customer-fas fa-burger">
                  MOS Burger Customer Management
                </i>
              </div>
              {/* <h3 className="customer-logo-text">MOS Burger Customer Management</h3> */}
            </div>
          </div>
        </header>
        <Navbar />

        <main className="customer-main-container">
          <div className="customer-content-card">
            <div className="customer-card-content">
              <div className="customer-section-header">
                <h2 className="customer-section-title">Customer Management</h2>
                <button className="customer-add-btn" id="addCustomerBtn">
                  <i className="customer-fas fa-plus"></i>
                  Add New Customer
                </button>
              </div>

              {/* <!-- Search --> */}
              <div className="customer-search-container">
                <div className="customer-search-input-wrapper">
                  <i className="customer-fas fa-search search-icon"></i>
                  <input
                    type="text"
                    className="customer-search-input"
                    id="customerSearch"
                    placeholder="Search customer by name, phone, or email..."
                  />
                </div>
              </div>

              {/* <!-- Add/Edit Customer Form (Hidden by default) --> */}
              <div
                className="customer-form-container"
                id="customerFormContainer"
                /* style="display: none;" */
              >
                <div className="customer-form-header">
                  <h3 className="customer-form-title" id="formTitle">
                    Add New Customer
                  </h3>
                  <button className="customer-close-btn" id="closeFormBtn">
                    <i className="customer-fas fa-times"></i>
                  </button>
                </div>
                <div className="customer-form-content">
                  <div className="customer-form-grid">
                    <div className="customer-form-group">
                      <label className="customer-form-label">
                        Name <span className="customer-required">*</span>
                      </label>
                      <div className="customer-input-with-icon">
                        <i className="customer-fas fa-user input-icon"></i>
                        <input
                          type="text"
                          className="customer-form-input"
                          id="customerName"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="customer-form-group">
                      <label className="customer-form-label">
                        Phone <span className="customer-required">*</span>
                      </label>
                      <div className="customer-input-with-icon">
                        <i className="customer-fas fa-phone input-icon"></i>
                        <input
                          type="text"
                          className="customer-form-input"
                          id="customerPhone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="customer-form-group">
                      <label className="customer-form-label">Email</label>
                      <div className="customer-input-with-icon">
                        <i className="customer-fas fa-envelope input-icon"></i>
                        <input
                          type="email"
                          className="customer-form-input"
                          id="customerEmail"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="customer-form-group">
                      <label className="customer-form-label">Address</label>
                      <div className="customer-input-with-icon">
                        <i className="customer-fas fa-map-marker-alt input-icon"></i>
                        <input
                          type="text"
                          className="customer-form-input"
                          id="customerAddress"
                          placeholder="Full Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="customer-form-actions">
                    <button
                      className="customer-cancel-btn"
                      id="cancelBtn"
                      /* style="display: none;" */
                    >
                      Cancel
                    </button>
                    <button className="customer-save-btn" id="saveCustomerBtn">
                      Add Customer
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Customers Table --> */}
              <div className="customer-table-container">
                <table className="customer-customers-table">
                  <thead>
                    <tr>
                      <th>Customer Details</th>
                      <th>Contact Information</th>
                      <th>Visit Stats</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody id="customersTableBody">
                    {/* <!-- Customer rows will be inserted here via Dynamically --> */}
                  </tbody>
                </table>

                {/* <!-- Empty State (Hidden if there are customers) --> */}
                <div
                  className="customer-empty-state"
                  id="emptyState"
                  /* style="display: none;" */
                >
                  <div className="customer-empty-icon">
                    <i className="customer-fas fa-users-slash"></i>
                  </div>
                  <h3 className="customer-empty-title">No customers found</h3>
                  <p className="customer-empty-description">
                    Get started by adding a new customer.
                  </p>
                  <button className="customer-add-btn" id="addCustomerEmptyBtn">
                    <i className="customer-fas fa-plus"></i>
                    Add New Customer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerManagement;
