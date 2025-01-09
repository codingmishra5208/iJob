import { useState } from "react";
import { Link } from "react-router-dom";

const Navlinks=()=>{
      const links=[
        {name:"Find Jobs",url:"find-jobs"},
        {name:"Find Talent",url:"find-talent"},
        {name:"Upload Job",url: "upload-job"},
        {name:"About us",url:"about"},
     ]

const [activeLink, setActiveLink] = useState(null);
  
 const handleClickLink=(url)=>{
     setActiveLink(url);
 }

     
  return(
     <div className="flex items-center text-mine-shaft-200 gap-5 h-full">
      {
        links.map((link,index)=><div>
        <Link key={index} to={link.url}
         onClick={()=>handleClickLink(link.url)}
          className={activeLink === link.url ? "text-bright-sun-400":"" }>
            {link.name}
        </Link>
        </div>
        )
      }
     </div>
 )

}
export default Navlinks;