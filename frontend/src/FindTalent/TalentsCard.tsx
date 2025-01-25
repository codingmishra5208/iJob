import { IconBookmark, IconClockHour3, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Talent = [
    {
        img:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
        name:"Jorron Wood",
        jobField:"Software Enginner",
        company:"Google",
        desc:"Lorem ipsum sit south dghrof the sog gughdhf dthis oon the svleud in the life is journery and the belove",
        price:"20-24LPA",
        job1:"React",
        job2:"SpringBoot",
        job3:"Mongodb",
        location:"New York, United States",
    }, 
    
    {
      img:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
      name:"Jorron Wood",
      jobField:"Software Enginner",
      company:"Google",
      desc:"Lorem ipsum sit south dghrof the sog gughdhf dthis oon the svleud in the life is journery and the belove",
      price:"20-24LPA",
      job1:"React",
      job2:"SpringBoot",
      job3:"Mongodb",
      location:"New York, United States",
  }
]


const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEndPkpxU-FDOQK0acJ6iuFECTI914xOelQ&s";


const TalentsCard = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
         {
            Talent.map((item,index)=><div key={index}>
                   <div 
            className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl 
             hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400"
          >
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-full">
                  <Avatar size="lg"  src={item.img} alt="" />
                </div>
                <div>
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="text-sm text-mine-shaft-300">
                    Meta &#x2022; {item.jobField}
                  </div>
                </div>
              </div>
              <IconHeart className="text-mine-shaft-300 cursor-pointer" />
            </div>
            <div
              className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800
        [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs "
        >    
              <div>{item.job1}</div>
              <div>{item.job2}</div>
              <div>{item.job3}</div>
            </div>
            <Text
              className="!text-xs text-justify text-mine-shaft-300"
              lineClamp={3}
            >
                 {item.desc}
            </Text>
            <Divider size="xs" color="mineShaft.7" />
            <div className="flex justify-between">
              <div className="font-semibold text-mine-shaft-200 uppercase">₹{item.price} </div>
              <div className="flex gap-2 text-xs items-center text-mine-shaft-400">
                <IconMapPin className="h-5 w-5" stroke={1.5} />{item.location}
              </div>
            </div>
            <Divider color="mineShaft.7" size="xs" />
             <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                <Link to='/talent-profile'>
            <Button color="brightSun.4" variant="outline" fullWidth>Profile</Button>
            </Link>
             <div>
            <Button color="brightSun.4" variant="light" fullWidth>Message</Button>
            </div>
            </div>
            
          </div>       
                </div>)
         }

        </div>    

  );
};

export default TalentsCard;
