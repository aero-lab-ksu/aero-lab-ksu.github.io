import React from 'react';
import Slider from 'react-slick';
import homeData from '../data/home.json';

export default function Home() {
  const { lab_name, tagline, intro, gallery_pics } = homeData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true
  };

  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/logo.png"
            alt="Lab Logo"
            className="h-20 w-20 object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">{lab_name}</h1>
        <h2 className="text-xl text-blue-600 mt-2">{tagline}</h2>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600">{intro}</p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {gallery_pics.map((pic, index) => (
            <div key={index} className="px-2">
              <img
                src={pic}
                alt={`Lab pic ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
