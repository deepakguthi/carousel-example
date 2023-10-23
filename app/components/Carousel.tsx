'use client';
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

interface CustomCarouselProps {
    itemWidth: string;
    itemHeight: string;
  }
  

const items = [
  {
    src: "/a.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
    
  },
  {
    src: "/d.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "/c.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];
const CustomCarousel: React.FC<CustomCarouselProps> = ({ itemWidth, itemHeight }) => {
    const customItems = items.map((item) => ({
      ...item,
      style: {
        width: itemWidth,
        height: itemHeight,
        // Add a flexbox container to ensure that the images always fill the available space
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    }));
  
    return (
      <Row>
        <Col md="8" className="mx-auto">
          <UncontrolledCarousel items={customItems}/>
        </Col>
      </Row>
    );
  };
  
  export default CustomCarousel;