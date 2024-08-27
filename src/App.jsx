import Container from "./components/ui/container"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "./components/ui/button"
import Bubble from "./components/bubble/bubble.jsx"
import CounterSection from "./components/counter"

function App() {
  return (
    <>
      <section className="relative  mt-[20vh] h-[60vh]">
        <Container>
          <div className="flex flex-col justify-start ml-[10vw] items-start h-full">
            <div className=" ">
              <h3 className='text-[#adadb1] text-sm font-normal'>İHSAN KÜCCÜK</h3>
            </div>
            <h1 className='text-[70px] text-[#2e344d] leading-8 mt-16 font-medium'>Bir Web Geliştirici </h1>
            <h1 className='text-[70px] text-[#2e344d] font-medium'>Front-End Developer </h1>
            <p className="max-w-[600px] text-start mt-12 text-base leading-7 ">Modern web teknolojileriyle  kullanıcı dostu, performanslı ve estetik arayüzler tasarlayan bir frontend developer'ım. Kodlamada yaratıcılığı ve fonksiyonelliği bir araya getirerek, her projede benzersiz deneyimler sunmayı hedefliyorum.</p>
          </div>
        </Container>
      </section>
      <section className="h-[100vh] flex items-center justify-center">
        <Bubble />
      </section>
      <section className="h-[100vh] flex items-center justify-center">
        <Container>
          <div>
            <span className="content-header" >Hakkımda</span>
            <p className="text">Modern web teknolojileriyle kullanıcı dostu, performanslı ve estetik arayüzler tasarlayan 22 yaşında bir frontend developer'ım. 3 yıllık deneyimimle, kodlamada yaratıcılığı ve fonksiyonelliği bir araya getirerek her projede benzersiz deneyimler sunmayı hedefliyorum. Bugüne kadar 10'dan fazla kurumsal web sitesi geliştirmesinde ve bakımında yer aldım. Ayrıca, 5'ten fazla projede aktif rol oynayarak, <strong>her biri için en iyi çözümleri sunmaya </strong> çalıştım. </p>
            <CounterSection />
          </div>
        </Container>
        ykkuy
      </section>
      {/* <section className="h-[100vh] flex items-center justify-center">
        <Container>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">...</CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">...</CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">...</CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">...</CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">...</CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </section> */}
      <section className="h-[100vh] flex items-center justify-start">
        <Container>
          <div>
            <span className="content-header" >İletişim</span>
            <h3 className="text-[40px] font-light text-[#2e344d] ">Herhangi bir proje sorgulama veya hakkında daha fazla bilgi için, <br /> lütfen iletişime geçmekten çekinmeyin.
            </h3>
            <div className="flex gap-9 items-center my-10">
              <Button variant="outline" >Github</Button>
              <Button variant="outline" >Instagram</Button>
            </div>
            <p>Ayrıca beni <a href="" className="transition ease-in-out delay-100 underline text-[#2e344d]  hover:text-[#0077b5]">Linkedin</a> ve <a href="" className="transition ease-in-out delay-100 underline text-[#2e344d] hover:text-[#c13584]">Instagram'dan</a> takip edebilirsiniz</p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default App
