import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconAdjustments, IconBookmark, IconBriefcase, IconMapPin, IconPremiumRights, IconRecharging } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png";



const card=[
     {
        name:"Location",
        icon:IconMapPin,
        value:"New York",
     },
     {
        name:"Experience",
        icon:IconBriefcase,
        value:"Expert",
     },
     {
        name:"Salary",
        icon:IconPremiumRights,
        value:"48 LPA",
     },
     {
        name:"Job Type",
        icon:IconRecharging,
        value:"Full Time",
     }
]

 const skills=['React','Spring Boot' , 'Java','Phyton','Node js','MongoDB','Express','Django','PostgreSQL'];

const JobDesc=()=>{
 return(
    <div className="w-2/3">
      <div className="flex justify-between">
              <div className="flex  gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                  <img className="h-14" src={img} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-semibold text-2xl">Software Enginner </div>
                  <div className="text-lg text-mine-shaft-300">
                   Google &bull; 3 days ago &bull;  48 Applicant
                  </div>
                </div>
                </div>
                 <div className=" flex flex-col gap-2 items-center">
                    <Link to='/apply-job'>
                  <Button color="brightSun.4" size="sm" variant="light">Apply</Button>
                  </Link>
                  <IconBookmark className="text-bright-sun-400 cursor-pointer" stroke={.5} />
                 </div>
              </div>
        
              <Divider my="xl" />
                <div className="flex justify-between">
                    {
                      card.map((item,index)=><div key={index} className="flex flex-col items-center gap-1">
                      <ActionIcon color="brightSun.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                 <item.icon className="w-4/5 h-4/5" stroke={1.5} />
               </ActionIcon>
                <div className="text-sm text-mine-shaft-300">{item.name}</div>
                 <div className="font-semibold">{item.value}</div>
                      </div>)
                    }
                    
                </div>
                <Divider my="xl" />
                <div>
                    <div className="text-xl font-semibold mb-5">Required Skills</div>
                    <div className="flex flex-wrap gap-2">
                        {
                        skills.map((item,index)=> <ActionIcon key={index} p="xs" color="brightSun.4" 
                        className="!h-fit !w-fit !text-sm " variant="light" radius="xl" aria-label="Settings">
                        {item}
                </ActionIcon>)
                        }
                   
                    </div>
                </div>
                <Divider my="xl" />
            </div>
           
 )

}
export default JobDesc