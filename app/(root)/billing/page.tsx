import Navbar from "../../../app/component/NavBar";
import React from "react";

const Billing = () => {
  return (
    <div className="bg-grey-bg h-screen overflow-hidden">
      <Navbar title={"Billings"} />

      <section className=" px-16 m-3 leading-7 text-gray-900 bg-white sm:py-12 md:py-6 border border-gray-200 rounded-lg shadow dark:border-gray-100">
        <div className="box-border mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl ">
          <div className="flex flex-col  leading-7  text-gray-900 border-0 border-gray-200">
            <h2
              id="pricing"
              className="box-border m-0 text-xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
            >
              Pricing
            </h2>
            <p className="box-border mt-4 text-xl text-gray-900 border-solid sm:text-2xl"></p>
          </div>

          <div
            id="pricing"
            className="grid grid-cols-1  text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-2  md:gap-4 lg:grid-cols-3"
          >
            <div className="flex flex-col justify-between items-center max-w-md mx-auto  bg-[#038C7F] text-white my-0 border-solid rounded-lg border-0 shadow sm:my-0 sm:p-6 md:py-4 md:px-8">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-white border-0 border-gray-200 sm:text-3xl md:text-2xl">
                Freemium
              </h3>
              <p className="text-gray-300">Monthly Charge</p>

              <p className="box-border m-0 text-3xl font-semibold leading-none border-solid ">
                $0
              </p>
              <hr
                style={{ borderTop: "1px solid lightgray", width: "100%" }}
                className="my-4"
              />
              <ul className="flex flex-col items-center text-white leading-7 border-0 border-gray-200 gap-2">
                <li className="text-[16px]">
                  One File Upload & A Google drive
                </li>
                <li className=" ">100 Queries</li>
                <li className=" ">1 View</li>
                <li className=" ">2 Users</li>

                <li className=" ">Up To 250 MB</li>
              </ul>

              <div className="mt-auto">
                <hr
                  style={{ borderTop: "1px solid lightgray", width: "100%" }}
                  className="my-4"
                />
                <a
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-3 text-sm leading-none text-center text-[#038C7F] bg-white border border-[#038c7e9f] rounded-full cursor-pointer hover:bg-[#038c7e87] hover:border-[#038C7F] hover:text-white focus:outline-none  sm:text-base md:text-lg"
                >
                  Your Current Plan
                </a>
                <p className="py-3 text-primary-blue">
                  Start Your 30 Day Free Trial
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center max-w-md mx-auto my-0 border-solid rounded-lg border-0 shadow sm:my-0 sm:p-6 md:py-4 md:px-8">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-2xl">
                Standard
              </h3>
              <p>Monthly Charge</p>

              <p className="box-border m-0 text-3xl font-semibold leading-none border-solid text-[#038C7F]">
                $24
              </p>
              <hr
                style={{ borderTop: "1px solid lightgray", width: "100%" }}
                className="my-4"
              />
              <ul className="flex flex-col items-center leading-7 text-gray-600 border-0 border-gray-200 gap-2">
                <li className="">Access to all supported data sources</li>
                <li className=" ">1000 Queries</li>
                <li className=" ">5 Views</li>
                <li className=" ">5 Users</li>
                <li className=" ">Up To 50 GB</li>
              </ul>

              <div className="mt-auto">
                <hr
                  style={{ borderTop: "1px solid white", width: "100%" }}
                  className="my-4"
                />
                <hr
                  style={{ borderTop: "1px solid lightgray", width: "100%" }}
                  className="my-4"
                />
                <a
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-3 text-sm leading-none text-center text-primary-blue bg-white border border-[#038c7e9f] rounded-full cursor-pointer hover:bg-[#038c7e87] hover:border-[#038C7F] hover:text-white focus:outline-none focus:bg-[#038C7F] focus:border-[#038C7F] focus:text-white sm:text-base md:text-lg"
                >
                  Upgrade to Standard
                </a>
                <p className="py-3">Start Your 30 Day Free Trial</p>
              </div>
            </div>

            <div className="flex flex-col items-center max-w-md  mx-auto my-0 border-solid rounded-lg border-0 shadow  sm:my-0 sm:p-6  md:py-4 md:px-8">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-2xl">
                Premium
              </h3>
              <p>Monthly Charge</p>

              <p className="box-border m-0 text-3xl font-semibold leading-none border-solid text-[#038C7F]">
                Contact Sales
              </p>
              <hr
                style={{ borderTop: "1px solid lightgray", width: "100%" }}
                className="my-4"
              />
              <ul className="flex flex-col items-center leading-7 text-gray-600 border-0 border-gray-200 gap-2">
                <li className="text-center">
                  Unlimited access to all supported data sources, including
                  custom integrations
                </li>
                <li className=" ">Unlimited Queries</li>

                <li className=" ">10 Users</li>

                <li className="text-center">
                  Custom Storage Solutions Tailored To Business Needs
                </li>
              </ul>

              <hr
                style={{ borderTop: "1px solid lightgray", width: "100%" }}
                className="my-4"
              />

              <a
                href="#"
                className="inline-flex justify-center w-full px-4 py-3 text-sm leading-none text-center text-primary-blue bg-white border border-[#038c7e9f] rounded-full cursor-pointer hover:bg-[#038c7e87] hover:border-[#038C7F] hover:text-white focus:outline-none focus:bg-[#038C7F] focus:border-[#038C7F] focus:text-white sm:text-base md:text-lg"
              >
                Upgrade to Premium
              </a>
              <p className="py-3">Start Your 30 Day Free Trial</p>
            </div>

            <p className="box-border mt-4 text-l text-gray-900 border-solid sm:text-l italic">
              To get additional Tokens, Contact Us!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Billing;
