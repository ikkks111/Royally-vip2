import React from 'react';
import FAQ from './FAQ/FAQ';
import ScreenSix from './screeen-six/ScreenSix';
import ScreenFive from './screen-five/ScreenFive';
import ScreenFour from './screen-four/ScreenFour';
import ScreenOne from './screen-one/ScreenOne';
import ScreenThree from './screen-three/ScreenThree';
import ScreenTwo from './screen-two/ScreenTwo';
import Footer from './footer/Footer';
import Routers from './Routes/Routes';

const App = () => {
  return (
    <>
    {/* <ScreenOne />
    <ScreenTwo />
    <ScreenThree />
   <ScreenFour />
     <ScreenFive />
    <ScreenSix />
    <FAQ />
    <Footer/> */}
    <Routers/>
    {/* <Home/> */}
    </>
  );
};

export default App;