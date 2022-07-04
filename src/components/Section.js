import React from "react";

const Section = ({ children, bg, align_left, title, description, className, content_p='pb-10'}) => {
  return (
    <div className={`${bg} py-20 ${className}`}>
      <div className="w-[90vw] max-w-[1170px] mx-auto">
        <div className={content_p}>
          <div
            className={`${
              align_left ? "pb-8" : "flex flex-col justify-center items-center"
            }`}
          >
            <h2 className="font-bold">{title}</h2>
            <div className="h-1 w-20 bg-[color:var(--prim-5)] mb-5"></div>
          </div>
          <p className="w-[85vw] max-w-[30rem] mx-auto text-center">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
