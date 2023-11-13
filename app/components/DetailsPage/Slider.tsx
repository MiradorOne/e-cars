import React, { useEffect, useState } from "react";
import LeftArrow from "~/components/IconComponents/LeftArrow";
import FullScreenSvg from "~/components/IconComponents/FullScreenSvg";

type ImageSliderProps = {
  imageUrls: string[];
};
const Slider = ({ imageUrls }: ImageSliderProps) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [showFullScreen, setFullscreen] = useState(false);
  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      else return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
    console.log(imageIndex);
  }
  const onClickShowImagesHandler = () => {
    setShowAllImages(!showAllImages);
  };
  const onClickShowFullScreenHandler = () => {
    setFullscreen(!showFullScreen);
    console.log(showFullScreen);
  };
  useEffect(() => {
    if (showFullScreen) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "scroll";
  });

  return (
    <>
      <div
        className={`${
          showFullScreen ? "lg:block" : "lg:hidden"
        } absolute left-0 right-[500px] top-0 z-20 hidden	h-screen  w-[99vw] bg-[rgba(0,0,0,0.5)]`}
      >
        <div className="relative mx-auto flex w-full max-w-[1224px] shrink-0 grow-0 overflow-hidden ">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="#"
              className="h-screen w-full shrink-0	grow-0 rounded-lg transition-[translate] duration-300 ease-[ease-in-out] "
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
          <button
            className="absolute right-2 top-2 rounded-lg bg-black px-2 py-1.5 text-xs text-white"
            onClick={onClickShowFullScreenHandler}
          >
            Close
          </button>
          <div className=" absolute bottom-[12px]  left-1/2 h-fit rounded-full bg-[rgba(0,0,0,0.5)] bg-black px-3 py-1.5  text-white transition-all">
            <p className="opacity-100">
              {imageIndex + 1} of {imageUrls.length}
            </p>
          </div>
          <button
            onClick={showPrevImage}
            className=" absolute  left-[12px] top-1/2 h-fit rounded-full bg-[rgba(0,0,0,0.5)] bg-black p-[10px] transition-all hover:opacity-100"
          >
            <LeftArrow fill={"#FFFFFF"} />
          </button>
          <button
            onClick={showNextImage}
            className="absolute right-[12px]  top-1/2 h-fit rounded-full bg-black p-[10px] opacity-50 transition-all hover:opacity-100"
          >
            <LeftArrow fill={"#FFFFFF"} className="rotate-180" />
          </button>
        </div>
      </div>
      <div className="relative mb-4">
        <div className="flex overflow-hidden ">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="#"
              className="w-full shrink-0	grow-0 rounded-lg transition-[translate] duration-300 ease-[ease-in-out]"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          className="absolute right-3  top-3  hidden items-center rounded-full bg-[rgba(0,0,0,0.5)] px-3 py-1.5 text-white lg:flex"
          onClick={onClickShowFullScreenHandler}
        >
          <FullScreenSvg className="mr-1 " />
          <p>Fullscreen</p>
        </button>
        <button
          onClick={showPrevImage}
          className=" absolute  left-[12px] top-1/2 h-fit rounded-full bg-[rgba(0,0,0,0.5)] bg-black p-[10px] transition-all hover:opacity-100"
        >
          <LeftArrow fill={"#FFFFFF"} />
        </button>
        <button
          onClick={showNextImage}
          className="absolute right-[12px]  top-1/2 h-fit rounded-full bg-black p-[10px] opacity-50 transition-all hover:opacity-100"
        >
          <LeftArrow fill={"#FFFFFF"} className="rotate-180" />
        </button>
        <div className=" absolute bottom-[12px] left-[45%]  h-fit rounded-full bg-[rgba(0,0,0,0.5)] bg-black px-3 py-1.5 text-white  transition-all ">
          <p className="opacity-100">
            {imageIndex + 1} of {imageUrls.length}
          </p>
        </div>
      </div>
      <div
        className={`grid ${
          showAllImages ? "max-h-full" : "max-h-[70px]"
        } justify-items-stretch gap-2 overflow-y-hidden min-[320px]:grid-cols-4 md:grid-cols-6 lg:grid-cols-7`}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            onClick={() => {
              setImageIndex(index);
            }}
            src={url}
            alt="#"
            className={`h-[70px] cursor-pointer rounded-lg transition-opacity duration-75 hover:opacity-80 ${
              index === imageIndex ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
      <div
        onClick={onClickShowImagesHandler}
        className="mt-2 cursor-pointer font-semibold text-green-800"
      >
        Show {showAllImages ? "less" : `all ${imageUrls.length}`} images
      </div>
    </>
  );
};

export default Slider;
