import { Col, Container, Row } from "react-bootstrap";
import FilterList from "./FilterList";
import ProductList from "./ProductList";
import "./Search.scss";


export default function Search() {
  return (
    <div className="container" >
      <header className="header" style={{color: 'white'}}>
        <h1>Proyectos</h1>
      </header>
      <Container>
        <Row>
          <Col sm={2}>
            <FilterList />
          </Col>
          <Col> 
            <ProductList /> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}