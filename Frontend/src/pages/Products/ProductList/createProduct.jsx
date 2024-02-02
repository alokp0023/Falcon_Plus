import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FormInput } from "../../../components";
import { ProductFields } from "../../../constants";

function CreateProduct({ open, handleToggle, title }) {
  return (
    <Modal className="fade" show={open} onHide={handleToggle} size="lg">
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="row mt-1">
          <Form noValidate>
            <div className="row">
              {ProductFields.map((field) => (
                <div className="col-6">
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
            </div>
            <div className="row mt-1">
              <div className="col-4">
                <FormInput
                  name="select"
                  label="Raw Material"
                  type="select"
                  containerClass="mb-3"
                  className="form-select"
                  // register={register}
                  key="select"
                  // errors={errors}
                  // control={control}
                >
                  <option defaultValue="selected">
                    slider 8 no lock nickle
                  </option>
                  <option>square buckles 1.5</option>
                  <option>Delux Loop 1.5</option>
                  <option>wheel</option>
                </FormInput>
              </div>
              <div className="col-4">
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    id="validationTooltip01"
                    placeholder="Quantity"
                    defaultValue="0"
                    required
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    Please enter first name.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-4 mt-3">
                <Button variant="primary" type="submit">
                  Add Material
                </Button>
              </div>
            </div>
          </Form>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-sm table-centered table-hover table-borderless mb-0 mt-3">
                <thead className="border-top border-bottom bg-light-subtle border-light">
                  <tr>
                    <th>#</th>
                    <th>Raw Material</th>
                    <th>Per Product Quantity</th>
                    <th>Total Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <b>spinner</b>
                    </td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <b>Duffle</b>
                    </td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mt-2 m-5 mt-5">
            <Button>Create Product</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CreateProduct;
