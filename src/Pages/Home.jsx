
import homeImg from '../assets/images.jpg';
import { IoIosArrowUp } from "react-icons/io";
import CategoryPage from "./CategoryPage";
import ListPage from './ListPage';


export default function Home() {

  return (
    <>

    <div className="relative" >
        <div
            className="relative h-[80vh] m-10 bg-cover bg-center rounded-3xl overflow-visible"
            style={{ backgroundImage: `url(${homeImg})` }}
        >
        {/* Text Block */}
            <div className="absolute left-6 top-1/3 sm:[left-4] sm:[top-1/4] text-white max-w-sm">
                <h2 className="text-3xl sm:text-xl italic font-semibold text-white">
                Featured collection
                </h2>
                <p className="mt-2 text-sm sm:[text-xs] sm:[max-w-[90%]]">
                Explore the exclusive pieces inspired <br className="hidden sm:block" />
                by the beauty of nature
                </p>
            </div>
        </div>

        {/* Scroll Up Button */}
        <div className="absolute bottom-[3px] left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full bg-[#e7e7e4] flex items-center justify-center">
            <div className="w-20 h-20 sm:[w-10] sm:[h-10] bg-[#5D613E] rounded-full flex items-center justify-center shadow-md">
                <IoIosArrowUp className="text-white text-8xl sm:[text-base] cursor-pointer" />
            </div>
        </div>
        
        <div className="h-5 sm:[h-14]" />    
    </div>
    
    <CategoryPage />
    </>
  );
}