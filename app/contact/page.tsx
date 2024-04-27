import Footer from "@/components/ui/footer"

export const metadata =  {
    title : 'Contact Page  - Gumonda',
    description : 'Page description',
}

export default function Web3Page () {
    return (
        <>
       <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20 pt-60 md:pb-60">
            <h1 className="h1 mb-4 text-center">This page is under Development.....</h1>
            {/* <p className="text-xl text-green-600">"What we do? and how we do them?"</p> */}
          </div>
        <Footer/>
        </div>
        </div>
        </section>
        </>
    )
}