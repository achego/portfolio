import React from "react";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import poster from '../../../assets/bg.jpeg'

const Contact = () => {
  return (
    <div className="relative max-h-[90vh] [clip-path:polygon(0%_10%,50%_0%,100%_10%,100%_90%,50%_100%,0%_90%)] my-[5rem] overflow-hidden">
      <video className="w-full opacity-40" autoPlay muted loop poster={poster} src=""/>
      <Section
      className='absolute w-full top-1/2 left-0 [transform:translate(0,-40%)] pt-12 pb-48 [clip-path:polygon(0%_0%,100%_0%,100%_75%,80%_75%,80%_90%,50%_75%,0%_75%)]'
      content_p="pb-0"
        title="Let's get in touch"
        bg="bg-[color:var(--prim-10)]"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui quam exercitationem consequuntur facere hic magni voluptatum animi maiores corporis. Consectetur eaque sed perferendis numquam accusamus facere magni cumque odit?"
      >
        <div className="flex justify-center">
          <Button>contact me</Button>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
