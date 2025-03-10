import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./CustomerManagement.css";
import axios from "axios";
import {Alert,Snackbar, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CustomerManagement = () => {
  // Load Customer Table
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/customer/getAll")
      .then((response) => {
        setCustomerList(response.data);
      });
  }, []);

  //Update Customer
  const [open, setOpen] = useState(false);
  const [updatingCustomer, setupdatingCustomer] = useState({});

  // Dynamically changing the input value in text filed
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setupdatingCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // edit button clicking function
  const handleEditCustomer = (customer) => {
    console.log(customer);
    setupdatingCustomer(customer);
    setOpen(true);
  };

  // Alert Component For Update
  const [alertUpdate, setalertUpdate] = useState(false);
  const [updateResponse ,setUpdateResponse] = useState("");
  const handleUpdateClose = () => setalertUpdate(false);

  //Calling the update API
  const handleUpdateSubmission = async () => {
    await axios
      .put("http://localhost:8080/api/v1/customer/update", updatingCustomer)
      .then((response) => {
        if (response.data === "Customer Update Success") {
          setalertUpdate(true);
          setUpdateResponse(response.data);
        }
      });
  };

  // MUI Component Closing Function (closing an click the close icon)
  const handleClose = () => {
    setOpen(false);
  };


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
                      <th>Customer Name</th>
                      <th>Contact Information</th>
                      <th>Customer Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody id="customersTableBody">
                    {customerList.map((customer) => (
                      <tr key={customer.customerId}>
                        <td>{customer.name}</td>
                        <td>{customer.contactNumber}</td>
                        <td>{customer.address}</td>
                        <td>
                          <Stack direction="row" spacing={2}>
                            <Button
                              onClick={() => handleEditCustomer(customer)}
                              variant="contained"
                              startIcon={<EditIcon />}
                            ></Button>
                            <Button
                              variant="contained"
                              color="error"
                              endIcon={<PersonRemoveIcon />}
                            ></Button>
                          </Stack>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {customerList.length === 0 && (
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
                    <button
                      className="customer-add-btn"
                      id="addCustomerEmptyBtn"
                    >
                      <i className="customer-fas fa-plus"></i>
                      Add New Customer
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Update Alert */}
        <Snackbar
          open={alertUpdate}
          autoHideDuration={3000}
          onClose={handleUpdateClose}
        >
          <Alert onClose={handleUpdateClose} severity="success">
            {updateResponse}
          </Alert>
        </Snackbar>

        {/* MUI Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                console.log(formJson);
                handleUpdateSubmission();
                handleClose();
              },
            },
          }}
        >
          {/* Updating Customer Details MUI Dialog */}
          <DialogTitle>Update Customer</DialogTitle>
          <DialogContent>
            <DialogContentText>Update the Customer Details</DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="customerId"
              name="customerId"
              label="Customer ID"
              type="text"
              fullWidth
              variant="standard"
              value={updatingCustomer.customerId}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Customer Name"
              type="text"
              fullWidth
              variant="standard"
              value={updatingCustomer.name}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="contactNumber"
              name="contactNumber"
              label="Contact Number"
              type="number"
              fullWidth
              variant="standard"
              value={updatingCustomer.contactNumber}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="address"
              name="address"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              value={updatingCustomer.address}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default CustomerManagement;
