import Footer from "@/components/ui/footer"
import Image from 'next/image'
import Link from "next/link";

import TestimonialImage01 from '@/public/images/streemhub1.png';
import TestimonialImage02 from '@/public/images/streemhub2.png';
import TestimonialImage06 from '@/public/images/streemhub3.png';
import TestimonialImage03 from '@/public/images/Screenshot Capture - 2024-04-24 - 23-13-27.png';
import TestimonialImage04 from '@/public/images/Screenshot Capture - 2024-04-25 - 13-51-08.png';
import TestimonialImage05 from '@/public/images/Screenshot Capture - 2024-04-25 - 13-54-15.png';
export const metadata =  {
    title : 'Products  - Ruyatech',
    description : 'Page description',
}

export default function DevPage () {
    return (
        <>
        <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Products</h1>
            <p className="text-xl text-white">Hi there, in this page you'll find a list of projects that i have worked on over the years as i progressed as a software Engineer.
            Through these projects i have mastered my skills as a software Engineer / UI UX Designer. You'll find projects partaining the Designs, Mobile & Web Applications, Arduino related Projects, Some Internet of Things related Projects, Web 3 (Smartcontracts) Projects and lot's more.
            I hope you find these projects interesting and perhaps some of these skills might be of importance to you.
            </p>
          </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">1. Gumonda</h1>
            <p className="text-xl text-purple-600">Website for Startup Platform -Gumonda</p>
            <p className="text-xl text-white pb-5">
              Gumonda is a website for a startup Company. Built this site on nextjs, react,typescript and tailwind css.
              Through this project i have strengthened my Frontend and backend skills.
            </p>
            <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <h4 className="text-white">See code on Github</h4>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <Image src={TestimonialImage03} alt="product img" className="pb-5"/>
                <cite className="text-gray-200 not-italic">Gumonda.</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Visit..</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              <Image src={TestimonialImage04} alt="product img"/>
                {/* <cite className="text-gray-200 not-italic">Gumonda.</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">coming soon...</a> */}
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <Image src={TestimonialImage05} alt="product img"/>
                {/* <cite className="text-gray-200 not-italic">Gumonda.</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">coming soon...</a> */}
              </div>
            </div>

          </div>

        </div>
      </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">2. Streemhub</h1>
            <p className="text-xl text-purple-600">"Decentralised Fundraiser Platform"</p>
            <p className="text-xl text-white pb-5">A decentralised fundraising platform, where users can create campaigns and receive funds via the decentralised network.
            Campaigners can receive funds in several supported crypto currencies, such as - Ethereum, Solana, BitCoin, Tron, e.t.c.
            Aid Plug is user friendly and prioritises anonymosity amongst other customer preferred features. Simple Connect your wallet and begin receiving funds in your preferred cryto currency from benefactors
            </p>
            <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <h4 className="text-white">See code on Github</h4>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <Image src={TestimonialImage01} alt="product img" className="pb-5"/>
                <cite className="text-gray-200 not-italic">Streemhub.</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Visit...</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              <Image src={TestimonialImage02} alt="product img"/>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              <Image src={TestimonialImage06} alt="product img"/>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">3. CrytoWall</h1>
            <p className="text-xl text-purple-600">"Crypto Wallet App"</p>
            <p className="text-xl text-white pb-5">"“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision"</p>
            <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <h4 className="text-white">See code on Github</h4>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">NILM - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">3. CrytoWall</h1>
            <p className="text-xl text-purple-600">"Crypto Wallet App"</p>
            <p className="text-xl text-white pb-5">"“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision"</p>
            <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <h4 className="text-white">See code on Github</h4>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">NILM - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              </div>
            </div>

          </div>

        </div>
      </div>
        <Footer/>
        </div>
        </div>
        </section>
        </>
    )
}