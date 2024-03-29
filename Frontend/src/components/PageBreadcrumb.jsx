import { Breadcrumb, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PageBreadcrumb = ({ subName, title, addedChild }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Falcon Plus</title>
      </Helmet>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <Link
                  to="/"
                  style={{ color: "#6C757D" }}
                  className="breadcrumb-item"
                >
                  Falcon Plus
                </Link>
                {subName && <Breadcrumb.Item>{subName}</Breadcrumb.Item>}
                <Breadcrumb.Item active>{title}</Breadcrumb.Item>
              </ol>
            </div>
            <h4 className="page-title">{title}</h4>
            {addedChild}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PageBreadcrumb;
