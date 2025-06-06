
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BraceletCard = ({item}) => {

    const navigate = useNavigate();

  return (
    <> 
        <div className="w-full sm:w-[48%] md:w-[23%] flex flex-col items-center cursor-pointer justify-between" onClick={() => navigate('/product')}>

            <div className="bg-white p-2 h-80 relative shadow hover:shadow-lg w-full">
                {item.mostLoved && (
                <span className="absolute top-2 left-2 text-[10px] bg-[#5D613E] text-white px-2 py-[2px] rounded">
                    MOST LOVED
                </span>
                )}
                {item.bestSeller && (
                <span className="absolute top-2 left-2 text-[10px] bg-[#5D613E] text-white px-2 py-[2px] rounded">
                    BEST SELLER
                </span>
                )}
                <FaRegHeart className="absolute top-2 right-2 text-lg text-[#5D613E] cursor-pointer" />
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mt-6"
                />
            </div>

            <div className="bg-[#e7e7e4] w-full flex flex-col items-center pt-4 pb-2">
                <div className="flex justify-center gap-2 mb-2 cursor-pointer">
                {item.colors.map((color, i) => (
                    <span
                        key={i}
                        className="w-5 h-5 rounded-full border border-gray-400"
                        style={{ backgroundColor: color }}
                    ></span>
                ))}
                </div>
                <p className="text-center text-lg font-medium text-[#5D613E] px-2 leading-tight">
                    {item.title}
                </p>
                <p className="text-center text-lg text-[#5D613E] font-extralight mt-1">
                    ${item.price}
                </p>
            </div>
        </div>
    </>
  )
}

export default BraceletCard
