import Link from "next/link";
import Image from "next/image";
import aboutImgSrc from "../../public/images/hero-image-01.jpg";
import Footer from "@/components/ui/footer";

export const metadata = {
    title: 'About - RuyaTech',
    description: 'Page Description',
  }

export default function AboutUs() {
    return(
        <>
        <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h3 mb-4">About</h1>
            <p className="text-l text-purple-600">"What we do? and how we do them?"</p>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">Hi there, My name is <strong className="text-purple-500">ARUYA EMMANUEL OHIOMA</strong> a.k.a<strong className="text-purple-500"> RuyaTech</strong>, I am a software Engineer hailing from Nigeria. I have always been fascinated by the software and programming, and by virtue of that fascination i worked towards becomming one.
              Over the years i have acquired a ton of software development skills.i have studied on how to be a proper programmer and how to write clean and very functional programs.
              I have  programmed in languages such as JavaScript,Python & Dart. I have built interfaces with frameworks such as React and Reactnative and even flutter.
              I am 21years of age, Currently studying for a bachelors degree in mechatronics Engineering. I continue to learn and develope as a software Developer and look forward to what adventures the future of software has in store for me.
              </p>
          </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h3 mb-4">Education</h1>
            <p className="text-xl text-purple-600">"Educational Progress through the years"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">
              I attended primary school at Apex Nursery and primary School,Nigeria. from <strong className="text-purple-500">2004 - 2010</strong>.
              Soon after i began secondary school at Federal Government College Malali Kaduna. I went through Jss1 - Jss3. My family and I  had to relocate. I then at to finish  the remaining three years of my secondary school Education
              at Federal Government College Ibillo, Edo state Nigeria<strong className="text-purple-500"> (2018)</strong>.
              I am currently studying for bachelors degree for<strong className="text-purple-500"> Mechatronics Engineering</strong> at University of Benin, Edo State Nigeria. <strong>Currently in my fourth year</strong>
            </p>
          </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h3 mb-4">Tech - Journey</h1>
            <p className="text-xl text-purple-600">"For as long as i could remember, I have always to loved to code"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">I've always wanted to code for as long as i realised programming was a thing.
            But i started coding for real just before secondary school ended (2018). I started learing HTMl, CSS , Javascript and then react. Built a couple of projects and soon after i moved into mobile app developement. I have always liked to challenge myself.... 
            I started learning mobile app development using reactnative, soon after i interned for a company - <strong className="text-purple-500">HavocWeb Tech(2022 -2023)</strong>.
            I learnt alot about mobile app development whilst working on a couple of projects.<strong className="text-purple-500">(MobylWallet)</strong>.
            I then worked on a couple of projects with other startups with the sole-intent of gaining experience. I once worked on a mobile application <strong className="text-purple-500">Paywave</strong> using flutter. Whilst i found the technology a bit strange and new, i soon got the hang of it and before i long i was very good with flutter.
            Overall, Although the journey wasn't easy i have gained alot of programming experience over the years.
            Now i mostly worked on projects to challenge myself and improve my coding skills.
            </p>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Future Plans</h1>
            <p className="text-xl text-purple-600">"What plans lied ahead of me"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">
              In the next 5  years or there about i hope to find myself having alot fun, both as programmer and life in general.
              I hope to have challenge myself and escaped my comfort zones. I hope to have built whatever i want to using my skills as a developer and programmer.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
        </section>  
        </>
    )
}