import { Avatar, Rating } from "@mantine/core";

const img="https://job-portal-seven-psi.vercel.app/avatar.png";

const data=[
    {
        "img":"https://job-portal-seven-psi.vercel.app/avatar.png",
        "name":"Shivam patel",
        "rating":5,
        "testimonial":"This job portal made job search easy and quick. Recommended to all job seeker!"
    },
    {
        "img":"https://job-portal-seven-psi.vercel.app/avatar.png",
        "name":"Shivam patel",
        "rating":5,
        "testimonial":"This job portal made job search easy and quick. Recommended to all job seeker!"
    },
    {
        "img":"https://job-portal-seven-psi.vercel.app/avatar.png",
        "name":"Shivam patel",
        "rating":5,
        "testimonial":"This job portal made job search easy and quick. Recommended to all job seeker!"
    },
    {
        "img":"https://job-portal-seven-psi.vercel.app/avatar.png",
        "name":"Shivam patel",
        "rating":5,
        "testimonial":"This job portal made job search easy and quick. Recommended to all job seeker!"
    }

]

const Testimonial=()=>{
  return(
    <div className="mt-20 pb-5">
    <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
       What's <span className="text-bright-sun-400"> User </span>
       says about us
    </div>
     <div className="flex justify-evenly items-center py-10">
     {
        data.map((item,key)=>
            <div key={key} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 py-3 px-3 rounded-xl">
        <div className="flex gap-3 items-center">
          <Avatar src={item.img} alt="" />
            <div>
               <div className="text-lg text-mine-shaft-100 font-semibold">{item.name}</div>
               <Rating value={item.rating} fractions={2} readOnly />
            </div>
         </div>
        <div className="text-mine-shaft-300 text-sm">{item.testimonial}</div>
      </div>
        )
     }
     </div>
       
    </div>

  )

}

export default Testimonial;