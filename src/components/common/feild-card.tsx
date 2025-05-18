import Image from "next/image"



const FeildCard = ({ col, img, mainTitle, subTitle }: Feilds) => {
    return <>
        <div className="h-100">
            <div className={`${col} h-100 rounded-3xl text-center p-3 shadow-2xl shadow-gray-600/10 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2`}>
                <div className='items-center flex w-100 justify-center'>
                    <Image src={img} alt="ITC logo" width={40} height={40} className='fill-[#FF9800]' />
                </div>
                <h1 className='font-semibold mt-2.5 mb-3.5 h-8'>{mainTitle}</h1>
                <h1 className='text-xs leading-7'>{subTitle}</h1>
            </div>
        </div>
    </>
}

export default FeildCard