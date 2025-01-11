import Marquee from "react-fast-marquee";

const data=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
    "https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35Tjphq1NeKZNVeCM2YOlUHJH0HHm_fzC1g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjZ4z0flEQrOr3iE11EcKbCB2uqiwpuEznQ&s",
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