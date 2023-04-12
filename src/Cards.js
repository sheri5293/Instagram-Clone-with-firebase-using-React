import React, { useState } from "react";
import { ListGroup, Card } from "react-bootstrap";
import FileUpload from "./FileUpload";
import Webcamp from "./Webcamp";
import "./Card.css";
import Camera from "./Camera";

const Cards = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: "30rem" }} show={show}>
        <Card.Img
          variant="top"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          class="rounded-circle mb-3"
          style={{ width: "150px;" }}
          alt="Avatar"
        />

        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
            <span>
              <b>{props.post}</b>
            </span>
            <br></br>
            Some beautiful memories
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>10</ListGroup.Item>
          <ListGroup.Item>Photos</ListGroup.Item>
          <ListGroup.Item>150</ListGroup.Item>
          <ListGroup.Item>Followers</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Card.Text className="lead fw-normal mb-0">Recent photos</Card.Text>
          </div>

          <Card.Text className="mb-0">
            <div className="rows">
              <button
                className="col-md-6 text-end fst-italic w-100 bg-white text-danger"
                onClick={handleShow}
              >
                Edit Profile
              </button>

              <button
                className="  col-md-6 text-end fst-italic w-100 bg-white text-danger "
                onClick={handleShow}
              >
                Share Profile
              </button>
            </div>
            <div>
              <h3>Click the pic</h3>
              <Camera />
            </div>
          </Card.Text>
          <div className="mb-2 d-flex align-items-center justify-content-between">
            <FileUpload />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
