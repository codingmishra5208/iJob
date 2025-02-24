import Marquee from "react-fast-marquee";

const data=[
  "https://job-portal-seven-psi.vercel.app/Companies/Google.png",
  "https://job-portal-seven-psi.vercel.app/Companies/Amazon.png",
   "https://job-portal-seven-psi.vercel.app/Companies/Figma.png",
   "https://job-portal-seven-psi.vercel.app/Companies/Oracle.png",
   "https://job-portal-seven-psi.vercel.app/Companies/Walmart.png",
   "https://job-portal-seven-psi.vercel.app/Companies/Meta.png",
    "https://job-portal-seven-psi.vercel.app/Companies/Microsoft.png",
    "https://job-portal-seven-psi.vercel.app/Companies/Spotify.png",
    "https://job-portal-seven-psi.vercel.app/Companies/Slack.png",
    "https://job-portal-seven-psi.vercel.app/Companies/Pinterest.png",
    
];



const Companies=()=>{
  return(
    <div className="mt-20 pb-5 ">
        <div className="text-4xl font-semibold text-mine-shaft-100 text-center">Trusted By <span className="text-bright-sun-400">1000+</span> Companies</div>
        <Marquee pauseOnHover={true}>
         {
             data.map((image,index)=>
              <div key={index} className="mt-14 px-10 mx-8 hover:bg-mine-shaft-900 cursor-pointer">
                <img src={image} alt="" className="h-14" />
            </div>)
         } 
        </Marquee>
    </div>
  )

} 

export default Companies;