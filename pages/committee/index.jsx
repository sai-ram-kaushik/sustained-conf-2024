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

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            Chief Patron
          </h3>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 mt-5">
          {chief_patrons.map((list, index) => (
            <div key={index} className="flex items-center gap-3">
              <p className="text-lg text-center font-unbounded">{list.label},</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            Patron
          </h3>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 mt-5">
          {patrons.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label},</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            Co - Patron
          </h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {co_patrons.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label},</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            General Chair
          </h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {general_chair.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-xl text-center font-unbounded">{list.label},</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            Conference Chair & Convener
          </h3>
        </div>

        <div className="flex item-start justify-start gap-10 lg:gap-20 mt-5">
          {conference_chair.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label},</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            Co - Convener
          </h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {co_convenor.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label},</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
