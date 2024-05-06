
import React from 'react'


export const Hero = () => {
    return (
        <section className="mb-[64px]">
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
                <div className="relative">
                    <div className="w-[750px]">
                        <img
                            src="/Dummy1.png"
                            width={665}
                            className="relative z-10 mx-auto rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/Dummyprop1.png"
                            className="absolute bottom-10 left-0 z-0"
                        />
                    </div>
                    <div>
                        <img
                            src="/Dummyprop2.png"
                            className="absolute bottom-10 left-[-160px] z-20"
                        />
                    </div>
                    <div>
                        <img
                            src="/Dummyprop3.png"
                            className="absolute top-[-90px] left-[250px] z-20"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 items-end">
                <div className="bg-black bg-opacity-20 w-[350px] h-[1px] mb-3"></div>
                <div className="flex gap-5">
                    <img src="/be.png" />
                    <img src="/bb.png" />
                    <img src="/insta.png" />
                </div>
            </div>
        </section>
    )
}
