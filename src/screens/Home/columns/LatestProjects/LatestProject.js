import React from "react";
import img from "../../../../assets/bg.jpeg";
import Button from "../../../../components/Button";

const LatestProject = ({title, description}) => {
  return (
    <div className="group bg-[color:var(--prim-5)] rounded-lg relative [transition:all_0.7s] z-30">
      <div className="absolute rounded-lg border-white w-full h-full group-hover:border-[0.3rem] group-hover:scale-75 [transition:all_0.7s]"></div>
      <img src={img} alt="" className="h-60 w-full rounded-lg group-hover:opacity-10 [transition:all_1s]" />
      <div className="absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] opacity-0 group-hover:opacity-100 [transition:all_0.7s] flex flex-col items-center">
        <div className="font-bold text-white text-center">
          <h4>{title}</h4>
          <p className="text-white">{description}</p>
        </div>
        <Button style='bg-[color:var(--prim-4)] hover:bg-[color:var(--prim-6)] text-white'>See all</Button>
      </div>
    </div>
  );
};

export default LatestProject;
