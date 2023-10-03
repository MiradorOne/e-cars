import React from "react";
import Mission from "./../Assets/Misson.png";
import Heading from "~/components/Heading";
import Description from "~/components/Description/Description";
import Phone from "~/components/layout/Phone";
import Email from "~/components/layout/Email";
import SvgLargeMail from "~/components/IconComponents/LargeMail";
import { Button } from "~/components/Button";
const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-[1016px] min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-0 lg:py-[96px]">
      <Heading intent="maxsize44" className="min-[320px]:mb-6 lg:mb-10">
        About Us
      </Heading>
      <p>
        Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc.
        Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla
        facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar
        neque laoreet suspendisse interdum consectetur. Accumsan lacus vel
        facilisis volutpat est velit egestas dui id. Duis ut diam quam nulla
        porttitor. Id nibh tortor id aliquet lectus proin nibh. Amet tellus cras
        adipiscing enim eu turpis egestas pretium aenean. Massa tincidunt dui ut
        ornare lectus sit amet est placerat. Est ante in nibh mauris cursus
        mattis. Leo in vitae turpis massa sed elementum tempus egestas sed.
        Sagittis id consectetur purus ut faucibus pulvinar elementum integer
        enim. Aliquam vestibulum morbi blandit cursus risus at. Arcu cursus
        euismod quis viverra nibh cras. Semper viverra nam libero justo laoreet
        sit amet cursus sit. <br /> <br />
        Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada bibendum
        arcu vitae elementum curabitur. Velit dignissim sodales ut eu sem
        integer vitae justo. A erat nam at lectus urna duis convallis convallis.
        Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.
        Risus ultricies tristique nulla aliquet enim tortor. Consectetur a erat
        nam at. Elit sed vulputate mi sit amet mauris. Platea dictumst quisque
        sagittis purus sit amet volutpat consequat. Porta nibh venenatis cras
        sed felis eget. Ultricies lacus sed turpis tincidunt id aliquet risus
        feugiat in. Neque convallis a cras semper auctor. Odio tempor orci
        dapibus ultrices. Et malesuada fames ac turpis. Nulla pellentesque
        dignissim enim sit amet venenatis. Sed euismod nisi porta lorem mollis
        aliquam.
      </p>
      <Heading
        intent="maxsize32"
        className="mb-6 min-[320px]:mt-8 md:mt-10 lg:mt-[96px]"
      >
        Benefits
      </Heading>
      <p className="min-[320px]:mb-6 lg:mb-10">
        Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque.
        Pellentesque habitant morbi tristique senectus et. Eget gravida cum
        sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing
        bibendum. Porttitor massa id neque aliquam. In fermentum posuere urna
        nec. <br /> <br /> Rhoncus aenean vel elit scelerisque mauris
        pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse
        sed nisi. Consequat id porta nibh venenatis cras sed.
      </p>
      <Description intent="aboutUs" />
      <div className="grid items-center justify-items-center  min-[320px]:mt-8 min-[320px]:grid-cols-1 md:mt-10 md:grid-cols-2 md:gap-4 lg:mt-[96px] lg:gap-6">
        <div>
          <Heading intent="maxsize32" className="mb-6">
            Our mission
          </Heading>
          <p>
            Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada
            bibendum arcu vitae elementum curabitur. Velit dignissim sodales ut
            eu sem integer vitae justo. A erat nam at lectus urna duis convallis
            convallis. Feugiat scelerisque varius morbi enim nunc faucibus a
            pellentesque. Risus ultricies tristique nulla aliquet enim tortor.
            Consectetur a erat nam at. Elit sed vulputate mi sit amet mauris.
            <br />
            <br />
            Platea dictumst quisque sagittis purus sit amet volutpat consequat.
            Porta nibh venenatis cras sed felis eget. Ultricies lacus sed turpis
            tincidunt id aliquet risus feugiat in. Neque convallis a cras semper
            auctor.
          </p>
        </div>
        <div>
          <img src={Mission} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-[#F6F5F4] font-semibold min-[320px]:mt-8 min-[320px]:flex-col min-[320px]:p-4 md:mt-10 md:flex-row lg:mt-[96px] lg:p-8">
        <p className="text-sm min-[320px]:text-center md:w-full	 md:max-w-[294px] md:text-start lg:w-auto lg:max-w-full">
          Contact us for auto import assistance or to learn more about us
        </p>
        <div className="flex items-center min-[320px]:flex-col md:flex-row">
          <Phone
            fill="#1A1A1A"
            fillOpacity="1"
            className="text-sm min-[320px]:mt-4 md:ml-6 md:mr-6 md:mt-0 lg:mr-8"
          />
          <Email
            fill="#1A1A1A"
            fillOpacity="1"
            className="text-sm min-[320px]:mt-4 md:mt-0"
          />
        </div>
      </div>
      <Heading
        intent="maxsize32"
        className="mb-6 min-[320px]:mt-8 md:mt-10 lg:mt-[96px]"
      >
        Car imports: a full package of services
      </Heading>
      <p>
        Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada bibendum
        arcu vitae elementum curabitur. Velit dignissim sodales ut eu sem
        integer vitae justo. A erat nam at lectus urna duis convallis convallis.
        Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.
        Risus ultricies tristique nulla aliquet enim tortor. Consectetur a erat
        nam at. Elit sed vulputate mi sit amet mauris. Platea dictumst quisque
        sagittis purus sit amet volutpat consequat. Porta nibh venenatis cras
        sed felis eget. Ultricies lacus sed turpis tincidunt id aliquet risus
        feugiat in. Neque convallis a cras semper auctor. Odio tempor orci
        dapibus ultrices. Et malesuada fames ac turpis. Nulla pellentesque
        dignissim enim sit amet venenatis. Sed euismod nisi porta lorem mollis
        aliquam.
      </p>
      <div className="mt-10 flex items-center rounded-lg shadow-3xl min-[320px]:flex-col min-[320px]:p-4 md:flex-row lg:p-10">
        <div className="flex w-full items-center">
          <SvgLargeMail
            fill="#3C7D46"
            className="mr-6 h-[32px] w-[32px]  md:mb-0"
          />
          <div className="min-[320px]:w-full md:max-w-[80%]">
            <Heading intent="maxsize22">
              Send an inquiry and our managers will offer you the best deals.
            </Heading>
            <p className="mt-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <Button
          intent="primary"
          size="medium"
          className=" min-[320px]:mt-4 min-[320px]:w-full md:mt-0 md:w-[138px]"
        >
          Get a quote
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
