import React from "react";
import ProjectCard from "../components/ProjectCard";

const WorksPage = () => {
  return (
    <div className=" w-screen h-auto flex flex-col items-center mb-32 ">
      <ProjectCard
        title="Zash Ecommerce Website"
        disc="Zash is full-stack e-commerce website based on electronic products, Me and my team has build this website for final year project showcase.
        Tech used :- HTML,CSS,Javascript,PHP,RazorPay Payment Gateway and mySql database, Hosted in Apache local server "
        livelink="https://loquacious-biscotti-93e1f6.netlify.app/"
        github="https://github.com/2003LoneWolf/ZASH-ecommerce-php"
        image="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/997680178308147.Y3JvcCwxNDAwLDEwOTUsMCwyNA.jpg"
      />
    </div>
  );
};

export default WorksPage;
