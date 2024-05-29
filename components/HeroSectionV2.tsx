import React from "react";

import Image from "next/image";
import testImage from "../public/images/product/blog.png";

const HeroSectionV2 = () => {
  return (
    <>
      <section
        id="HeroSection"
        className=" content-center justify-center bg-white"
      >
        <div
          id="HeroContentContainer"
          className="flex h-full grow flex-col flex-wrap px-32 pb-36 pt-24"
        >
          <div id="TextAndImageDiv" className="flex w-full flex-row">
            <div id="leftDiv" className="mr-16 basis-1/2">
              <p id="AboveH1text" className="text-xl font-medium text-gray-600">
                Welcome, hero
              </p>
              <h1
                id="HeroText"
                className="py-4 text-7xl font-semibold leading-snug text-gray-600"
              >
                Lorem Ipsum simply dummy
              </h1>
              <p
                id="BelowH1Paragraph"
                className="py-4 leading-relaxed text-gray-400"
              >
                Welcome to BurgerBliss, where we take your cravings to a whole
                new level! Our mouthwatering burgers are made from 100% beef and
                are served on freshly baked buns.
              </p>
              <div id="buttons" className="py-4">
                <button className="mr-6 rounded-full bg-blue-300 px-4 py-2 text-center text-white hover:bg-blue-400">
                  Sign Up
                </button>
                <button className="rounded-full border border-blue-400 bg-transparent px-4 py-2 text-center font-semibold text-blue-400 hover:border-transparent hover:bg-blue-400 hover:text-white">
                  Explore BCard
                </button>
              </div>
            </div>

            <div id="rightDiv" className="basis-1/2">
              <div id="imageContainer" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div id="TrustedByThings" className="pt-12">
            <p className="text-xl font-medium text-gray-400">Trusted by:</p>
            <span className="pr-4 text-3xl text-gray-400">
              <a id="temporary text inside a" href="">
                Google
              </a>
            </span>
            <span className="pr-4 text-3xl text-gray-400">
              <a href="">Youtube</a>
            </span>
            <span className="pr-4 text-3xl text-gray-400">
              <a href="">Facebook</a>
            </span>
          </div>
        </div>
      </section>

      <section
        id="HorizontalCardsSection"
        className="content-center justify-center bg-black"
      >
        <div id="HorizCardContaner" className="mx-32 flex gap-x-8">
          <div id="HorizCard1" className="my-4  basis-1/3 bg-slate-500 p-8">
            <div id="HCardImgContaner" className="relative h-64">
              {" "}
              <Image
                src={testImage}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="mx-auto text-3xl font-bold">
              The <span className="text-[#fc5710]">community</span> owned card!
            </h3>
            <p className="mt-4">
              Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
              cards, you have a say in how we build the future.
            </p>
          </div>

          <div id="HorizCard2" className="my-4 basis-1/3 bg-slate-500 p-8">
            <div id="HCardImgContaner" className="relative h-64">
              {" "}
              <Image
                src={testImage}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-3xl font-bold">
              Support your <span className="text-[#13b5ec]">favorite</span>{" "}
              communities
            </h3>
            <p>
              Every time you use a card, 1-2% Of the purchase price goes to a
              bank. Bankless Card redirects some of that fee to your favorite
              community.
            </p>
          </div>

          <div id="HorizCard3" className="my-4 basis-1/3 bg-slate-500 p-8">
            <div id="HCardImgContaner" className="relative h-64">
              {" "}
              <Image
                src={testImage}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-3xl font-bold ">
              Easily <span className="text-[#27ffa4]">onboard</span> new members
            </h3>
            <p>
              With our easy-to-use mobile app, you can onboard new friends into
              your community with a simple download.
            </p>
          </div>
        </div>
      </section>

      <section
        id="ValuesSection"
        className="content-center justify-center bg-white py-12"
      >
        <div id="ValuesContentContainer" className="flex h-full grow flex-col">
          <div id="V1ContainerDiv" className="flex flex-row">
            <div id="Left1" className="basis-1/2 bg-black">
              <div id="imgCont1" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain", scale: "1" }}
                />
              </div>
            </div>
            <div id="Right1" className="basis-1/2 bg-white py-48 pl-24 pr-60">
              <h3 className="pb-8 text-xl font-bold text-gray-900">
                Value proposition 1
              </h3>
              <p className="text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio ipsum iste, culpa tempora quos deleniti optio,
                commodi libero officia assumenda voluptatum numquam et
                reiciendis. Vel nemo facilis veritatis dicta, aut fuga
                perspiciatis.
              </p>
            </div>
          </div>
          <div id="V2ContainerDiv" className="flex flex-row">
            <div id="Left2" className="basis-1/2 bg-white py-48 pl-24 pr-60">
              <h3 className="pb-8 text-xl font-bold text-gray-900">
                Value proposition 1
              </h3>
              <p className="text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio ipsum iste, culpa tempora quos deleniti optio,
                commodi libero officia assumenda voluptatum numquam et
                reiciendis. Vel nemo facilis veritatis dicta, aut fuga
                perspiciatis.
              </p>
            </div>
            <div id="Right2" className="basis-1/2 bg-black">
              <div id="imgCont2" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain", scale: "1" }}
                />
              </div>
            </div>
          </div>
          <div id="V3ContainerDiv" className="flex flex-row">
            <div id="Left3" className="basis-1/2 bg-black">
              <div id="imgCont3" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain", scale: "1" }}
                />
              </div>
            </div>
            <div id="Right3" className="basis-1/2 bg-white py-48 pl-24 pr-60">
              <h3 className="pb-8 text-xl font-bold text-gray-900">
                Value proposition 1
              </h3>
              <p className="text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio ipsum iste, culpa tempora quos deleniti optio,
                commodi libero officia assumenda voluptatum numquam et
                reiciendis. Vel nemo facilis veritatis dicta, aut fuga
                perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionV2;
