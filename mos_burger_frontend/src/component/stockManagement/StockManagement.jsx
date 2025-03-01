import React, { useEffect, useRef, useState } from "react";
import "./StockManagement.css";
import { supabase } from "../../config/supabaseClient";
import axios from "axios";

const StockManagement = () => {
  const fileInputRef = useRef(null);

  const [foodItem, setFoodItem] = useState({
    itemName: "",
    category: "",
    price: "",
    qtyOnHand: "",
    itemDiscountPercentage: "",
    expirationDate: "",
    imagePath: "",
  });

  const handleChange = (e) => {
    setFoodItem({
      ...foodItem,
      [e.target.name]: e.target.value,
    });
  };

  const [image, setImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState("");

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert("Please Select the Image");
      return;
    }

    const fileName = `${Date.now()}-${image.name}`;
    const { error } = await supabase.storage
      .from("mosburger")
      .upload(fileName, image);

    if (error) {
      console.error("upload eroor :", error);
    }

    const { data: urlData } = supabase.storage
      .from("mosburger")
      .getPublicUrl(fileName);

    let imageUrl = urlData.publicUrl;
    return imageUrl;
  };

  // add the food tems
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = await handleImageUpload();

    if (url) {
      const updatedFoodItem = { ...foodItem, imagePath: url };

      console.log(updatedFoodItem);

      await axios
        .post("http://localhost:8080/api/v1/stock/add", updatedFoodItem)
        .then((response) => {
          console.log(response.data);
          loadFoodItems();
        });
    }
  };

  // load the food Items
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    loadFoodItems();
  }, []);

  const loadFoodItems = async () => {
    await axios
      .get("http://localhost:8080/api/v1/stock/getAll")
      .then(response => {
        console.log(response.data);
        setFoodItems(response.data);
      });
  };

  // Deleting Food item
  // const [itemId,setItemId] = useState("");

  const deleteFoodItem = async (itemId) => {    
    await axios.delete(`http://localhost:8080/api/v1/stock/delete/${itemId}`)
    .then(response => {     
      if(response.data === "Delete Successful"){
        setFoodItems(foodItems.filter((food) => food.itemId !== itemId));
        alert("Delete Success");        
      }else {
        alert("Delete Failed");
      }
    });
  }

  return (
    <div>
      <div className="stock-management-body">
        <div className="stock-management-navbar">
          <div className="stock-management-logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
                stroke="#ff6b6b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 20V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V20"
                stroke="#ff6b6b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1>MOS Burger Store Management</h1>
          </div>
        </div>

        <div className="stock-management-container">
          <div className="stock-management-card">
            <div className="stock-management-card-title">Add New Burger</div>

            <form onSubmit={handleSubmit}>
              <div className="stock-management-form-group">
                <label
                  className="stock-management-form-label"
                  htmlFor="itemName"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  className="stock-management-form-control"
                  id="itemName"
                  placeholder="Enter burger name"
                  required
                  name="itemName"
                  onChange={handleChange}
                />
              </div>

              <div className="stock-management-form-group">
                <label className="form-label" htmlFor="category">
                  Category
                </label>
                <select
                  className="stock-management-form-control"
                  id="category"
                  name="category"
                  value={foodItem.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="burger">Burger</option>
                  <option value="chicken">Chicken</option>
                  <option value="fries"> Fries</option>
                  <option value="desserts">Desserts</option>
                </select>
              </div>

              <div className="stock-management-form-group">
                <label className="form-label" htmlFor="price">
                  Price (RS)
                </label>
                <input
                  type="number"
                  className="stock-management-form-control"
                  id="price"
                  placeholder="Enter price"
                  required
                  name="price"
                  onChange={handleChange}
                />
              </div>

              <div className="stock-management-form-group">
                <label
                  className="stock-management-form-label"
                  htmlFor="quantity"
                >
                  Quantity on Hand
                </label>
                <input
                  type="number"
                  className="stock-management-form-control"
                  id="quantity"
                  placeholder="Enter quantity"
                  required
                  name="qtyOnHand"
                  onChange={handleChange}
                />
              </div>

              <div className="stock-management-form-group">
                <label
                  className="stock-management-form-label"
                  htmlFor="discount"
                >
                  Discount Percentage
                </label>
                <input
                  type="number"
                  className="stock-management-form-control"
                  id="discount"
                  placeholder="Enter discount percentage"
                  min="0"
                  max="100"
                  name="itemDiscountPercentage"
                  onChange={handleChange}
                />
              </div>

              <div className="stock-management-form-group">
                <label
                  className="stock-management-form-label"
                  htmlFor="expiration"
                >
                  Expiration Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="expiration"
                  name="expirationDate"
                  onChange={handleChange}
                />
              </div>

              <div className="stock-management-form-group">
                <label className="stock-management-form-label">
                  Item Image
                </label>
                <div className="stock-management-item-image-upload">
                  <div className="stock-management-item-image-icon">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="#6c757d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 8L12 3L7 8"
                        stroke="#6c757d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 3V15"
                        stroke="#6c757d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Click Browse to upload image</p>

                  <p className="stock-management-paragraph1">
                    Supported formats: JPEG, PNG, WebP <br></br>
                    <br></br>
                  </p>

                  <input
                    type="file"
                    ref={fileInputRef}
                    // onChange={handleFileChange}
                    accept="image/jpeg, image/png, image/webp"
                    onChange={handleImage}
                    // style={{ display: "none" }}
                  />
                </div>
              </div>

              <div className="stock-management-paragraph2">
                <button
                  type="submit"
                  className="stock-management-btn btn-primary"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>

          <div className="stock-management-card">
            <div className="stock-management-card-title">
              Current Inventory
              <button className="stock-management-btn btn-outline">
                View All
              </button>
            </div>

            <div className="stock-management-form-group">
              <label
                className="stock-management-form-label"
                htmlFor="searchItem"
              >
                Search Item
              </label>
              <input
                type="text"
                className="stock-management-form-control"
                id="itemName"
                placeholder="Enter"
                required
              />
            </div>

            <div className="stock-management-item-grid">
              {foodItems.map((food) => (
                <div key={food.itemId} className="stock-management-item-card">
                  <img
                    src={food.imagePath}
                    alt={food.itemName}
                    className="stock-management-item-image"
                  />
                  <div className="stock-management-item-details">
                    <div className="stock-management-item-name">
                      {food.itemName}
                    </div>
                    <div className="stock-management-item-price">
                      Rs.{food.price}
                    </div>
                    <span className="stock-management-item-stock">
                      In Stock: {food.qtyOnHand}
                    </span>
                    <div className="stock-management-item-actions">
                      <button className="stock-management-btn btn-outline item-btn">
                        Edit
                      </button>
                      <button className="stock-management-btn btn-primary item-btn" onClick={() => deleteFoodItem(food.itemId)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stock-management-footer">
          MOS Burger Store Management System © 2025
        </div>
      </div>
    </div>
  );
};

export default StockManagement;
