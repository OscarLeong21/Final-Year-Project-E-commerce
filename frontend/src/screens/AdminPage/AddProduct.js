import axios from "axios";
import SideMenu from "./SideMenu.js";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin/AddProduct.css";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setPic] = useState("");

  const handleSubmit = async (e, pics) => {
    e.preventDefault();

    if (!pics) {
      alert.error("Please Select a image.");
    }

    const { data } = await axios.post("/api/products/create", {
      name,
      description,
      price,
      countInStock,
      category,
      imageUrl,
    });
    localStorage.setItem("productInfo", JSON.stringify(data));
    alert.success("Product created.");
    navigate("/admin/productlist");
  };

  const postImages = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "mudyeshop");
      data.append("cloud_name", "dhixidtbs");
      fetch("https://api.cloudinary.com/v1_1/dhixidtbs/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="dashboard">
      <SideMenu />
      <div className="AddPContainer">
        <div>
          <h1 id="addproductheading">Add products</h1>
        </div>

        <div className="addProductConinter">
          <div className="addP">
            <div className="addProduct">
              <Form>
                <Form.Group>
                  <Form.Label className="label">Product name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter product name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="label">Price</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    name="price"
                    value={price}
                    placeholder="Enter product price"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="label">Count of Stocks</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    name="countInStock"
                    value={countInStock}
                    placeholder="Enter product stocks"
                    onChange={(e) => setCountInStock(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label className="label">Category</Form.Label>
                  <Form.Select
                    className="form-control"
                    aria-label="Default select example"
                    name="countInStock"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option>Select Category</option>
                    <option value="ToyStory">ToyStory</option>
                    <option value="Stitch">Stitch</option>
                    <option value="Winnie_the_Pooh">Winnie_the_Pooh</option>
                    <option value="Figure">Figure</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Donald_Duck">Donald_Duck</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label className="label">Image</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="file"
                    name="imageUrl"
                    onChange={(e) => postImages(e.target.files[0])}
                    required
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="description">
              <Form.Group>
                <Form.Label className="label">Description</Form.Label>
                <Form.Control
                  className="form-control"
                  as="textarea"
                  name="description"
                  value={description}
                  rows={3}
                  placeholder="Enter product description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
            {/* Submit Button */}
            <div className="subBtn">
              <div className="d-grid gap-2">
                <Button
                  variant="warning"
                  size="lg"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
