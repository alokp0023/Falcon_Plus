import React, { useState } from "react";
import { PageBreadcrumb } from "../../../components";
import { Button, Card, Col, Row } from "react-bootstrap";
import { employeeRecords } from "../../Dashboard/data";
import { Table } from "../../../components/table";
import CreateProduct from "./createProduct";

function ProductDetails() {
	const [open, setOpen] = useState(false);
	const columns = [
		{
			Header: 'ID',
			accessor: 'id',
			defaultCanSort: true,
		},
		{
			Header: 'Raw Material',
			accessor: 'name',
			defaultCanSort: true,
		},
		{
			Header: 'Quantity',
			accessor: 'age',
			defaultCanSort: true,
		},
		{
			Header: 'action',
			accessor: 'action',
			defaultCanSort: false,
		},
	]
	
	const sizePerPageList = [
		{
			text: '5',
			value: 5,
		},
		{
			text: '10',
			value: 10,
		},
		{
			text: '25',
			value: 25,
		},
		{
			text: 'All',
			value: employeeRecords.length,
		},
	]
	
  return (
    <div>
      <PageBreadcrumb title="Product details" subName="Product List" />
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Button className="float-end" onClick={()=>setOpen(true)}>Create New Product</Button>
            </Card.Header>
            <Card.Body>
              <Table
                columns={columns}
                data={employeeRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
	  <CreateProduct open={open} handleToggle={()=>setOpen(!open)} title={'Create Product'}/>
    </div>
  );
}

export default ProductDetails;
