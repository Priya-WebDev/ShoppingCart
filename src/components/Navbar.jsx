import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { ShopContext } from "../context/Shop-Context";

function Navbar() {
    const { state } = useContext(ShopContext);
    
    // Check if state is undefined or an empty array before accessing its length
    const cartItemCount = state ? state.length : 0;

    return (
        <div className=" p-2 w-full  bg-gray-900 flex justify-between sticky   text-white top-0">
         
            <Link className="pl-5 text-2xl" to="/">
              Home
            </Link>
         
            <Link className=" text-2xl" to="/contact">
              Contact
            </Link>
            <Link className=" text-2xl pr-4" to="/cart">
              {/* <div className="relative">
                <ShoppingCart size={40} />
                <div className="absolute h-6 w-6 rounded-full bg-red-600 -right-2 -top-2 ">
                  {state.length === 0 ? (
                    <p></p>
                  ) : (
                    <p className="text-center  font-bold p-.5 text-sm">
                      {state.length}
                    </p>
                  )}
                </div>
              </div> */}
              <div className="flex relative">
                <BsCart3 className="  w-8 h-8" />
                <div className="absolute h-5 w-5 rounded-full bg-red-600 -right-2 -top-2">
                  
                  
                {cartItemCount === 0 ? (
                            <p></p>
                        ) : (
                            <p className="text-center font-bold p-.5 text-sm">
                                {cartItemCount}
                            </p>
                        )}
                  
{/*                   
                  {state.length === 0 ? (
                    <p></p>
                  ) : (
                    <p className="text-center  font-bold p-.5 text-sm">
                      {state.length}
                    </p>
                  )} */}
                </div>
              </div>
            </Link>
          </div>
       
      );
}

export default Navbar

