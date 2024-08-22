import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowError from "../components/ShowError";
import ShowSuccess from "../components/ShowSuccess";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(true);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(null);
  const [data, setData] = useState([]);

  const allCategories = async () => {
    const { data } = await axios.get("/api/allCategory");
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    allCategories();
  }, []);

  const productHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("published", published);

      const newProduct = await axios.post("/api/addProduct", formData);
      if (newProduct) {
        setSuccess("Product is created successfully");
        setTitle("");
        setDescription("");
        setCategory("");
        setPrice("");
        setImage(null);
        setErrors([]);
      }
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors(["An unexpected error occurred"]);
      }
    }
  };

  return (
    <Container>
      <h1>Add a New Product </h1>
      <hr />
      <Row>
        <Col md={6}>
          <form>
            <label>Product Image upload</label>
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label>Title</label>
            <input
              type="text"
              value={title}
              name="title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Category</label>
            <select
              className="form-control"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {data.map((item) => (
                <option>{item.name}</option>
              ))}
            </select>

            <label>Description</label>
            <textarea
              rows={8}
              cols={50}
              type="text"
              value={description}
              className="form-control"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Price</label>
            <input
              type="number"
              value={price}
              className="form-control"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="checkbox"
              name="published"
              className="form-check-input"
              onChange={(e) => setPublished(e.target.checked)}
            />
            <label>Product will be dispalyed ??</label>

            <br />
            <button
              className="btn  btn-info btn-block shadow"
              onClick={productHandler}
            >
              + Create a new product
            </button>
          </form>
          <br />
          {success && <ShowSuccess success={success} />}
        </Col>
        <Col md={6}>{!success && <ShowError errors={errors} />}</Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
