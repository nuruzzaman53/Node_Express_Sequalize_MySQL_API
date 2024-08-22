import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowError from "../components/ShowError";
import ShowSuccess from "../components/ShowSuccess";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(null);

  const categoryHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("categoryImage", categoryImage);
      const newCategory = await axios.post("/api/addCategory", formData);
      if (newCategory) {
        setSuccess("Category is created successfully");
        setCategoryName("");
        setCategoryImage("");
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
      <Row clasName="justify-content-center">
        <Col className=" mt-5" md={6}>
          <h2>Create a new category</h2>
          <form className="mt-5">
            <label>Category Name</label>
            <input
              type="text"
              className="form-control"
              name="categoryName"
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <label className="mt-3">Category Image</label>
            <input
              type="file"
              className="form-control"
              name="categoryImage"
              onChange={(e) => setCategoryImage(e.target.files[0])}
            />
            <button
              className="btn btn-info fw-bold mt-5"
              onClick={categoryHandler}
            >
              Create a category
            </button>
          </form>
          <br />
          {success && <ShowSuccess success={success} />}
          {!success && <ShowError errors={errors} />}
        </Col>
        <Col className="mt-5" md={6}>
          <h3>All Categories</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCategory;
