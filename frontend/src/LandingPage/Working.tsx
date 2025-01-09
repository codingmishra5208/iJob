

const img="https://job-portal-seven-psi.vercel.app/Working/Girl.png";
const img2="https://png.pngtree.com/png-vector/20230209/ourmid/pngtree-notebook-icon-png-image_6591697.png";

const Working=()=>{
 return(
    <div className="mt-20 pb-5">
         <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
            How it <span className="text-bright-sun-400"> works </span>
            Category
         </div>
         <div className="text-lg mb-14 text-mine-shaft-300 text-center w-1/2 mx-auto">
           Effortlessely navigate through the process and land your dream job.</div>
            <div className="flex gap-5 px-24 justify-between items-center ">
                <div>
                    <img className="w-[30rem]" src={img} alt="" />
                </div>
                <div className="flex flex-col gap-5">

                <div className="">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-bright-sun-300 rounded-full">
                     <img className="w-12 h-12" src={img2} alt="" />
                    </div>
                    <div>
                     <div className="text-mine-shaft-200 text-xl font-semibold">Build your resume</div>
                     <div className="text-mine-shaft-300">Create a standout resume with your skills.</div>
                  </div>
                </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-bright-sun-300 rounded-full">
                     <img className="w-12 h-12" src={img2} alt="" />
                    </div>
                    <div>
                     <div className="text-mine-shaft-200 text-xl font-semibold">Apply for Job</div>
                     <div className="text-mine-shaft-300">Find and apply for jobs that match your skills.</div>
                  </div>
                </div>
                </div>

                <div className="">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-bright-sun-300 rounded-full">
                     <img className="w-12 h-12" src={img2} alt="" />
                    </div>
                    <div>
                     <div className="text-mine-shaft-200 text-xl font-semibold">Get hired</div>
                     <div className="text-mine-shaft-300">Connect with employers and start your new job.</div>
                  </div>
                </div>
                </div>
                </div>
            </div>
            
         </div>
        

 )

}
export default Working;