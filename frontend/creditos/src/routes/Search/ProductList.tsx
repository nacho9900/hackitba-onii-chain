import { ListGroup } from "react-bootstrap";
import { Project, ProjectType } from "src/types";
import ProductRow from "./ProductRow";

const items: Project[] = [
    {
      name: 'Hablalo',
      description: 'App',
      createdOn: new Date(),
      startOn: new Date(),
      invested: 0,
      earning: 0,
      category: 'technology',
      type: ProjectType.Service,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
    },
    {
      name: 'Hablalo2',
      description: 'App2',
      createdOn: new Date(),
      startOn: new Date(),
      invested: 0,
      earning: 0,
      category: 'technology',
      type: ProjectType.Service,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
    },
    {
        name: 'Hablalo2',
        description: 'App2',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
      },
      {
        name: 'Hablalo2',
        description: 'App2',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
      },
      {
        name: 'Hablalo2',
        description: 'App2',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
      }
  ];

const ProductList = () => {
    return (
        <ListGroup className="container main-content">
        { items.map( (item) => {
            return <ProductRow {...item}> </ProductRow>;
          })
        }
      </ListGroup>
      );
}

export default ProductList;