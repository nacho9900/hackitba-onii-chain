import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { InvestOnCategoryItem } from "../../types";
import { InvestOnCategoryItemCard } from "./InvestOnCategoryItemCard";

const ITEM_1: InvestOnCategoryItem = {
  name: "Moda",
  imageUrl: "https://s1.significados.com/foto/outfit.jpg",
  profit: 13.3,
};

const ITEM_2: InvestOnCategoryItem = {
  name: "Arte y Multimedia",
  imageUrl:
    "https://arsgenerya.files.wordpress.com/2021/02/001.jpg?w=800&h=400&crop=1",
  profit: 2.1,
};

const ITEM_3: InvestOnCategoryItem = {
  name: "Streaming",
  imageUrl:
    "https://www.destreaming.es/wp-content/uploads/2021/03/mejor-setup-streaming-mundo.jpg",
  profit: 35.8,
};

const ITEM_4: InvestOnCategoryItem = {
  name: "Tecnologia",
  imageUrl: "https://miro.medium.com/max/1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg",
  profit: 9.5,
};

const ITEM_5: InvestOnCategoryItem = {
  name: "Artesanias",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Barro_Pintado_en_Margarita.jpg",
  profit: 6.69,
};

const ITEM_6: InvestOnCategoryItem = {
  name: "Deporte",
  imageUrl:
    "https://webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg",
  profit: 4.2,
};

const ITEMS = [ITEM_1, ITEM_2, ITEM_3, ITEM_4, ITEM_5, ITEM_6];

export const InvestOnCategories: FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="mb-5 text-white">
          <h1>Inverti en Categorias</h1>
        </Col>
      </Row>
      <Row>
        {ITEMS.map((item) => (
          <Col xs={4} className="mb-5">
            <InvestOnCategoryItemCard
              name={item.name}
              imageUrl={item.imageUrl}
              profit={item.profit}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
