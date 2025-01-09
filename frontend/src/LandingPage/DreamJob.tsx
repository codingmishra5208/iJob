import { TextInput } from '@mantine/core';
import {IconSearch}   from "@tabler/icons-react";
import { Avatar } from '@mantine/core';


const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100">Find your <span className="text-bright-sun-400">dream</span> <span className="text-bright-sun-400">job</span> with us</div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good company. Start explore thousands of job
          in one place.
        </div>

        <div className='flex gap-3 '>
        <TextInput  
         className='bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
        label="Job Title"
       variant="unstyled"
       placeholder="Software Engineer"
    />
          <TextInput 
       className='bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
       label="Job Type"
       variant="unstyled" 
       placeholder="Full time"
    />

      <div className='flex itemsd-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer'>
        <IconSearch className='h-[85%] w-[85%]' />
      </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
         <div className="w-[30rem] relative">
        <img src="Png (2).png" alt="" />
         <div className='w-fit border-bright-sun-400 border -right-10 rounded-lg p-2 backdrop-blur-md top-[50%] absolute '>
            <div className='text-center mb-1 text-sm text-mine-shaft-100 '>10K got job</div>
            <Avatar.Group>
      <Avatar src="avatar2.png" />
      <Avatar src="avatar3.png" />
      <Avatar src="avatar4.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
            </div>
             <div className='w-fit border-bright-sun-400 border -left-10 rounded-lg p-2 backdrop-blur-md top-[25%] absolute gap-3 flex flex-col'>
                <div className='flex gap-2 items-center'>
                  <div className='w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg'>
                    <img src="google2 (2).png" alt="" />
                  </div>
                   <div className='text-sm text-mine-shaft-100'>
                     <div>Software Enginner</div>
                     <div className='text-mine-shaft-200 text-xs'>New York</div>
                   </div>
                </div>
                <div className='flex gap-2 text-mine-shaft-200 text-xs justify-around'>
                    <span>1 day ago</span>
                    <span>120 Applicants</span>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};
export default DreamJob;
