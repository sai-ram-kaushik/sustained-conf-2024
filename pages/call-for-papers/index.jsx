import React from "react";
import ImportantDates from "../../sections/ImportantDates";
const CallForPapers = () => {
  return (
    <div className="w-full px-4 lg:px-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-5">
          <h2>
            Call For <span>Papers</span>
          </h2>
        </div>

        <div>
          <ImportantDates />
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
