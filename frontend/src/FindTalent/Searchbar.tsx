import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";
import { MultiInput } from "../FindJobs/MultiInput";
  
 const searchFields=[
      {
        title:"Job Title",
        icon:IconSearch,
        option:["Designer","Developer","Product Manager","Marketing Specialist","Data Analyst",
         "Sales Executive","Content Writer","Customer Support"],
      },
      {
        title:"Skills",
        icon:IconRecharging,
        option:["HTML","CSS","JavaScript","Angular","React","Node js","Phyton","Java","Ruby","PHP","Devops","Testing and Debugging"],

      },
      {
        title:"Location",
        icon:IconMapPin,
        option:["Delhi","New York","San Fransico","London","Berlin","Tokoyo","Sydney","toronto"]
      }
 ]


const Searchbar=()=>{
   const [value,setValue]=useState<[number,number]>([1,100]);
   return(
    <div className="flex gap-10 px-5 py-8 ">
      {
         searchFields.map((item,index)=><><div className="w-1/5" key={index}>
              <MultiInput {...item} />     
            </div>
            <Divider size="xs" orientation="vertical" />
            </>)
      } 
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
       <div className="flex text-sm justify-between">
           <div>Salary</div>
           <div>₹{value[0]} LPA - ₹{value[1]} LPA</div>
       </div>
       <RangeSlider color='brightSun.4' size="xs" value={value}
         labelTransitionProps={{
           transition: 'skew-down',
           duration: 150,
           timingFunction: 'linear',
         }}     onChange={setValue} />
       </div>
    </div>
   )

}      


export default Searchbar;