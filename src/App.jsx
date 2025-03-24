import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from "./components/ui/container"
import ExperienceSlider from "./components/experienceSlider"
import { Button } from "./components/ui/button"
import Bubble from "./components/bubble/bubble.jsx"
import CounterSection from "./components/counter"

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const triggerElement = document.querySelector('.section');
    const triggerHeight = triggerElement.offsetHeight;
    const threshold = 0.2 * triggerHeight;

    gsap.to('.plane', {
      x: -700,
      y: 500,
      scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
      }
    });

    gsap.to('.plane', {
      rotation: 10,
      scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
        onUpdate: (self) => {
          const currentScroll = self.scroll();
          console.log('Current Scroll:', currentScroll);

          if (currentScroll > threshold) {
            self.disable(false);
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <section className="section relative h-[100vh]">
        <Container>
          <div className="flex flex-col justify-start ml-[10vw] pt-[20vh] items-start h-full">
            <div className=" ">
              <h3 className='text-[#adadb1] text-sm font-normal'>İHSAN KÜCCÜK</h3>
            </div>
            <h1 className='text-[70px] text-[#2e344d] leading-8 mt-16 font-medium'>Bir Web Geliştirici </h1>
            <h1 className='text-[70px] text-[#2e344d] font-medium'>Front-End Developer </h1>
            <p className="max-w-[600px] text-start mt-12 text-base leading-7 ">Modern web teknolojileriyle kullanıcı dostu, performanslı ve estetik arayüzler tasarlayan bir frontend developer'ım. Kodlamada yaratıcılığı ve fonksiyonelliği bir araya getirerek, her projede benzersiz deneyimler sunmayı hedefliyorum.</p>
            <img src="/plane.svg" alt="" className='plane absolute w-[100px] h-[100px] right-[10vw] top-[40vh] -rotate-[100deg]' />
          </div>
        </Container>
      </section>
      <section className="section h-[100vh] items-center flex justify-center">
        <Bubble />
      </section>
      <section className="section h-[100vh] items-center flex justify-center">
        <Container>
          <div>
            <span className="content-header" >Hakkımda</span>
            <p className="text">Modern web teknolojileriyle kullanıcı dostu, performanslı ve estetik arayüzler tasarlayan 22 yaşında bir frontend developer'ım. 3 yıllık deneyimimle, kodlamada yaratıcılığı ve fonksiyonelliği bir araya getirerek her projede benzersiz deneyimler sunmayı hedefliyorum. Bugüne kadar 10'dan fazla kurumsal web sitesi geliştirmesinde ve bakımında yer aldım. Ayrıca, 5'ten fazla projede aktif rol oynayarak, <strong>her biri için en iyi çözümleri sunmaya </strong> çalıştım. </p>
            <CounterSection />
          </div>
        </Container>
      </section>
      <section className="section h-[100vh] items-center flex justify-center">
        <Container>
          <div className="mb-10">
            <span className="content-header" >İletişim</span>
            <h3 className="text-[40px] font-light text-[#2e344d] ">Birlikte çalıştığım markalarla dijital dünyayı şekillendiriyorum.
            </h3>
            <p className="max-w-[800px] text-start mt-12 text-base leading-7 ">Çalıştığım şirkette ve freelance olarak, markaların web sitelerini oluşturmaktan sürekli gelişimlerine kadar her aşamada katkı sağladım. Her proje, markaların çevrimiçi varlıklarını güçlendirmek ve kullanıcılarına benzersiz deneyimler sunmak üzerine kuruldu.</p>
          </div>
          <ExperienceSlider />
        </Container>
      </section>
      <section className="section h-[100vh] items-center flex justify-center">
        <Container>
          <div>
            <span className="content-header" >İletişim</span>
            <h3 className="text-[40px] font-light text-[#2e344d] ">Herhangi bir proje sorgulama veya hakkında daha fazla bilgi için, <br /> lütfen iletişime geçmekten çekinmeyin.
            </h3>
            <div className="flex gap-9  my-10">
              <Button variant="outline" >Github</Button>
              <Button variant="outline" >Instagram</Button>
            </div>
            <p>Ayrıca beni <a href="" className="transition ease-in-out delay-100 underline text-[#2e344d]  hover:text-[#0077b5]">Linkedin</a> ve <a href="" className="transition ease-in-out delay-100 underline text-[#2e344d] hover:text-[#c13584]">Instagram'dan</a> takip edebilirsiniz</p>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default App
