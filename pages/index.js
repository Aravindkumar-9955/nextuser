
//page/index
import React from "react";
import HOC from "../src/app/HOC/hoc"; 
import ProfileComp from '../src/app/profilecopm'
// Adjust the path based on your project structure


const HomePage = () => {
   const Newcomponent = HOC(ProfileComp);

   return (
      <div>
         <Newcomponent name={"aravindha"} age={12} datebirth={"12-23-2024"} />
      </div>
   );
};

export default HomePage;
