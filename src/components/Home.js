import React, { Component } from "react";
import Carousal2 from "./Carousal2";
import image4 from "../assets/media/image4.png";
import image5 from "../assets/media/image5.png";
import image6 from "../assets/media/image6.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousal2 />
        <div className="">
          <div className="container1 lg:container lg:mx-auto flex flex-col md:flex-row py-10">
            <div className="text_part px-10">
              <p className="heading1 font-serif py-2 sm:text-3xl lg:text-5xl font-medium">
                Choose what fits your style from our exquisite collections
              </p>
              <p className="text1 text-lg px-5 py-3">
                Blending tradition with modernity. We set the standard for the
                ultimate in Diamond Jewellery.
              </p>
              <a
                href="./gwgagjhdgfy"
                className="cursor-pointer inline-block mx-5 p-4  uppercase border-b-4 border-b-red-400 border-b-white hover:border-b-red-600"
              >
                View Collection
                <span className="mx-2 material-symbols-outlined">
                  north_east
                </span>
              </a>
            </div>
            <div className="gallry_part">
              <ul className="gallry1">
                <li className="img1">
                  <img src={image4} alt="" />
                </li>
                <li className="img2">
                  <img src={image5} alt="" />
                </li>
                <li className="img3">
                  <img src={image6} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="container2 py-5">
            <div>
              <p className="heading1 text-5xl px-3">Shop By Category</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center py-12">
              <div className="category_card w-56 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6ec841b0-ddaa-11ed-9ffd-a59b95d88e3f.jpeg&w=512&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Bangles</p>
                </div>
              </div>
              <div className="category_card w-56 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F6028d160-ddaa-11ed-9ffd-a59b95d88e3f.jpeg&w=512&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Chains</p>
                </div>
              </div>
              <div className="category_card w-56 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F663e2140-ddaa-11ed-9ffd-a59b95d88e3f.jpeg&w=512&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Earrings</p>
                </div>
              </div>
              <div className="category_card w-56 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F44e04280-ddaa-11ed-9ffd-a59b95d88e3f.jpeg&w=512&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Neckwears</p>
                </div>
              </div>
              <div className="category_card w-56 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F4dcbe3e0-ddaa-11ed-9ffd-a59b95d88e3f.jpeg&w=512&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Pendants</p>
                </div>
              </div>
              <div className="category_card w-56 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F56955740-ddaa-11ed-9ffd-a59b95d88e3f.jpeg&w=512&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Rings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container_collection">
            <div>
              <p className="heading1 text-5xl px-3">
                Indulge in our Exquisite Collections
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center py-12">
              <div className="collection_card">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fd0bdad90-ac56-11ed-be31-5bb5d11d30d5.jpeg&w=1200&q=75"
                    alt=""
                  />
                </div>
                <div className="text text-white text-2xl py-2">
                  <a
                    href="./gwgagjhdgfy"
                    className="cursor-pointer inline-block mx-3 px-2 uppercase "
                  >
                    Aradhana
                    <span className="mx-2 material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                  <p className="text-white mx-3 px-2">
                    Inspired by our tradition
                  </p>
                </div>
              </div>
              <div className="collection_card">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fdf82a740-ac56-11ed-be31-5bb5d11d30d5.jpeg&w=1200&q=75"
                    alt=""
                  />
                </div>
                <div className="text text-white text-2xl py-2">
                  <a
                    href="./gwgagjhdgfy"
                    className="cursor-pointer inline-block mx-3 px-2 uppercase "
                  >
                    Sunshine
                    <span className="mx-2 material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                  <p className="text-white mx-3 px-2">
                    A special craft made to last over time
                  </p>
                </div>
              </div>
              <div className="collection_card">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fde39e6f0-fed1-11ed-ae4c-0527742d8275.jpeg&w=1200&q=75"
                    alt=""
                  />
                </div>
                <div className="text text-white text-2xl py-2">
                  <a
                    href="./gwgagjhdgfy"
                    className="cursor-pointer inline-block mx-3 px-2 uppercase "
                  >
                    Afreen
                    <span className="mx-2 material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                  <p className="text-white mx-3 px-2">
                    Intricate handcrafted designs
                  </p>
                </div>
              </div>
              <div className="collection_card">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F10cc1da0-c6eb-11ed-8dba-793eaa79d659.jpeg&w=1200&q=75"
                    alt=""
                  />
                </div>
                <div className="text text-white text-2xl py-2">
                  <a
                    href="./gwgagjhdgfy"
                    className="cursor-pointer inline-block mx-3 px-2 uppercase "
                  >
                    Silver Jewellery
                    <span className="mx-2 material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                  <p className="text-white mx-3 px-2">
                    Stunning designs to compliment you
                  </p>
                </div>
              </div>
              <div className="collection_card">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F5981b890-ed9f-11ed-860c-edd8d4ddeb9f.jpeg&w=1200&q=75"
                    alt=""
                  />
                </div>
                <div className="text text-white text-2xl py-2">
                  <a
                    href="./gwgagjhdgfy"
                    className="cursor-pointer inline-block mx-3 px-2 uppercase "
                  >
                    Kerala collection
                    <span className="mx-2 material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                  <p className="text-white mx-3 px-2">
                    Embody Traditional Elegance
                  </p>
                </div>
              </div>
              <div className="collection_card">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F0049e390-c6eb-11ed-8dba-793eaa79d659.jpeg&w=1200&q=75"
                    alt=""
                  />
                </div>
                <div className="text text-white text-2xl py-2">
                  <a
                    href="./gwgagjhdgfy"
                    className="cursor-pointer inline-block mx-3 px-2 uppercase "
                  >
                    Samudra
                    <span className="mx-2 material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                  <p className="text-white mx-3 px-2">
                    For flair, glitz or personal touch
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-7 lg:grid-cols-8 lg:grid-rows-5 gap-4">
              <div className="col-span-2 row-span-2 lg:col-span-3 lg:row-span-5"><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F11b57880-e4c1-11ed-b3c7-2337e3548d00.jpeg&w=1200&q=75" alt="" /></div>
              <div className="row-start-3 lg:col-span-2 lg:row-span-2 lg:col-start-4"><img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F8e332f10-e4c6-11ed-9312-5f0c60a587e7.png&w=1200&q=75" alt="" /></div>
              <div className="col-span-2 row-span-2 row-start-4 lg:col-span-2 lg:col-start-4 lg:row-start-3">
              <div className="text py-2">
              <p className="text-black my-3 px-2 text-3xl lg:text-4xl xl:text-5xl">
                    Y Collection
                  </p>
                  <a
                    href="./gwgagjhdgfy"
                    className="cursor-pointer inline-block text-xl lg:text-2xl xl:text-3xl mx-3 px-2 uppercase border-b-4 border-b-red-400 hover:drop-shadow-xl"
                  >
                    explore more
                    <span className="mx-2 material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                </div>
              </div>
              <div className="row-start-3 lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-4">
                <img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F1a8e9160-e4c3-11ed-b3c7-2337e3548d00.jpeg&w=1200&q=75" alt="" />
              </div>
              <div className="col-span-2 row-span-2 row-start-6 lg:col-span-3 lg:row-span-5 lg:col-start-6 lg:row-start-1">
                <img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fc42e40a0-e4c1-11ed-b3c7-2337e3548d00.jpeg&w=1200&q=75" alt="" />
              </div>
            </div>
          </div>
          <div className="container_gender">
          <div>
              <p className="heading1 text-5xl px-3">
              Shop By Gender
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center py-12">
            <div className="category_card sm:w-40 md:w-80 lg:w-96 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb6d8b100-d450-11ed-8126-d10bf5c76bdf.jpeg&w=1200&q=75" alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Women</p>
                </div>
              </div>
              <div className="category_card sm:w-40 md:w-80 lg:w-96 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F7705b100-d44f-11ed-8126-d10bf5c76bdf.jpeg&w=1200&q=75" alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Men</p>
                </div>
              </div>
              <div className="category_card sm:w-40 md:w-80 lg:w-96 cursor-pointer">
                <div className="image">
                  <img
                    src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F7d20cd40-d44f-11ed-8126-d10bf5c76bdf.jpeg&w=1200&q=75" alt=""
                  />
                </div>
                <div>
                  <p className="text-center text-2xl py-2">Kids</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container3 py-8">
            <div className="px-5">
                <div className="flex flex-row px-10 items-center" >
                    <div className="w-3/5 h-fit">
                        <div className="pl-5">
                            <p className="headin1 text-3xl md:text-4xl lg:text-6xl py-4">Bhima My Choice</p>
                            <p className="text-gray-700 text-2xl md:text-3xl lg:text-4xl py-4">Join our EMA Jewellery Purchase Plan and avail exciting benefits</p>
                            <p className="text-2xl md:text-3xl lg:text-3xl mx-3 py-2"><a className="transition ease-in-out border-2 border-red-500 bg-red-500 text-white font-serif p-3 hover:bg-red-50 hover:border-red-400 hover:text-red-400" href="./dhdhd">Explore</a></p>
                        </div>
                    </div>
                    <div className="w-2/5">
                        <img src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2Fb62b3630-ac80-11ed-b8da-916bf183d134.png&w=1200&q=75" alt="" />
                    </div>
                </div>
            </div>
          </div>
          <div className="container_trust py-16">
          <div>
              <p className="heading1 font-medium text-center text-5xl px-3">
              Bhima's Trust
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center py-10">
                <div className="trust_card flex flex-col justify-center items-center m-1">
                    <div className="w-20">
                        <img  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F9d20adf0-203a-11ed-bf3f-cb401eafe67a.png&w=128&q=75" alt="" />
                    </div>
                    <p className="text-xl font-semibold text-center mx-3 py-2">BIS 916 Hallmarked Products</p>
                    <p className="text-lg   text-center mx-3 py-2">The purity determines the trust factor of a jewellery as much as we say</p>
                </div>
                <div className="trust_card flex flex-col justify-center items-center m-1">
                    <div className="w-20">
                        <img  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F9d20adf0-203a-11ed-bf3f-cb401eafe67a.png&w=128&q=75" alt="" />
                    </div>
                    <p className="text-xl font-semibold text-center mx-3 py-2">BIS 916 Hallmarked Products</p>
                    <p className="text-lg   text-center mx-3 py-2">The purity determines the trust factor of a jewellery as much as we say</p>
                </div>
                <div className="trust_card flex flex-col justify-center items-center m-1">
                    <div className="w-20">
                        <img  src="https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F9d20adf0-203a-11ed-bf3f-cb401eafe67a.png&w=128&q=75" alt="" />
                    </div>
                    <p className="text-xl font-semibold text-center mx-3 py-2">BIS 916 Hallmarked Products</p>
                    <p className="text-lg   text-center mx-3 py-2">The purity determines the trust factor of a jewellery as much as we say</p>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
