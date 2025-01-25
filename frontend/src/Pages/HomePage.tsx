import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonial from "../LandingPage/Testimonial";
import Working from "../LandingPage/Working";


const HomePage = () => {
  return (
    <div className="min-h-[50vh] bg-mine-shaft-950 font-['poppins']">
        <DreamJob/>
         <JobCategory/>
          <Companies/>
          <Working/>
           <Testimonial/>
            <Subscribe/> 
    </div>
  )
}

export default HomePage