import React from 'react'

export const Hero2 = () => {
    return (
        <section>
            <div className="flex justify-center items-center flex-col mb-10 mt-4">
                <p className="text-black text-opacity-50 font-[700] text-[12px]">
                    HOW WE WORK
                </p>
                <h1 className="font-[700] text-[36px] text-center">
                    Let’s See How Creative Work
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:mx-[255px] mx-[30px] gap-14">
                <div className="flex flex-col items-center md:items-start mb-10">
                    <img className="mb-5" src="/d1.png" alt="Image 1" />
                    <h1 className="font-bold text-lg mb-5">Exchange ideas</h1>
                    <p className="text-sm text-black text-opacity-70">
                        Integer elementum viverra semper. Cras suscipit egestas
                        sem vel euismod. Cras turpis risus, efficitur eu lorem
                        ut, mattis imperdiet massa. Praesent tortor erat,
                        volutpat a cursus sed, volutpat eu justo.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start mb-10">
                    <img className="mb-5" src="/d2.png" alt="Image 2" />
                    <h1 className="font-bold text-lg mb-5">Marketing</h1>
                    <p className="text-sm text-black text-opacity-70">
                        Pellentesque non ipsum mauris. Vestibulum quis nulla
                        sagittis, venenatis nulla ut, mollis leo. Sed dignissim
                        orci arcu, nec volutpat quam lobortis et.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start mb-10">
                    <img className="mb-5" src="/d3.png" alt="Image 3" />
                    <h1 className="font-bold text-lg mb-5">Designing</h1>
                    <p className="text-sm text-black text-opacity-70">
                        Pellentesque non ipsum mauris. Vestibulum quis nulla
                        sagittis, venenatis nulla ut, mollis leo. Sed dignissim
                        orci arcu, nec volutpat quam lobortis et.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start mb-10">
                    <img className="mb-5" src="/d4.png" alt="Image 4" />
                    <h1 className="font-bold text-lg mb-5">Presentation</h1>
                    <p className="text-sm text-black text-opacity-70">
                        Integer elementum viverra semper. Cras suscipit egestas
                        sem vel euismod. Cras turpis risus, efficitur eu lorem
                        ut, mattis imperdiet massa. Praesent tortor erat,
                        volutpat a cursus sed, volutpat eu justo. Pellentesque
                        habitant morbi tristique senectus et.
                    </p>
                </div>
            </div>
        </section>
    )
}
