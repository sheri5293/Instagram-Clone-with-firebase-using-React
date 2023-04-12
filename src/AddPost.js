import React, { useState } from "react";
import {
  Form,
  Dropdown,
  DropdownButton,
  ListGroup,
  Card,
  DropdownItem,
} from "react-bootstrap";
import Cards from "./Cards";
import "react-toastify/dist/ReactToastify.css"; //used for Alert notification//
import "./AddPost.css";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
const AddPost = () => {
  const [inputTitle, setTitle] = useState("");
  const [inputPost, setPost] = useState("");
  const [inputVisibility, setVisibility] = useState("");
  const [items1, setItems1] = useState([]);

  const addItem = () => {
    if (!inputTitle && !inputPost) {
      alert("Enter Field");
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputTitle,
      };
      setItems1([...items1, allInputData]);

      setShow(false);
      console.log(items1);
    }
  };
  const delteItem = (id) => {
    console.log(id);
    const updatedItems = items1.filter((elem, ind) => {
      return ind !== id;
    });
    setItems1(updatedItems);
  };
  const handleChange = (event) => {
    if (event.target.checked) setVisibility((current) => !current);
  };
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  return (
    <div>
      <div className="addKeeper ">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "rgb(158, 14, 115)" }}>
              {" "}
              Title
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Add a Title"
              value={inputTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "rgb(158, 14, 115)" }}>
              Caption
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Add a Caption.."
              value={inputPost}
              onChange={(e) => setPost(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Set as!
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Public</Dropdown.Item>
              <Dropdown.Item href="#/action-2">private</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>

        <button onClick={addItem}>Post</button>
        <br></br>
        <br></br>
        <br></br>
        {items1.map((elem, ind) => {
          return (
            <div key={ind}>
              <Cards
                style={{ position: "absolute" }}
                title={inputTitle}
                post={inputPost}
                visible={inputVisibility}
              />
              <div className="text-center">
                <button onClick={handleShow}>Edit</button>
                <button onClick={() => delteItem(ind)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddPost;
