import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer
              content.
            </p>
          </Col>
          <Col md={6}>
            <h5 className=" mb-3 mb-md-0">Links</h5>
            <Row>
              <Col md={4} xs={12} >
                <ul className="list-unstyled">
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4} xs={12}>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4} xs={12}>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} Your Website</p>
      </div>
    </footer>
  );
};

export default Footer;



