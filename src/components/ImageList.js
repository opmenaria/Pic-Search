import React from "react";
import './ImageList.css'
import ImageCard from "./ImageCard";
import { List } from "antd";

const ImageList = ({ images }) => {
    const imges = images.map((image, i) => {
        return <ImageCard key={i} image={image} />;
    });
    console.log(imges)
    // return <div className="image-list" >{imges}</div>
    return <List

        grid={{ gutter: 26, column: 2 }}
        dataSource={images}
        renderItem={(item) => (
            <List.Item>
                {images.map((image, i) => {
                    return <ImageCard key={i} image={image} />;
                })}
            </List.Item>
        )}
    />
}

export default ImageList;  