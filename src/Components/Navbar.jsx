import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {

  const data = {
    RINGS: [
      {
        id:0,
        col1:"STYLE",
        colArr:['Solitaire Rings', 'Halo Rings', 'Three-Stone Rings', 'Minimalist Rings', 'Eternity Bands', 'Stackable Rings']
      },
      {
        id:1,
        col1:"OCCASION",
        colArr:[ "Engagement Rings", "Wedding Bands", "Promise Rings", "Anniversary Rings", "Cocktail Rings", "Daily Wear Rings", "Proposal Rings", "Graduation Rings"]
      },
      {
        id:2,
        col1:"METAL TYPE",
        colArr:["White Gold Rings", "Yellow Gold Rings", "Rose Gold Rings", "Platinum Rings", "Mixed Metal Rings"]
      },
      {
        id:3,
        col1:"SETTING TYPE",
        colArr:["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting", "Tension Setting" ]
      }
    ],
    BRACELETS: [
      {
        id:0,
        col1:"STYLE",
        colArr:['Solitaire Rings', 'Halo Rings', 'Three-Stone Rings', 'Minimalist Rings', 'Eternity Bands', 'Stackable Rings']
      },
      {
        id:1,
        col1:"OCCASION",
        colArr:[ "Engagement Rings", "Wedding Bands", "Promise Rings", "Anniversary Rings", "Cocktail Rings", "Daily Wear Rings", "Proposal Rings", "Graduation Rings"]
      },
      {
        id:2,
        col1:"METAL TYPE",
        colArr:["White Gold Rings", "Yellow Gold Rings", "Rose Gold Rings", "Platinum Rings", "Mixed Metal Rings"]
      },
      {
        id:3,
        col1:"SETTING TYPE",
        colArr:["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting", "Tension Setting" ]
      }
    ],
    NECKLACES: [
      {
        id:0,
        col1:"STYLE",
        colArr:['Solitaire Rings', 'Halo Rings', 'Three-Stone Rings', 'Minimalist Rings', 'Eternity Bands', 'Stackable Rings']
      },
      {
        id:1,
        col1:"OCCASION",
        colArr:[ "Engagement Rings", "Wedding Bands", "Promise Rings", "Anniversary Rings", "Cocktail Rings", "Daily Wear Rings", "Proposal Rings", "Graduation Rings"]
      },
      {
        id:2,
        col1:"METAL TYPE",
        colArr:["White Gold Rings", "Yellow Gold Rings", "Rose Gold Rings", "Platinum Rings", "Mixed Metal Rings"]
      },
      {
        id:3,
        col1:"SETTING TYPE",
        colArr:["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting", "Tension Setting" ]
      }
    ],
    EARRINGS: [
      {
        id:0,
        col1:"STYLE",
        colArr:['Solitaire Rings', 'Halo Rings', 'Three-Stone Rings', 'Minimalist Rings', 'Eternity Bands', 'Stackable Rings']
      },
      {
        id:1,
        col1:"OCCASION",
        colArr:[ "Engagement Rings", "Wedding Bands", "Promise Rings", "Anniversary Rings", "Cocktail Rings", "Daily Wear Rings", "Proposal Rings", "Graduation Rings"]
      },
      {
        id:2,
        col1:"METAL TYPE",
        colArr:["White Gold Rings", "Yellow Gold Rings", "Rose Gold Rings", "Platinum Rings", "Mixed Metal Rings"]
      },
      {
        id:3,
        col1:"SETTING TYPE",
        colArr:["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting", "Tension Setting" ]
      }
    ],
    CUSTOM: [
      {
        id:0,
        col1:"STYLE",
        colArr:['Solitaire Rings', 'Halo Rings', 'Three-Stone Rings', 'Minimalist Rings', 'Eternity Bands', 'Stackable Rings']
      },
      {
        id:1,
        col1:"OCCASION",
        colArr:[ "Engagement Rings", "Wedding Bands", "Promise Rings", "Anniversary Rings", "Cocktail Rings", "Daily Wear Rings", "Proposal Rings", "Graduation Rings"]
      },
      {
        id:2,
        col1:"METAL TYPE",
        colArr:["White Gold Rings", "Yellow Gold Rings", "Rose Gold Rings", "Platinum Rings", "Mixed Metal Rings"]
      },
      {
        id:3,
        col1:"SETTING TYPE",
        colArr:["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting", "Tension Setting" ]
      }
    ]
  };

  const cate = Object.keys(data);

  const [activeCategory, setActiveCategory] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (

    <nav className="w-full px-4">
      <div className="max-w-screen-xl mx-auto py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div><IoHomeOutline className="text-3xl sm:text-2xl cursor-pointer  text-[#5D613E]" onClick={() => navigate('/')}/></div>
        <div className="text-4xl sm:text-5xl font-extralight text-center text-[#5D613E]">DIAMOND FOREST</div>
        <div className="flex gap-5 sm:gap-6 items-center">
          <VscAccount className="text-2xl sm:text-3xl  text-[#5D613E]" />
          <FaRegHeart className="text-2xl sm:text-3xl  text-[#5D613E]" />
          <HiOutlineShoppingBag className="text-2xl sm:text-3xl  text-[#5D613E]" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-3xl text-[#5D613E]">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-4 relative">
        <div className="hidden md:flex justify-between items-center gap-4 relative">
          <div className="flex gap-20 text-lg font-medium relative z-50">
            {cate.map((catItem, indx) => (
              <div
                key={indx}
                className="relative"
                onMouseEnter={() => {
                  setActiveCategory(catItem);
                  setIsHovering(true);
                }}  
              >
                <p className="cursor-pointer text-[#5D613E]">{catItem}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-[#5D613E] px-3 py-1 rounded-full bg-[#5D613E] w-full max-w-[300px]">
            <IoSearchOutline className="text-white" />
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-transparent text-white placeholder-white outline-none w-full"
            />
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 mt-4 md:hidden">
            {cate.map((catItem, indx) => (
              <div key={indx}>
                <p
                  className="cursor-pointer text-[#5D613E] font-medium"
                  onClick={() =>
                    activeCategory === catItem ? setActiveCategory(null) : setActiveCategory(catItem)
                  }
                >
                  {catItem}
                </p>
                {activeCategory === catItem && (
                  <div className="bg-white mt-2 p-4 shadow rounded border border-[#5D613E]">
                    {data[catItem]?.map((item, index) => (
                      <div key={item.col1 || index} className="mb-4">
                        <h3 className="text-[#5D613E] font-semibold mb-2">{item.col1}</h3>
                        <ul className="space-y-1 text-sm text-[#5D613E]">
                          {item.colArr.map((value, ind) => (
                            <li key={ind} className="cursor-pointer">{value}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 border border-[#5D613E] px-3 py-1 rounded-full bg-[#5D613E] w-full max-w-full mt-2">
              <IoSearchOutline className="text-white" />
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-transparent text-white placeholder-white outline-none w-full"
              />
            </div>
          </div>
        )}

        {activeCategory && isHovering && (
          <div
            className="absolute top-full left-0 mt-2 bg-white shadow-lg p-8 rounded-xl w-full flex gap-10 border-t border-[#5D613E] z-40  md:flex"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {data[activeCategory]?.map((item, index) => (
              <div key={item.col1 || index}>
                <h3 className="text-[#5D613E] font-semibold mb-2">{item.col1}</h3>
                <ul className="space-y-1 text-sm text-[#5D613E]">
                  {item.colArr.map((value, ind) => (
                    <li key={ind} className="cursor-pointer">{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}