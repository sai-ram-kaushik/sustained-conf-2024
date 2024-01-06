import React from "react";
import {
  chief_patrons,
  co_convenor,
  co_patrons,
  conference_chair,
  general_chair,
  patrons,
} from "../../constants";
import TransitionEffect from "../../components/TransitionEffect";

const index = () => {
  return (
    <div className="w-full mt-5 px-4 lg:px-16">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center ">
          <h2>
            Organizing <span>Committee</span>
          </h2>
        </div>

        <div className="flex items-center justify-center mt-5">
          <h3>
            Chief <span>Patron</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-5">
          {chief_patrons.map((list, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-xl text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <h3>
            <span>Patron</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-5">
          {patrons.map((list, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-xl text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <h3>
            Co - <span>Patron</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-5">
          {co_patrons.map((list, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-xl text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <h3>
            General <span>Chair</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-5">
          {general_chair.map((list, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-xl text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <h3>
            Conference <span>Chair</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-5">
          {conference_chair.map((list, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-xl text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <h3>
            Co - <span>Convenor</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-5">
          {co_convenor.map((list, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-xl text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
