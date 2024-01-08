import React from "react";
import TransitionEffect from "../../components/TransitionEffect";
import { theme } from "../../constants";

const ConferenceTheme = () => {
  return (
    <div className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2>Conference Themes</h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {theme.map((list, index) => (
            <div key={index} className="flex items-center gap-3">
              <p className="text-lg text-secondary">{list.label}</p>
              <p>{list.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceTheme;
