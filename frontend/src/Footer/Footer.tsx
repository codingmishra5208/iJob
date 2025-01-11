
import {
  IconAnchor,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

const footerLinks=[
     {title: "Product", links:["Find Job", "Find Company","Find Employee"]},
     {title:"Company", links:["About Us","Contact Us","Privacy Policy","Terms & Condition"]},
     {title:"Support",links:["Help & Support","Feedback","FAQ"]},
]

const Footer = () => {
  return (
    <div className="mt-28 pb-5 flex justify-around gap-5">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-2 items-center text-bright-sun-400">
          <IconAnchor stroke={2.5} className="h-6 w-6" />
          <div className="text-xl font-semibold">iJobs</div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          Job Portal with user profiles, skill updates, certifications, mark
          experiences and admin job postings
        </div>
        <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full cursor-pointer hover:[&>div]:bg-mine-shaft-700">
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandGithub />
          </div> 
        </div>
      </div>
      {
        footerLinks.map((item,index)=><div key={index}>
         <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>          
         {
            item.links.map((link,index)=><div key={index} className="text-mine-shaft-300 text-sm
             hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300
              ease-in-out">
               {link}
            </div>)
         }
        </div>
        )
      }
    </div>
  );
};
export default Footer;
