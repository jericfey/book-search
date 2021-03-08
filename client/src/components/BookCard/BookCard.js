import React from "react";
import {Card, CardTitle, CardText, CardMenu} from "react-mdl";

const BookCard = ({image, title, authors, description}) => {
  return (
    <Card
      shadow={0}
      style={{ width: "320px", height: "320px", margin: "auto" }}
    >
      <CardTitle expand ></CardTitle>
      <CardText>{title}</CardText>
      <CardText>{authors}</CardText>
      <CardText>{description}</CardText>
      <CardMenu></CardMenu>
      
    </Card>
  );
};

export default BookCard;
