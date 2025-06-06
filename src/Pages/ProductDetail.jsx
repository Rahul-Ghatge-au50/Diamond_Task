import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { SlEnvolopeLetter } from "react-icons/sl";
import image from '../assets/bracelet.jpg'
import brac1 from '../assets/brac1.jpg'
import brac2 from '../assets/brac2.jpg'
import brac3 from '../assets/brc3.jpg'


export default function ProductDetail() {

  const productData = {
      id: 'bracelet001',
      title: 'Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold',
      price: 3595,
      images: [
          brac3,brac1,image
      ],
      mainImage: '/images/azura-main.jpg',
      carats: [1, 2, 3, 4, 5, 7],
      selectedCarat: 1,
      sizes: ['6"', '6.5"', '7"', '7.5"'],
      selectedSize: '7"',
      metals: [
          { name: '18K Rose Gold', color: '#f4c2c2' },
          { name: '18K White Gold', color: '#f2f2f2' },
          { name: '18K Yellow Gold', color: '#fcebb2' },
      ],
      selectedMetal: '18K White Gold',
  };

  const [selectedCarat, setSelectedCarat] = useState(productData.carats[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[2]);
  const [selectedMetal, setSelectedMetal] = useState(productData.metals[0]);
  const [mainImage, setMainImage] = useState(productData.images[0]);

  return (
    <>
      <hr />
      <div className="flex flex-col md:flex-row gap-6 bg-[#e7e7e4] p-6 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
        <div className="flex md:flex-col gap-3">
          {productData.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumbnail"
              className="w-40 h-40 object-cover cursor-pointer border border-gray-300"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <img src={mainImage} alt={productData.title} className="w-full h-auto max-h-[450px] object-contain" />
          <FaRegHeart className="text-[#5D613E] text-xl cursor-pointer absolute top-18 right-6 font-extralight" />
        </div>
      </div>

      <div className="w-full md:w-1/3 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-[#5D613E] font-medium leading-snug text-lg">
            {productData.title}
          </h2>
        </div>

        <p className="text-3xl text-[#5D613E]">${productData.price.toLocaleString()}</p>

        <div>
          <p className="text-sm text-[#5D613E] mb-2">Total Carat Weight: {selectedCarat} ct. tw</p>
          <div className="flex flex-wrap gap-2">
            {productData.carats.map((carat) => (
              <button
                key={carat}
                className={`border px-3 py-1 cursor-pointer text-sm ${
                  selectedCarat === carat ? 'bg-[#5D613E] text-white' : 'bg-white text-[#5D613E]'
                }`}
                onClick={() => setSelectedCarat(carat)}
              >
                {carat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-[#5D613E] mb-2">Size: {selectedSize}"</p>
          <div className="flex flex-wrap gap-2">
            {productData.sizes.map((size) => (
              <button
                key={size}
                className={`border px-3 py-1 cursor-pointer text-sm ${
                  selectedSize === size ? 'bg-[#5D613E] text-white' : 'bg-white text-[#5D613E]'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}"
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-[#5D613E] mb-2">Metal: {selectedMetal.name}</p>
          <div className="flex gap-3">
            {productData.metals.map((metal, i) => (
              <span
                key={i}
                className={`w-6 h-6 rounded-full border border-gray-400 cursor-pointer ${
                  selectedMetal.color === metal.color ? 'ring-2 ring-[#5D613E]' : ''
                }`}
                style={{ backgroundColor: metal.color }}
                onClick={() => setSelectedMetal(metal)}
              ></span>
            ))}
          </div>
        </div>

        <button className="w-full cursor-pointer py-3 mt-4 bg-[#5D613E] text-white text-sm font-extralight tracking-widest">
          ADD TO BAG
        </button>
        <div className="flex justify-between " >
            <button className="bg-[#f5f4ef] cursor-pointer  text-sm py-2 px-9 border rounded-md text-[#5D613E] flex items-center gap-4" >
              <p>DROP A HINT</p> <span> <SlEnvolopeLetter/> </span> 
            </button>
            <button className="bg-[#f5f4ef] cursor-pointer  text-sm py-2 px-9 border rounded-md text-[#5D613E] flex items-center gap-4">
              <p>ADD TO WISHLIST</p><span><FaRegHeart/></span>
            </button>
        </div>
      </div>
    </div>
    </>
    
  );
}