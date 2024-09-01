import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BgImage from "./assets/bg.png";
import Equipments from './components/Equipments/Equipments';
import Banner from './components/Banner/Banner';
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from './components/Tab/TabComp';
import Testimonials from './Testimonials/Testimonials';
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import MiniFooter from './components/Mini/Mini';


const BannerData = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "Taking care of yourself is essential for maintaining a balanced and fulfilling life. It goes beyond just physical health; it encompasses mental, emotional, and social well-being. Prioritizing self-care helps you manage stress, increase productivity, and improve overall happiness. Engaging in regular exercise, eating nutritious foods, and getting adequate rest are foundational elements. Additionally, nurturing your mental health through activities that bring joy, practicing mindfulness, and seeking support when needed are equally important. Remember, investing time in self-care not only benefits you but also enhances your ability to support and connect with others.",
  link: "/www.google.com",
};
const Banner2Data = {
  image: Img2,
  title: "The Importance of Self-Care Through Yoga",
  subtitle:
    "Yoga teaches us that self-care is not just about addressing physical needs but also nurturing our mind and spirit. Through regular practice, we cultivate balance, flexibility, and strength, which extend beyond the mat and into our daily lives. Yoga encourages us to listen to our bodies, practice mindfulness, and find inner peace. It helps manage stress, improve mental clarity, and foster emotional resilience. Embracing yoga as a self-care practice means dedicating time to breathwork, meditation, and movement, which collectively contribute to holistic well-being. Remember, a consistent yoga practice enhances not only physical health but also promotes a deeper connection with oneself and a more harmonious life.",
  link: "#",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};


const App = () => {
  return (
    <div className='overflow-x-hidden'>
       <div style={bgStyle}>
        <Navbar/>
        <Hero/>
       </div>
       <Equipments/>
       <Banner {... BannerData}/>
       <TabComp/>
       <Banner {...Banner2Data} />
       
       <Testimonials/>
       <Banner2 />
       <Footer/>
       <MiniFooter/>
    </div>
  )
}

export default App
