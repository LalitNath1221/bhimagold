import React, { Component } from "react";
import whatsapp from "../assets/media/WhatsApp (2).png";
import logo from "../assets/media/logo.png";
import india from "../assets/media/india1.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="">
        <div id="contact-header" className="flex flex-row justify-between items-center bg-red-800 px-5">
          <div>
            <ul className="flex flex-row space-x-5 text-white text-sm font-sans">
              <li className="py-2 hidden sm:block">Gold Rate 24 KT (999) : ₹ 6,150.00/g</li>
              <li className="py-2 hidden md:block">Gold Rate 18 KT (750) : ₹ 4,609.00/g</li>
              <li className="py-2 hidden md:block">Silver Rate : ₹ 75.25/g</li>
              <li className="py-2 hidden md:block">Gold Rate 22 KT (916) : ₹ 5,609.00/g</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row">
              <li className="px-4 cursor-pointer">
                <img className="w-5" src={whatsapp} alt="" />
              </li>
              <li className="px-4 cursor-pointer">
                <span className="text-white material-symbols-outlined">
                  call
                </span>
              </li>
              <li className="px-4 cursor-pointer">
                <span className="text-white material-symbols-outlined">
                  mail
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between px-5 py-5">
            <ul className="flex flex-row justify-between">
              <li className="mx-2">
                <img className="w-40" src={logo} alt="" />
              </li>
              <li className="mx-2">
                <div className="flex flex-row border-[1px] border-red-500 px-2 justify-center items-center">
                  <div className="">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <div>
                    <input
                      className="text-black"
                      type="text"
                      name="searchText"
                      id=""
                    />
                  </div>
                </div>
              </li>
              <li className="mx-2 hidden lg:block">
                <a className="px-3 py-3 bg-gradient-to-r from-red-500 to-pink-400 transition ease-in-out hover:drop-shadow-xl text-black mx-2" href="#">
                  Gift Card
                </a>
                <a className="px-3 py-3 bg-gradient-to-r from-red-500 to-pink-400 transition ease-in-out hover:drop-shadow-xl text-black mx-2" href="#">
                  Bhima my choice
                </a>
              </li>
            </ul>
            <ul id="navbar_menu_2" className="flex-row justify-between hidden md:flex">
              <li className="px-3 py-2">
                <a className="cursor-pointer " href="#">
                  <span className="material-symbols-outlined">location_on</span>
                </a>
              </li>
              <li className="px-3 py-2">
                <a className="cursor-pointer " href="#">
                  <span className="material-symbols-outlined">person</span>
                </a>
              </li>
              <li className="px-3 py-2">
                <a className="cursor-pointer " href="#">
                  <span className="material-symbols-outlined">local_mall</span>
                </a>
              </li>
              <li className="px-3 py-2">
                <button>
                  <img className="w-7" src={india} alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div id="jwelCategory" className="fle-row hidden md:flex">
            <div className="flex felx-row">
                <ul className="flex flex-row">
                    <li className="category_btn">EARRINGS</li>
                    <li className="category_btn">BANGLES</li>
                    <li className="category_btn">CHAINS</li>
                    <li className="category_btn">RINGS</li>
                    <li className="category_btn">COINS & BARS</li>
                    <li className="category_btn hidden lg:block">ALL JEWELLERY</li>
                    <li className="category_btn hidden lg:block">COLLECTIONS</li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
