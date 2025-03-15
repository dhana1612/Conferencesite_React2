import React from 'react'

export default function HeroSection() {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-[90%] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto justify-center flex flex-col items-center place-self-center lg:col-span-7">
            <h1 class="py-10 max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-4xl text-center max-w-full lg:text-5xl font-semibold">International Conference on Computing, Networking, and Data Science</h1>
            {/* <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> */}
         
            <a href="#" class="inline-flex flex  items-center  px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Register Here
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
        </div>                
    </div>
    </section>
  )
}
