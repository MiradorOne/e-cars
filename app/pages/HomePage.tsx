import React from "react";

import Description from "~/components/Description/Description";
import { Button } from "~/components/Button";
import {
  LeftCheckMark,
  MailBlack,
  WhatsappBlack,
} from "~/components/IconComponents";
import Heading from "~/components/Heading";

import RightCheckMark from "~/components/IconComponents/RigthCheckMark";
import RightArrow from "~/components/IconComponents/RightArrow";
import CarCard from "~/components/Homepage/CarCard";

import BrandCard from "~/components/Homepage/BrandCard";

import CheckMarkDown from "~/components/IconComponents/CheckmarkDown";
import ChooseUsImg from "./../Assets/Rectangle 4.png";
import Feedback from "~/components/Homepage/Feedback";
const HomePage = () => {
  return (
    <>
      <div className="mx-auto max-w-[1224px] min-[320px]:px-4 md:px-8 lg:px-0">
        <div className="md:w-[50%] lg:mb-20">
          <h1 className="font-semibold  min-[320px]:text-[42px] min-[320px]:leading-[3rem]  lg:text-6xl lg:leading-[4rem]">
            Car import services with delivery to your doorstep.
          </h1>
          <div className="mt-6 min-[320px]:block lg:flex">
            <Button
              intent="primary"
              size="medium"
              height="medium"
              className="h-auto min-[320px]:mb-6  min-[320px]:w-full lg:mb-0 lg:mr-8 lg:w-[138px]"
            >
              Get a quote
            </Button>
            <div className="flex items-center min-[320px]:justify-between">
              <div className="mr-8 flex items-center">
                <WhatsappBlack className="mr-1.5" />
                <p className="text-sm font-semibold">+971 55 811 9024</p>
              </div>
              <div className="flex items-center">
                <MailBlack className="mr-1.5" />
                <p className="text-sm font-semibold">request@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <Description intent="homepage" className="lg:mb-[96px]" />
        <div className="flex items-center justify-between min-[320px]:mb-6 lg:mb-12">
          <Heading intent="maxsize38" className="">
            Special offers
          </Heading>
          <div className="w-full max-w-[198px] items-center justify-between min-[320px]:hidden md:flex">
            <div className="flex md:mr-6 lg:mr-10">
              <LeftCheckMark className="mr-4" />
              <RightCheckMark />
            </div>
            <div className="mr-1 flex items-center font-semibold text-green-800">
              See all cars <RightArrow className="ml-1" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4  gap-6  min-[320px]:mb-6 md:mb-10 lg:mb-24">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
        <div className=" w-full items-center justify-between min-[320px]:flex md:hidden">
          <div className="flex md:mr-6 lg:mr-10">
            <LeftCheckMark className="mr-4" />
            <RightCheckMark />
          </div>
          <div className="mr-1 flex items-center font-semibold text-green-800">
            See all cars <RightArrow className="ml-1" />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1224px]">
          <Heading intent="maxsize38" className="min-[320px]:mb-6 lg:mb-12">
            Browse by brand
          </Heading>
          <div className="mb-4 grid min-[320px]:grid-cols-2 min-[320px]:gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
          </div>
          <div className="flex items-center font-semibold text-green-800">
            Show all brands <CheckMarkDown className="ml-1" />
          </div>
        </div>
      </div>
      <div className="bg-black text-white min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-0 lg:py-24">
        <div className="mx-auto flex w-full max-w-[808px] items-center justify-between min-[320px]:flex-col md:flex-row">
          <div className="md:w-8/12">
            <p className="text-2xl font-semibold min-[320px]:mb-4 lg:mb-6 ">
              Send an inquiry now and get the best offers suitable for your
              requirements
            </p>
            <p className="text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <Button
            intent="primary"
            size="medium"
            className="min-[320px]:mt-6 min-[320px]:w-full md:mt-0 md:w-auto"
          >
            Get a quote
          </Button>
        </div>
      </div>
      <div className="min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-0  lg:py-24">
        <div className="mx-auto text-center min-[320px]:mb-6 min-[320px]:w-full lg:mb-12 lg:max-w-[600px]">
          <Heading className="mb-6" intent="maxsize38">
            How it works
          </Heading>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <Description intent="howItWorks" className="mx-auto" />
      </div>
      <hr />
      <div className="mx-auto flex max-w-[1224px] items-center justify-between min-[320px]:flex-col min-[320px]:px-4 min-[320px]:py-8 md:flex-row md:px-8 md:py-40 lg:px-0 lg:py-24">
        <img
          src={ChooseUsImg}
          className="h-auto w-full md:max-w-[50%]"
          alt=""
        />
        <div className="w-full max-w-[600px]">
          <div className="md:pl-6 lg:px-[104px] ">
            <Heading className="mb-6" intent="maxsize38">
              Why choose us
            </Heading>
            <p>
              Quis blandit turpis cursus in hac. In hendrerit gravida rutrum
              quisque. Pellentesque habitant morbi tristique senectus et. Eget
              gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit
              adipiscing bibendum.
            </p>
            <br />
            <p>
              Porttitor massa id neque aliquam. In fermentum posuere urna nec.
              Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac
              tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat
              id porta nibh venenatis cras sed.
            </p>
            <ul className="pl-8 min-[320px]:mt-6 lg:mt-12">
              <li className="relative before:absolute before:left-[-32px] before:font-extrabold before:text-[#E49A49] before:content-['—'] min-[320px]:mt-4 lg:mt-6">
                <h3 className="font-semibold">Some headline</h3>
                <p className="mt-2 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </li>
              <li className="relative before:absolute before:left-[-32px] before:font-extrabold before:text-[#E49A49] before:content-['—'] min-[320px]:mt-4 lg:mt-6">
                <h3 className="font-semibold">Some headline</h3>
                <p className="mt-2 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </li>
              <li className="relative before:absolute before:left-[-32px] before:font-extrabold before:text-[#E49A49] before:content-['—'] min-[320px]:mt-4 lg:mt-6">
                <h3 className="font-semibold">Some headline</h3>
                <p className="mt-2 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 py-[96px]">
        <div className="mx-auto w-full max-w-[1224px]">
          <div className="flex  items-center justify-between">
            <Heading intent="maxsize38">Our happy clients say about us</Heading>
            <div className="flex w-[56px] justify-between">
              <LeftCheckMark className="mr-4" />
              <RightCheckMark />
            </div>
          </div>
          <div className="grid grid-rows-1 min-[320px]:grid-cols-1 lg:grid-cols-3">
            <Feedback />
            <Feedback />
            <Feedback />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
