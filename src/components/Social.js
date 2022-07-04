import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = ({className}) => {
    const style = 'hover:text-[color:var(--prim-5)] [transition:var(--transition)]'
  return (
    <div className={`flex gap-x-6 text-[color:var(--grey-1)] text-2xl pt-12 ${className}`}>
      <FaFacebook className={style} />
      <FaLinkedin className={style}/>
      <FaInstagram className={style}/>
      <FaGithub className={style}/>
    </div>
  );
};

export default Social;
