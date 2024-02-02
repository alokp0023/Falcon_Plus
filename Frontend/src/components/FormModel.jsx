import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function FormModel({ open, handleToggle, fields, title }) {
  return (
    <Modal className="fade" show={open} onHide={handleToggle}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="auth-brand text-center mt-2 mb-4 position-relative top-0">
          <Link to="#" className="logo-light">
            <span>
              <img src={logo} alt="logo" height="65" />
            </span>
          </Link>
        </div>
        <form action="#" className="ps-3 pe-3">
          {fields.map((field) => (
            <div className="mb-3">
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
              <input
                className="form-control"
                type={field.type}
                id={field.name}
                required
                placeholder={field.label}
              />
            </div>
          ))}

          <div className="mb-3 text-center">
            <button className="btn rounded-pill btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default FormModel;
