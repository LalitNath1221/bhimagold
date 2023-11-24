import React, { Component } from "react";
import logo from "../assets/media/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="main_footer footer">
        <div className="flex flex-row flex-wrap lg:flex-nowrap">
          <div className="footer_left  w-full lg:w-2/3">
            <div className="flex flex-row">
              <div className="px-2 md:px-5 lg:px-10">
                <p className="text-lg font-medium">About us</p>
                <ul>
                  <li>Our Legacy</li>
                  <li>Our Stores</li>
                  <li>CSR Activities</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div className="px-2 md:px-5 lg:px-10">
                <p className="text-lg font-medium">Policies</p>
                <ul>
                  <li>Returns & Refunds</li>
                  <li>Terms & Conditions</li>
                  <li>Shipping Policy</li>
                  <li>Cancellation Policy</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="px-2 md:px-5 lg:px-10">
                <p className="text-lg font-medium">Usefull links</p>
                <ul>
                  <li>Book Appointment</li>
                  <li>FAQs</li>
                  <li>Bhima Anniversary</li>
                  <li>Golden Key</li>
                  <li>Try On Products</li>
                  <li>Feedback</li>
                  <li>Size Guide for Rings</li>
                  <li>Size Guide for Bangles</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-center lg:justify-end py-5">
              <a
                className="px-3 py-3 bg-gradient-to-r from-red-500 to-pink-400 transition ease-in-out hover:drop-shadow-xl text-black mx-4"
                href="#"
              >
                Gift Card
              </a>
              <a
                className="px-3 py-3 bg-gradient-to-r from-red-500 to-pink-400 transition ease-in-out hover:drop-shadow-xl text-black mx-4"
                href="#"
              >
                Bhima my choice
              </a>
            </div>
          </div>
          <div className="right_footer w-full lg:w-2/3">
            <div className="px-10">
              <p className="text-lg font-medium">Contact us</p>
              <ul>
                <li className="text-2xl">Bhima Gold Private Limited</li>
                <li>
                  (Formerly known as BHIMA JEWELLERS), Bhima House, #423, 4th
                  Block, 8th Main, Koramangala, Bengaluru, Karnataka, India,
                  560034
                </li>
                <li className="font-medium flex flex-row justify-left items-center">
                  <span className="material-symbols-outlined">call</span>
                  1800-121-9076 (Toll Free) 10AM-7PM IST
                </li>
                <li className="font-medium flex flex-row justify-left items-center">
                  <span className="material-symbols-outlined">mail</span>
                  support@bhimagold.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-4 flex flex-row justify-between flex-wrap md:flex-nowrap">
          <ul className="flex flex-row justify-left">
            <li className="mx-2">
              <img className="w-40" src={logo} alt="" />
            </li>
            <li className="mx-2">
              <p>Copyright © 2023 | Bhima Gold</p>
              <p>2.0.48</p>
            </li>
          </ul>
          <div className="flex flex-row items-center">
            <img className="w-[30px] h-[20px] mx-3" src="https://www.bhimagold.com/images/visa.png" alt="" />
            <img className="w-[30px] h-[20px] mx-3" src="https://www.bhimagold.com/images/master.png" alt="" />
            <img className="w-[30px] h-[20px] mx-3" src="https://www.bhimagold.com/images/badge_light.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
