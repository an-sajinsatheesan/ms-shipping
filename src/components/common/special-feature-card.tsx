


const SpecialFeature = ({ heading }: any) => {
    return <>
        <div className=" border-4 border-t-[#FF9800] text-center p-3 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
            <h1 className='font-semibold mt-2.5 mb-3.5'>{heading.title}</h1>
            <h1 className='text-xs leading-7'>{heading.subTitle}</h1>
        </div>
    </>
}

export default SpecialFeature