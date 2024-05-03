"use client"
import { FormEvent,useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 pt-40">Message Sent <strong className='text-green-500'>Successfully!</strong> We'll get back to you soon!!!</h1>
          </div>


        <Link href={"/"} className='text-center'><h3 className='text-center underline hover:text-purple-500'>Back to Homepage</h3></Link>     


</div>
</div>
</section>
  )
}
