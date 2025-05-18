
export const ColumnCard = ({ cardItem, onClick, isActive }: any) => {
    return <>
        {/* <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 py-1.5 flex gap-6 items-center z-[9] hover:shadow-md hover:border-gray-300 transition-all duration-200" onClick={() => onClick(cardItem.id)}>
            <div className={`w-[3.5px] h-[40px] rounded-lg ${isActive ? 'bg-[#FF9800]' : 'bg-red-700'}`}></div>
            <h1 className='text-sm'>{cardItem.title}</h1>
        </div> */}

        <div className={`rounded-lg drop-shadow-sm border ${isActive ? 'border-blue-300' : 'border-gray-100'} bg-gradient-to-r ${isActive ? 'from-blue-100 to-indigo-200' : 'bg-white'} text-gray-700 pr-6 pl-4 py-2 flex gap-4 items-center z-[9] ${isActive ? 'scale-100 shadow-md' : ''} hover:from-blue-100 hover:to-indigo-200 hover:shadow-md transition-all duration-200`} onClick={() => onClick(cardItem.id)}>
            <div className={`w-[4px] h-[40px] rounded-lg ${isActive ? 'bg-[#FF9800]' : 'bg-red-400'}`}></div>
            <h1 className='text-sm font-medium'>{cardItem.title}</h1>
        </div>

    </>
}
