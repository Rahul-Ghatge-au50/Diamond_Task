import { useNavigate } from "react-router-dom";


export function CategoryCard({item}) {

  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-[45%] md:w-[22%] max-w-80 h-96 rounded-2xl bg-[#e7e7e4] p-4">
      <img
        src={item.image}
        alt="Card"
        className="w-full h-85 object-cover rounded-lg"
      />
      <div className="mt-4">
        <button onClick={() => navigate(`/list/${item.category}`)} className="mt-4 px-4 bg-[#5D613E] w-full text-white font-extralight text-2xl sm:text-xl rounded cursor-pointer">
          {item.category}
        </button>
      </div>
    </div>
  );
}