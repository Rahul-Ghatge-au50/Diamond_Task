
// import { useState } from 'react';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { BiFilter } from 'react-icons/bi';
import BraceletCard from '../Components/BraceletCard';
import img from '../assets/bracelet.jpg';
import brac2 from '../assets/brac2.jpg';
import brac1 from '../assets/brac1.jpg';
import { useParams } from 'react-router-dom';

const ListPage = () => {

    const {id} = useParams();

    const braceletData = [
    {
      image: img,
      title: 'Round Lab Diamond Tennis Bracelet (3 ct. tw.)',
      colors: ['#FAD6D6', '#F0E7C3', '#F6F4E4'],
      mostLoved: true,
      price:2300
    },
    {
      image: brac1,
      title: 'Round Lab Diamond Tennis Bracelet (2 ct. tw.)',
      colors: ['#FAD6D6', '#F0E7C3', '#F6F4E4'],
      bestSeller: true,
      price:2300
    },
    {
      image: brac2,
      title: 'Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)',
      colors: ['#E0DFDC'],
      price:2300
    },
    {
      image: brac1,
      title: 'Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)',
      colors: ['#F0E7C3'],
      price:2300
    },
  ];

  return (

    <div className='relative' >
        <hr />
        <div className="px-10 py-8">
        <h1 className="text-4xl sm:text-5xl font-extralight text-[#5D613E] mb-6">{id}</h1>
        <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-2 border px-4 py-2 text-[#5D613E] text-sm">
            <BiFilter className="text-lg" /> FILTER
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 text-[#5D613E] text-sm">
            <FaSortAmountDownAlt className="text-lg" /> SORT
            </button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {braceletData.map((item, index) => (
            <BraceletCard key={index} item={item} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default ListPage
