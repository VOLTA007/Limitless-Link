import React from 'react'
import { Dummy1 } from '@/svg/Dummy1'
import { Bg } from '@/svg/bg'
import { Bb } from '@/svg/Bb'
import { Intsa } from '@/svg/Intsa'

export const Hero = () => {
    return (
        <section className='mb-[64px]'>
            <div className="flex justify-center items-center">
                <div className="h-[366px] flex justify-between flex-col z-10">
                    <h1 className="text-[48px] text-balance font-[700]">
                        We help people with<br></br>Creative process
                    </h1>
                    <p className="text-black text-opacity-50 text-[24px] leading-6 font-[100]">
                        The process of how to present<br></br> our work neatly
                    </p>
                    <button
                        type="button"
                        className="font-[700] text-[18px] text-black bg-gradient-to-r from-[#B57737] via-[#ECC974] to-[#F7D980] rounded-[75px] w-[221px] h-[70px] pt-[24px] pr-[48px] pb-[24px] pl-[48px]"
                    >
                        How it Works
                    </button>
                </div>
                <div>
                    <Dummy1 />
                </div>
            </div>
            <div className="flex gap-5 items-end">
                <div className="bg-black bg-opacity-20 w-[350px] h-[1px] mb-3"></div>
                <div className="flex gap-5">
                    <Bg />
                    <Bb />
                    <Intsa />
                </div>
            </div>
        </section>
    )
}
