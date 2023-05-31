import React from "react";

import "./Featured.scss";
import Card from "../Card/Card";

const Featured = ({ type }) => {
  const data = [
    {
      id: 1,
      title: "First Product",
      oldPrice: 19,
      price: 17,
      image:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      secondImage:
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Second Product",
      oldPrice: 19,
      price: 17,
      image:
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      secondImage:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "Third Product",
      oldPrice: 19,
      attributes: {
        isNew: true,
      },
      price: 17,
      image:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      secondImage:
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Third Product",
      oldPrice: 19,
      price: 17,
      image:
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} Product</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
