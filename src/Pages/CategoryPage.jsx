import { CategoryCard } from "../Components/CategoryCard";
import BraceletImg from '../assets/bracelet.jpg';
import { IoIosArrowForward } from "react-icons/io";

export default function CategoryPage() {

    let data = [
        {
            image:BraceletImg,
            category:"BRACELETS"
        },
        {
            image:BraceletImg,
            category:"EARRINGS"
        },
        {
            image:BraceletImg,
            category:"RINGS"
        },
        {
            image:BraceletImg,
            category:"NECKLACES"
        }
    ]

  return (
    <>
        <div className="p-6 text-center">
            <p className="text-5xl sm:[text-4xl] md:text-5xl mb-6 text-[#5D613E] font-extralight">SHOP BY CATEGORY</p>
            <div className="flex flex-wrap justify-center gap-6 sm:[gap-8] md:[gap-10]" >
                {
                    data.map((item, index) => (
                        <CategoryCard key={index} item={item} />
                    ))
                }
            </div>
        </div>

        <div className="relative" >
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 rounded-xl gap-8">
                <div className="relative rounded-3xl overflow-visible w-full md:w-[45%]">
                    <img
                    src={BraceletImg}
                    alt="Custom Design"
                    className="w-full h-auto object-cover rounded-3xl"
                    />

                    <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 w-20 h-20 rounded-full bg-[#e7e7e4] flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#5D613E] rounded-full flex items-center justify-center shadow-md">
                            <IoIosArrowForward className="text-white text-3xl sm:[text-base] cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%] text-center">
                    <h2 className="text-5xl font-light text-[#5D613E] mb-10">DESIGN YOUR OWN</h2>
                    <p className="text-[#5D613E] text-base mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
                    From selecting your perfect lab-grown diamond to choosing the setting, metal, and personal touches, our custom design process brings your vision to life with expert craftsmanship and effortless guidance every step of the way.
                    </p>
                    <button className="bg-[#5D613E] text-white px-6 rounded-md transition text-2xl font-extralight cursor-pointer">
                    START YOUR CUSTOM DESIGN
                    </button>
                </div>
            </div>
        </div>
    </>
  );
}