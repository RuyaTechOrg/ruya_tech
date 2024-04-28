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
            <h1 className="h1 mb-4">Education</h1>
            <p className="text-xl text-purple-600">""</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision</p>
          </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Tech - Journey</h1>
            <p className="text-xl text-purple-600">"Building and pioneering decentralized systems"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision</p>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Future Plans</h1>
            <p className="text-xl text-purple-600">"Building Quality Software to solve problems and handle tasks"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision</p>
          </div>
        </div>
      </div>
      <Footer/>
        </section>  
        </>
    )
}