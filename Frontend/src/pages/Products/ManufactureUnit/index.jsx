import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import logoDark from "../../../assets/images/logo.png";
import { FormInput, PageBreadcrumb } from "../../../components";

function ManufactureUnit() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div>
      <PageBreadcrumb title="Maufacturing Unit" subName="Products" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className="clearfix">
                <div className="float-start mb-3">
                  <img src={logoDark} alt="dark logo" height={60} />
                </div>
              </div>
              <div className="row mt-3"></div>
              <div className="row mt-1">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                <div className="col-4">
                    <FormInput
                      name="select"
                      label="Product Name"
                      type="select"
                      containerClass="mb-3"
                      className="form-select"
                      // register={register}
                      key="select"
                      // errors={errors}
                      // control={control}
                    >
                      <option defaultValue="selected">1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
                    
                    <Button variant="primary" type="submit">
                    Add Product
                    </Button>
                  </Form>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-sm table-centered table-hover table-borderless mb-0 mt-3">
                      <thead className="border-top border-bottom bg-light-subtle border-light">
                        <tr>
                          <th>#</th>
                          <th>Product</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <b>Icon Duffle</b>
                          </td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <b>Icon Duffle Red</b>
                          </td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7"></div>
                <div className="col-sm-5">
                  <div className="float-start mt-3 mt-sm-0">
                    <h4>
                      <b>Total Product:</b> <span className="float-end">3</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="d-print-none mt-4">
                <div className="d-flex flex-wrap gap-1 justify-content-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      window.print();
                    }}
                  >
                    <i className="ri-printer-line" /> Print
                  </Button>
                  <Button variant="info" className="btn btn-info">
                    Submit
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ManufactureUnit;
