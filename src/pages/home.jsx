import React from 'react';
import CategoryCardHome from '../components/categories/categoriesItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home = () => {
  return (
    <>
      <div>
        <Carousel
          className="carousel"
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepgae-banner-copy.jpg?format=webp&w=1500&dpr=1.3" />
          </div>
          <div>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner_1_q2b02ee.jpg?format=webp&w=1500&dpr=1.3" />
          </div>
          <div>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner_2_8TocGvy.jpg?format=webp&w=1500&dpr=1.3" />
          </div>
          <div>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_1_copy_lac0huT.jpg?format=webp&w=1500&dpr=1.3" />
          </div>
          <div>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Printed_t-shirts_Homepage_Banner_1.jpg?format=webp&w=1500&dpr=1.3" />
          </div>
        </Carousel>
      </div>
      <CategoryCardHome />
    </>
  );
};

export default Home;
