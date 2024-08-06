import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(true);

  const productById = async () => {
    const { data } = await axios.get(`/api/single/${id}`);
    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price);
    setImage(data.image);
    setPublished(data.published);
  };

  useEffect(() => {
    productById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("published", published);

    await axios.put(`/api/updateProduct/${id}`, formData);
    //alert("Data update successful");
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Product information update</h1>
          <form>
            <label>File upload</label>
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control"
            />
            <label>Title</label>
            <input
              type="text"
              value={title}
              className="form-control"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
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
              name="price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="checkbox"
              name="published"
              value={published}
              className="form-check-input"
              onChange={(e) => setPublished(e.target.checked)}
            />
            <label>Product will be displayed ??</label>
            <br /> <br />
            <button className="btn btn-info btn-block" onClick={updateProduct}>
              Update product
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
