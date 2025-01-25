import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";
import MultiInput from "./MultiInput";
import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";
  
const dropdownData=[
    {
      title:"Job Title",
      icon:IconSearch,
      option:["Designer","Developer","Product","Product Manager","Marketing Specialist","Data Analyst","Sales Executive",
         "Content Writer","Customer Support"]
      },
      {
         title:"Location",
         icon:IconMapPin,
         option:["Delhi","Mumbai","Hyderabad","Lucknow","Noida","Pune","Jaipur"],
      },
      {
         title:"Job Type",
         icon:IconRecharging,
         option:["Full Time","Part Time","Contract","Freelancer","Internship"]
      }
]

const Searchbox=()=>{
   const [value,setValue]=useState<[number,number]>([1,100]);
   return(
    <div className="flex gap-10 px-5 py-8 ">
      {
         dropdownData.map((item,index)=><><div className="w-1/5" key={index}>
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


export default Searchbox;