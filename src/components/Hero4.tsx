import React from 'react'

export const Hero4 = () => {
    return (
        <section className="mt-[125px]">
            <div className="flex justify-center items-center flex-col">
                <p className="font-[700] text-black text-opacity-50 mb-5">
                    OUR PROJECTS
                </p>
                <h1 className="font-[700] text-[30px] mb-12 text-center">
                    Our amazing work with various Industry
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-[30px] md:mx-[135px] gap-14 items-center justify-center">
                <img src="/Dummy 4.png" className="mx-auto" alt="Dummy 4" />
                <img src="/Dummy 5.png" className="mx-auto" alt="Dummy 5" />
                <img src="/Dummy 6.png" className="mx-auto" alt="Dummy 6" />
                <img src="/Dummy 7.png" className="mx-auto" alt="Dummy 7" />
            </div>
            <div className="flex justify-center items-center mt-10">
                <button className="w-[179px] h-[60px] rounded-[32px] border-[1px] border-[#F1F1F1]">
                    See All
                </button>
            </div>
        </section>
    )
}
