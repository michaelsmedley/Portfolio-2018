import React from 'react';

let fallback = '';
const Picture = ({ images, title }) => {
  console.log(images);
  if (images) {
    const workImages = images.map((item, index) => {
      fallback = item.src;
      return (
        <source
          srcSet={item.src}
          media={`(min-width: ${item.size})`}
          key={index}
          alt={title}
        />
      );
    });
    return (
      <picture>
        {workImages}
        <img src={fallback} alt={title} />
      </picture>
    );
  }
  return null;
};

export default Picture;
