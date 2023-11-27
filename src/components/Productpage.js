import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Carousal from "./Carousal";

export default class Productpage extends Component {

  render() {
    return (
      <div className="product_page_container">
        <div class="flex flex-row flex-wrap md:flex-nowrap p-2 sm:p-5 md:p-10">
          <div className="w-full md:w-1/2">
            <Carousal/>
          </div>
          <div className="w-full md:w-1/2 p-10">
            <div className="flex flex-row flex-nowrap items-center ">
              <p className="text-3xl md:text-4xl lg:text-5xl">
                Golden Bead 22KT Gold Bangle For Kids
              </p>
              <span class="material-symbols-outlined">favorite</span>
            </div>
            <div className="">
              <div className="flex flex-row flex-nowrap justify-between py-2 border-b-[1px] border-gray-400">
                <p className="">Size</p>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
              <div className="flex flex-row flex-nowrap justify-between py-2 border-b-[1px] border-gray-400">
                <p className="">Quantity</p>
                <div className="flex flex-row flex-nowrap text-lg">
                  <p className="px-2 mx-2 ">+</p>
                  <p className="px-2 mx-2 ">0</p>
                  <p className="px-2 mx-2 ">-</p>
                </div>
              </div>
            </div>
            <div className="p-2 bg-gray-200 my-4">
              <p>Available option</p>
              <div className="flex flex-row py-4">
                <div className="flex flex-col items-center bg-white mx-2 border-[1px] border-gray-900">
                  <img
                    className="w-[40px]"
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F4e966290-d464-11ed-a560-65eb94f96dbd.jpg&w=256&q=75"
                    alt=""
                  />
                  <p className="text-sm text-gray-700">7.950</p>
                  <p className="text-lg font-mediums">&#8377; 50,622</p>
                  <p className="bg-gray-500 text-xs p-2">Ready to ship</p>
                </div>
                <div className="flex flex-col items-center bg-white mx-2 border-[1px] border-gray-900">
                  <img
                    className="w-[40px]"
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F4e966290-d464-11ed-a560-65eb94f96dbd.jpg&w=256&q=75"
                    alt=""
                  />
                  <p className="text-sm text-gray-700">7.950</p>
                  <p className="text-lg font-mediums">&#8377; 50,622</p>
                  <p className="bg-gray-500 text-xs p-2">Ready to ship</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold">
                &#8377; 50,622
                <s className="ml-2 text-gray-500">&#8377; 54, 597</s>
              </p>
              <p className="text-red-600">save &#8377; 3, 975</p>
            </div>
            <div className="my-4">
              <button className=" cursor-pointer w-full p-4 bg-gradient-to-r from-red-400 to-pink-300">
                <p className="text-xl uppercase text-center">
                  <span class="text-[25px] material-symbols-outlined">
                    local_mall
                  </span>
                  add to card
                </p>
              </button>
            </div>
            <div>
              <div className="flex flex-row justify-between border-b-[1px] border-gray-400 py-2">
                <p className="text-lg">Check Delivery</p>
                <p className="text-lg text-gray-400">
                  Enter Pincode{" "}
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </p>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div>
                  <p className="text-lg">Free Delivery</p>
                  <p className="text-sm">
                    Shop with ease, we deliver for free!
                  </p>
                </div>
                <div>
                  <p className="text-lg">Our return policy</p>
                  <p className="text-sm">Love it or return it - hassle-free!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 grid-rows-1 gap-4 p-10">
          <div>
            <p className="text-xl my-2">Product Description</p>
            <p className="text-lg my-2">
              Our exquisite adjustable gold bracelet with three layers of gold
              beads in the front!The adjustable design ensures a comfortable and
              secure fit for any wrist size, while the three layers of gold
              beads in the front add a unique and eye-catching element that is
              sure to turn heads.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 grid-rows-2  md:grid-cols-2 md:grid-rows-1 gap-4 p-10">
          <div className="order-2 md:order-1">
            <p className="text-xl font-medium my-4">Product Details</p>
            <p className="text-lg">
              <b>SKU :</b>1234566
            </p>
            <div className="flex flex-row flex-nowrap">
              <ul className="">
                <li className="my-2">
                  <b>Gross weight: </b>7.950 g
                </li>
                <li className="my-2">
                  <b>Metal weight: </b>7.950 g
                </li>
                <li className="my-2">
                  <b>Certification: </b>BIS HALLMARK 916
                </li>
              </ul>
              <ul className="pl-8">
                <li className="my-2">
                  <b>Width :</b> 49 mm
                </li>
                <li className="my-2">
                  <b>Thickness : </b>3mm
                </li>
                <li className="my-2">
                  <b>Height: </b>50mm
                </li>
                <li className="my-2">
                  <b>Size: </b>Open
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex flex-row items-center px-10 py-5 bg-gray-200">
              <div className="w-[70px] aspect-[1/1]">
                <img
                  src="https://www.bhimagold.com/images/call_outline.svg"
                  alt=""
                />
              </div>
              <div className="mx-5">
                <p className="text-3xl font-medium">Need help?</p>
                <p className="text-lg py-2">
                  Call or Whatsapp us at the below number.
                </p>
                <p className="text-lg text-red-500">
                  <span>
                    <img
                      className="inline-block"
                      src="https://www.bhimagold.com/images/whatsapp.svg"
                      alt=""
                    />
                  </span>
                  +91 8884616916
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 grid-rows-2  md:grid-cols-2 md:grid-rows-1 gap-4 p-10">
          <div>
            <div className="py-4 border-b-[1px] border-gray-400">
              <p className="text-xl font-medium my-4">Metal Details</p>
              <table className="w-full">
                <tr className="grid grid-cols-4 my-4">
                  <td className="text-sm md:text-lg">
                    <b>Component</b>
                  </td>
                  <td className="text-sm md:text-lg">
                    <b>Rate</b>
                  </td>
                  <td className="text-sm md:text-lg">
                    <b>Weight</b>
                  </td>
                  <td className="text-sm md:text-lg text-end">
                    <b>Value</b>
                  </td>
                </tr>
                <tr className="grid grid-cols-4 my-4">
                  <td className="text-sm md:text-lg">Gold 22 KT</td>
                  <td className="text-sm md:text-lg">5499</td>
                  <td className="text-sm md:text-lg">8.090 g</td>
                  <td className="text-sm md:text-lg text-end">₹ 44,486.91</td>
                </tr>
                <tr className="grid grid-cols-4 my-4">
                  <td className="text-sm md:text-lg">Making Charges</td>
                  <td className="text-sm md:text-lg">-</td>
                  <td className="text-sm md:text-lg">-</td>
                  <td className="text-sm md:text-lg text-end">₹9,453.47</td>
                </tr>
              </table>
            </div>
            <div className="flex flex-row justify-between">
              <ul>
                <li className="text-sm md:text-lg my-2">
                  <b>Subtotal</b>
                </li>
                <li className="text-sm md:text-lg my-2">
                  <b>GST</b>
                </li>
                <li className="text-sm md:text-lg my-2">
                  <b>Product Total</b>
                </li>
                <li className="text-sm md:text-lg my-2">
                  <b>Grand Total</b>
                </li>
              </ul>
              <ul>
                <li className="text-sm md:text-lg my-2 text-end">
                  ₹ 53,940.38
                </li>
                <li className="text-sm md:text-lg my-2 text-end">₹ 1,618.22</li>
                <li className="text-sm md:text-lg my-2 text-end">
                  ₹ 55,559.00
                </li>
                <li className="text-sm md:text-lg my-2 text-end">
                  ₹ 55,559.00
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[180px] md:w-[230px]"
              src="https://www.bhimagold.com/images/box.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:p-5 lg:p-10">
            <div className="w-full lg:w-1/2">
              <p className="text-2xl sm:text-4xl lg:text-5xl">Certifications</p>
              <div className="flex flex-row flex-wrap md:flex-nowrap py-10">
                <div className="p-5 flex flex-row flex-nowrap justify-center items-center">
                  <img
                    className="w-[60px]"
                    src="https://www.bhimagold.com/images/bis.svg"
                    alt=""
                  />
                  <p className="text-base ml-5">BIS Hallmarked</p>
                </div>
                <div className="p-5 flex flex-row flex-nowrap justify-center items-center">
                  <img
                    className="w-[60px]"
                    src="https://www.bhimagold.com/images/bis.svg"
                    alt=""
                  />
                  <p className="text-base ml-5">BIS Hallmarked</p>
                </div>
                <div className="p-5 flex flex-row flex-nowrap justify-center items-center">
                  <img
                    className="w-[60px]"
                    src="https://www.bhimagold.com/images/bis.svg"
                    alt=""
                  />
                  <p className="text-base ml-5">BIS Hallmarked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container_slider p-2 sm:p-5 md:pg-10">
          <p className="text-2xl sm:text-4xl lg:text-5xl">Certifications</p>
          <div className="collection_scrollbar md:flex md:flex-row md:flex-wrap md:justify-evenly w-full py-10">
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container_slider p-2 sm:p-5 md:pg-10">
          <p className="text-2xl sm:text-4xl lg:text-5xl">Certifications</p>
          <div className="collection_scrollbar md:flex md:flex-row md:flex-wrap md:justify-evenly w-full py-10">
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
            <div className="w-[260px] md:w-[300px]">
              <div className="border-[1px] border-gray-400">
                <img
                  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb4c54560-e90c-11ed-8f15-176c9ae50cf3.jpg&w=512&q=75"
                  alt=""
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-between mt-4">
                <p className="text-base font-medium">
                  Golden Bloom 22KT Gold Bangl
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-end">₹ 56,375</p>
                  <p className="text-base font-bold">₹ 52,245</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
