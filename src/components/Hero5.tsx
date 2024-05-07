import React from 'react'

export const Hero5 = () => {
    return (
        <section className="mt-[125px]">
            <div className="flex justify-center items-center">
                <h1 className="font-[700] text-[30px] mb-4">Why Hire Us?</h1>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 md:mx-[235px] gap-6 mx-[35px] text-balance mb-4">
                <div className="border-[1px] border-[#F1F1F1] px-4 py-4 rounded-[25px]">
                    <img
                        src="/crown_Dummy..png"
                        className="w-[32px] h-[32px]"
                    ></img>
                    <h1>Our Talent Team</h1>
                    <p>
                        We are very proud of a reliable and professional team in
                        their fields, with at least 5 years of experience
                    </p>
                </div>
                <div className="border-[1px] border-[#F1F1F1] px-4 py-4 rounded-[25px]">
                    <img
                        src="/pentool_Dummy..png"
                        className="w-[32px] h-[32px]"
                    ></img>
                    <h1>Design From Skratch</h1>
                    <p>
                        We understand that every business has a different target
                        market and vision, for that we adjust it for your
                        business
                    </p>
                </div>
                <div className="border-[1px] border-[#F1F1F1] px-4 py-4 rounded-[25px]">
                    <img
                        src="/cost_Dummy..png"
                        className="w-[32px] h-[32px]"
                    ></img>
                    <h1>Flexible Cost</h1>
                    <p>
                        Wth the design from sketch, for that we also adjust the
                        price and needs for you
                    </p>
                </div>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 md:mx-[235px] gap-6 mx-[35px] text-balance">
                <div className="border-[1px] border-[#F1F1F1] px-4 py-4 rounded-[25px]">
                    <img
                        src="/people_Dummy..png"
                        className="w-[32px] h-[32px]"
                    ></img>
                    <h1>Marketing Team</h1>
                    <p>Our team is active in collaboration and communication</p>
                </div>
                <div className="border-[1px] border-[#F1F1F1] px-4 py-4 rounded-[25px]">
                    <img
                        src="/handle__Dummy..png"
                        className="w-[32px] h-[32px]"
                    ></img>
                    <h1>Reliability</h1>
                    <p>
                        Our team is reliable to manage whole process from
                        acquiring clients
                    </p>
                </div>
            </div>
        </section>
    )
}
