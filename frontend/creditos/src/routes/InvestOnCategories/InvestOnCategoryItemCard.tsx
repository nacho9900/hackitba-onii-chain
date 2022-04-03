import { Card } from "react-bootstrap";
import { FC } from "react";
import { InvestOnCategoryItem } from "../../types";

import "./InvestOnCategoryItemCard.scss";

export const InvestOnCategoryItemCard: FC<InvestOnCategoryItem> = ({
  name,
  imageUrl,
  profit,
}) => {
  return (
    <Card className="item-card">
      <Card.Img variant="top" src={imageUrl} className="item-image" />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Title className="item-profit text-center">
          {profit}% APY
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
