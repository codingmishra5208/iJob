import { createTheme, MantineProvider } from '@mantine/core';
import './index.css'
import HomePage from './Pages/HomePage';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentspage from './Pages/FindTalentspage';
import UploadJob from './Pages/UploadJob';
import JobDescriptionPage from './Pages/JobDescriptionPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import Signup from './SignupLogin/Signup';
import SignupPage from './Pages/SignupPage';
import ProfilePage from './Pages/ProfilePage';

function App(){
  const theme = createTheme({
     focusRing:"never",
     fontFamily:'Poppins,sans-serif',
     primaryColor:'brightSun',
     primaryShade:4,
     colors:{
      'brightSun':
      ['#fffbeb','#fff3c6','#ffd149','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c'
        ,'#7a330d','#461902'
      ],
       'mineShaft': ['#f6f6f6','#e7e7e7','#d1d1d1','##b0b0b0','#888888','#6d6d6d','#5d5d5d'
        ,'#4f4f4f','#3d3d3d','#2d2d2d'],
     },
      
  })
 return(
      <MantineProvider defaultColorScheme='dark' theme={theme}>
         <BrowserRouter>
          <Header/>
         <Routes>
         <Route path="/find-jobs" element={<FindJobs/>} />
          <Route path='/find-talent' element={<FindTalentspage/>}  />
           <Route path='/jobs' element={<JobDescriptionPage/>} />
           <Route path='/apply-job' element={<ApplyJobPage/>} />
           <Route path="/signup" element={<SignupPage/>} />
            <Route path='/login' element={<SignupPage/>} />
             <Route path='/profile' element={<ProfilePage/>} />
           <Route path='/upload-job' element={<UploadJob/>} />
          <Route path='/' element={<HomePage/>} />
         </Routes>
          <Footer/>
        </BrowserRouter>
      </MantineProvider>
   
 )
}
export default App;
