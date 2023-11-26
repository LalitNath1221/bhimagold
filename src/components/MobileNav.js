import React, { Component } from "react";

export default class MobileNav extends Component {
  render() {
    return (
      <nav className="mobile_navbar sticky bottom-0 bg-white border-t-[1px] rounded-t-md md:hidden">
        <div className="flex flex-row w-screen justify-around p-5">
          <div>
            <a className="cursor-pointer" href="./">
              <span className="text-[28px] material-symbols-outlined">home</span>
            </a>
          </div>
          <div>
            <button className="cursor-pointer">
              <span className="text-[28px] material-symbols-outlined">grid_view</span>
            </button>
          </div>
          <div>
            <a className="cursor-pointer" href="">
              <span className="text-[28px] material-symbols-outlined">local_mall</span>
            </a>
          </div>
          <div>
            <button className="cursor-pointer">
              <span className="text-[28px] material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
        <div className="relative hidden">
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
