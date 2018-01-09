import React from 'react';

const WorkImage = ({ images, title }) => (
  <picture>
    {images.map((item, index) => {
      return (
        <source
          srcSet="https://s3.eu-west-2.amazonaws.com/2017.michael-smedley.co.uk/www/assets/img/365-desktop.png"
          media="(min-width: 64em)"
        />
      );
    })}
    <img src="https://s3.eu-west-2.amazonaws.com/2017.michael-smedley.co.uk/www/assets/img/365-mobile.png" />
  </picture>
);

export default WorkImage;
