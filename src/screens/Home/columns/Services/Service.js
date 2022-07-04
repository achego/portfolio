import React from "react";

const Service = ({icon, title, description}) => {
  return (
    <div className="group bg-white rounded-lg py-12 px-6 flex flex-col items-center [transition:var(--transition)] hover:text-white hover:bg-[color:var(--prim-5)]">
      <div className="text-[2.5rem] mb-6 font-bold">
        {icon}
      </div>
      <div className="pb-5 flex items-center flex-col">
        <h4 className="font-bold capitalize">{title}</h4>
        <div className="h-[0.15rem] w-12 bg-[color:var(--prim-5)] group-hover:bg-white [transition:var(--transition)]"></div>
      </div>
      <p className="text-center group-hover:text-white [transition:var(--transition)]">
        {description}
      </p>
    </div>
  );
};

export default Service;
