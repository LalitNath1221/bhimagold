import React, { Component } from "react";
import whatsapp from "../assets/media/WhatsApp (2).png";
import logo from "../assets/media/logo.png";
import india from "../assets/media/india1.png";

export default class Navbar extends Component {

  displayMenu(index){
    const menu = document.getElementsByClassName("main_menu_container");
    menu[index-1].classList.toggle('visible');
  }

  render() {
    return (
      <nav className="">
        <div id="contact-header" className="flex flex-row justify-between items-center bg-red-800 px-5">
          <div>
            <ul className="flex flex-row space-x-5 text-white text-xs sm:text-sm font-sans">
              <li className="py-2 block ">Gold Rate 24 KT (999) : ₹ 6,150.00/g</li>
              <li className="py-2 hidden md:block">Gold Rate 18 KT (750) : ₹ 4,609.00/g</li>
              <li className="py-2 hidden md:block">Silver Rate : ₹ 75.25/g</li>
              <li className="py-2 hidden md:block">Gold Rate 22 KT (916) : ₹ 5,609.00/g</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row">
              <li className="px-2 sm:px-4 cursor-pointer">
                <img className="w-5" src={whatsapp} alt="" />
              </li>
              <li className="px-2 sm:px-4 cursor-pointer">
                <span className="text-white material-symbols-outlined">
                  call
                </span>
              </li>
              <li className="px-2 sm:px-4 cursor-pointer">
                <span className="text-white material-symbols-outlined">
                  mail
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between px-5 py-5">
            <ul className="flex flex-row justify-between w-full md:w-auto items-center">
              <li className="mx-2">
                <img className="w-40" src={logo} alt="" />
              </li>
              <li className="mx-4">
                <div className="flex flex-row p-[5px] md:border-[1px] border-gray-400 md:w-[18rem] justify-center items-center">
                    <span className="material-symbols-outlined w-[20px] leading-[20px]">search</span>
                    <input
                      className="text-black w-full text-[18px] outline-none px-[5px] hidden md:block"
                      type="text"
                      name="searchText"
                      id=""
                    />
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
        <div id="jwelCategory" className="relative hidden md:flex">
            <div className="">
                <ul className="flex flex-row">
                    <li onMouseOver={()=>this.displayMenu(1)} onMouseLeave={()=>this.displayMenu(1)} className="category_btn">EARRINGS</li>
                    <li onMouseOver={()=>this.displayMenu(2)} onMouseLeave={()=>this.displayMenu(2)} className="category_btn">BANGLES</li>
                    <li onMouseOver={()=>this.displayMenu(3)} onMouseLeave={()=>this.displayMenu(3)} className="category_btn">CHAINS</li>
                    <li onMouseOver={()=>this.displayMenu(4)} onMouseLeave={()=>this.displayMenu(4)} className="category_btn">RINGS</li>
                    <li onMouseOver={()=>this.displayMenu(5)} onMouseLeave={()=>this.displayMenu(5)} className="category_btn">COINS & BARS</li>
                    <li onMouseOver={()=>this.displayMenu(6)} onMouseLeave={()=>this.displayMenu(6)} className="category_btn hidden lg:block">ALL JEWELLERY</li>
                    <li onMouseOver={()=>this.displayMenu(7)} onMouseLeave={()=>this.displayMenu(7)} className="category_btn hidden lg:block">COLLECTIONS</li>
                </ul>
                <ul id="category-menu-dropdown">
                  <li className="main_menu_container EARRINGS">
                    <ul>
                      <p>Shop by metal</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Gold</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Dimond</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Silver</a></li>
                    </ul>
                    <ul>
                      <p>Shop by purity</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 22KT</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 18KT</a></li>
                    </ul>
                    <ul>
                      <p>Shop by style</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Studs</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Chandbali</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> jhumka</a></li>
                    </ul>
                    <ul>
                      <p>Shop by gender</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Women</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Kids</a></li>
                    </ul>
                  </li>
                  <li className="main_menu_container">
                    <ul>
                      <p>Shop by metal</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Gold</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Dimond</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Silver</a></li>
                    </ul>
                    <ul>
                      <p>Shop by purity</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 22KT</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 18KT</a></li>
                    </ul>
                    <ul>
                      <p>Shop by style</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Kada</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Hollow</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Broad Bangles</a></li>
                    </ul>
                    <ul>
                      <p>Shop by gender</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Women</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Kids</a></li>
                    </ul>
                  </li>
                  <li className="main_menu_container">
                    <ul>
                      <p>Shop by metal</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Gold</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Dimond</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Silver</a></li>
                    </ul>
                    <ul>
                      <p>Shop by purity</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 22KT</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 18KT</a></li>
                    </ul>
                    <ul>
                      <p>Shop by style</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Hollow</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Hand made</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Machine made</a></li>
                    </ul>
                    <ul>
                      <p>Shop by gender</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Women</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Men</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Kids</a></li>
                    </ul>
                  </li>
                  <li className="main_menu_container">
                    <ul>
                      <p>Shop by metal</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Gold</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Dimond</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Silver</a></li>
                    </ul>
                    <ul>
                      <p>Shop by purity</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 22KT</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 18KT</a></li>
                    </ul>
                    <ul>
                      <p>Shop by style</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Cocktail</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Band ring</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Single Stone</a></li>
                    </ul>
                    <ul>
                      <p>Shop by gender</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Women</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Men</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Kids</a></li>
                    </ul>
                  </li>
                  <li className="main_menu_container COIN">
                    <ul>
                      <p>Gold Coin (22k)</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fcf309e60-c975-11ed-b595-af49aafb0b4b.png&w=32&q=75" alt="" /></span> Gold</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fcf309e60-c975-11ed-b595-af49aafb0b4b.png&w=32&q=75" alt="" /></span>Dimond</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fcf309e60-c975-11ed-b595-af49aafb0b4b.png&w=32&q=75" alt="" /></span>Silver</a></li>
                    </ul>
                    <ul>
                      <p>Shop by Design</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fcf309e60-c975-11ed-b595-af49aafb0b4b.png&w=32&q=75" alt="" /></span> 22KT</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fcf309e60-c975-11ed-b595-af49aafb0b4b.png&w=32&q=75" alt="" /></span> 18KT</a></li>
                    </ul>
                    <ul>
                      <p>gold bars (24k)</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Hollow</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Hand made</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Machine made</a></li>
                    </ul>
                    <ul>
                      <p>Sliver coins/Bars (999)</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Women</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Men</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Kids</a></li>
                    </ul>
                  </li>
                  <li className="main_menu_container">
                    <ul>
                      <p>Shop by metal</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Gold</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Dimond</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Silver</a></li>
                    </ul>
                    <ul>
                      <p>Shop by purity</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 22KT</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> 18KT</a></li>
                    </ul>
                    <ul>
                      <p>Shop by category</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Chains</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> pendents</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Neckwears</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Earings</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Sliver Articles</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Rings</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Bangles</a></li>
                    </ul>
                    <ul>
                      <p>Shop by gender</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Women</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Men</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Kids</a></li>
                    </ul>
                  </li>
                  <li className="main_menu_container">
                    <ul>
                      <p>Aradhana</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span>Neckless</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Bangles</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Earings</a></li>
                    </ul>
                    <ul>
                      <p>Sunshine</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Chains</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Bangles</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Earings</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Rings</a></li>
                    </ul>
                    <ul>
                      <p>samundra</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Bangles</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Earings</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Rings</a></li>
                    </ul>
                    <ul>
                      <p>y collection</p>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Neckless</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8c911fc0-c575-11ed-a64f-1397b220d277.png&w=32&q=75" alt="" /></span>Bangles</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6dc070d0-ca31-11ed-a86f-f9fc12f1d3bf.png&w=32&q=75" alt="" /></span>Earings</a></li>
                      <li><a href="./category-metal"><span><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd1e3e400-ca24-11ed-8b58-f33a71fa0958.png&w=32&q=75" alt="" /></span> Rings</a></li>
                    </ul>
                  </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
