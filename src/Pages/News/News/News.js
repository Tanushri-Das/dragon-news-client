import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const News = () => {
  const news = useLoaderData();
  // console.log(news);
  const { title, author, image_url, _id, details, category_id } = news;
  return (
    // <div>
    //     {/* <h2>This is News</h2> */}
    //     {/* <h2>{news.title}</h2> */}
    // </div>
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in this Category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
