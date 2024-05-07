import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white w-full text-balance">
            <div className="md:mx-[135px] mx-[15px]">
                <div className="flex justify-between mb-10 px-5 py-14 max-xs:grid-cols-1 max-xs:grid max-xs:text-center">
                    <div>
                        <h1 className="font-[700] text-[36px]">
                            Let’s Collaborate With Us
                        </h1>
                        <p className="font-[400] text-[16px]">
                            We can’t wait to make amazing project with you
                        </p>
                    </div>
                    <div className="flex justify-center items-center max-xs:mt-10">
                        <button className="flex justify-center items-center font-[700] text-[12px] text-black bg-gradient-to-r from-[#B57737] via-[#ECC974] to-[#F7D980] rounded-[75px] w-[150px] h-[50px] pt-[16px] pr-[32px] pb-[16px] pl-[32px]">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="grid  md:grid-cols-5 max-x:grid-cols-3 max-xs:grid-cols-1 gap-5 grid-cols-1 w-fit mx-auto">
                    <div>
                        <img src="/FooterLogo.png"></img>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <p>+0201150205454</p>
                        <p>+020123456789</p>
                        <p>info@limitless-link.com</p>
                    </div>
                    <div>
                        <h1>Service</h1>
                        <p>Product Design</p>
                        <p>Branding</p>
                        <p>Development</p>
                    </div>
                    <div>
                        <h1>Company</h1>
                        <p>About Us</p>
                        <p>Case</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <h1>Follow Us</h1>
                        <p>Facebook</p>
                        <p>Behance</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
