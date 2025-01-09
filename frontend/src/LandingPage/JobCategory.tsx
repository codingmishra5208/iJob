import { Carousel } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const data = [
   {
      id: 1,
      name: "digital marketing",
      image: '/digital.png',
      title: "1k+ job posted",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
   },
   {
      id: 1,
      name: "digital marketing",
      image: '/digital.png',
      title: "1k+ job posted",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
   },
   {
      id: 1,
      name: "digital marketing",
      image: '/digital.png',
      title: "1k+ job posted",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
   },
   {
      id: 1,
      name: "digital marketing",
      image: '/digital.png',
      title: "1k+ job posted",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
   },
   {
      id: 1,
      name: "digital marketing",
      image: '/digital.png',
      title: "1k+ job posted",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
   },
   {
      id: 1,
      name: "digital marketing",
      image: '/digital.png',
      title: "1k+ job posted",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
   }
  
];

const JobCategory = () => {
   return (
      <div className="mt-20 pb-5">
         <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
            Browse <span className="text-bright-sun-400">jobs </span>
            Category
         </div>
         <div className="text-lg mb-14 text-mine-shaft-300 text-center w-1/2 mx-auto">
            Explore diverse job opportunities tailored to your skills. Start your career journey today!
         </div>

         <Carousel slideSize="22%" slideGap="md" loop className='focus-visible:[&_button]:!outline-none
          [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:opacity-0
           hover:[&_button]:opacity-100'
          nextControlIcon={<IconArrowRight className='h-8 w-8' />}
          previousControlIcon={<IconArrowLeft className='h-8 w-8' />}>
            {
               data.map((item) => (
                  <Carousel.Slide key={item.id}>
                     <div className="flex flex-col items-center w-64 gap-2 border
                      border-bright-sun-400 p-5  hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300 rounded-xl ">
                        <div className="p-2 bg-bright-sun-300 rounded-full">
                           <img src={item.image} className="w-10 h-10" alt={item.name} />
                        </div>
                        <div className="text-mine-shaft-100 text-lg font-semibold">{item.name}</div>
                        <div className="text-sm text-center text-mine-shaft-300">{item.desc}</div>
                        <div className="text-bright-sun-300 text-lg">{item.title}</div>
                     </div>
                  </Carousel.Slide>
               ))
            }
         </Carousel>
      </div>
   );
}

export default JobCategory;