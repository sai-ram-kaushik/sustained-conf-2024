import React from "react";

const ScrollingContent = () => {
  return (
    <div className="w-full h-[5vh] bg-secondary sticky top-20">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-center w-full h-full">
          <marquee scrollamount="12" className="text-background text-lg">
            All the accepted papers will be indexed in Scopus database
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default ScrollingContent;
