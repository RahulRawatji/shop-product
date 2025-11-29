export default function CategorySection({ data }) {
   
    return <div className="bg-slate-100 sticky top-10 mb-4 flex items-center pr-8 z-10">
        <div className="flex gap-6 overflow-scroll py-3 lg:w-[80%] m-auto ">
            {data.map(item => <CategoryCard cardInfo={item} />)}
        </div>
    </div>

}

function CategoryCard({ cardInfo }) {
    return <span className="font-semibold px-2 text-xs cursor-pointer hover:scale-110 hover:text-gray-500">{cardInfo.displayText}</span>
}