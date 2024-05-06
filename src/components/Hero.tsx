
import React from 'react'


export const Hero = () => {
    return (
        <section className="mb-[64px]">
            <div className="flex justify-center items-center flex-col md:flex-row">
                <div className="h-[366px] md:flex justify-between md:flex-col flex-row z-10">
                    <h1 className="text-[48px] md:text-wrap font-[700] text-center">
                        We help people with Creative process
                    </h1>
                    <p className="text-black text-opacity-50 text-[24px] leading-6 font-[100] text-center mt-6">
                        The process of how to present<br></br> our work neatly
                    </p>
                    <div className="flex justify-center items-center mt-12">
                        <button
                            type="button"
                            className="font-[700] text-[18px] text-black bg-gradient-to-r from-[#B57737] via-[#ECC974] to-[#F7D980] rounded-[75px] w-[221px] h-[70px] pt-[24px] pr-[48px] pb-[24px] pl-[48px]"
                        >
                            How it Works
                        </button>
                    </div>
                </div>
                <div className="md:relative hidden md:block">
                    <div className="w-[750px]">
                        <img
                            src="/Dummy2.png"
                            className="relative z-10 mx-auto rounded-lg md:w-[665px]"
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
                <div className='md:hidden mt-10'>
                    <img
                        src="/Dummy1.png"
                        className="relative z-10 mx-auto rounded-lg w-[343px] mr-[50px]"
                    />
                </div>
            </div>
            <div className="flex gap-5 items-end">
                <div className="bg-black bg-opacity-20 w-[250px] h-[1px] mb-3 mt-14 md:mt-0"></div>
                <div className="flex gap-5">
                    <img src="/be.png" />
                    <img src="/bb.png" />
                    <img src="/insta.png" />
                </div>
            </div>
        </section>
    )
}
