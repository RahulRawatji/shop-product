export default function CategorySection({ data }) {
   
    return <div className="bg-slate-100 sticky top-10 mb-4 flex items-center pr-8">
        <div className="flex gap-6 overflow-scroll py-3 lg:w-[80%] m-auto ">
            {data.map(item => <CategoryCard cardInfo={item} />)}
        </div>
    </div>

}

function CategoryCard({ cardInfo }) {
    return <span className="font-semibold px-2 text-xs">{cardInfo.displayText}</span>
}