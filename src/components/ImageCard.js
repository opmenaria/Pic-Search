import { Image } from "antd";
import React, { useEffect, useRef, useState } from "react";

function ImageCard({ image }) {
    const imgRef = useRef()
    const [span, setSpan] = useState(0)
    useEffect(() => {
        // setSpan(Math.ceil(imgRef.current.clientHeight / 10))
    }, [])
    return (
        <div
            // style={{ gridRowEnd: `span ${span}` }}
            style={{ height: 'auto', width: '10px' }}
        >
            <Image
                // height={auto}
                width={550}
                ref={imgRef}
                alt={image.description}
                src={image.urls.regular}
            /></div>
    )
}
export default ImageCard;
