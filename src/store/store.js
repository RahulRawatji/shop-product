import { create } from 'zustand'

export const useStore = create((set,get) => ({
    storeData:[],
    filterValue: '',
    storeTempData:[],
    categoryData:[],
    page:1,
    setFilterValue:(value)=>set((state)=>{
        let temp =[];
        if(value=='price'){
            temp = get().storeTempData.sort((a,b)=>a.products[0].prices.currentPrice-b.products[0].prices.currentPrice)
        }
        if(value == "char"){
             temp = get().storeTempData.sort((a,b)=>a.products[0].copy.title.localeCompare(b.products[0].copy.title))
        }
        if(value =='recom'){
              temp = get().storeTempData.sort((a,b)=>a.products[0].groupKey.localeCompare(b.products[0].groupKey))
        }
        return {...state,filterValue:value,storeTempData:temp}
    }),
    setStoreData: (value) => set((state)=>({...state, storeData:value, storeTempData:value.slice(0,10)})),
    setcategoryData: (value) => set((state)=>({...state, categoryData:value})),
    setTempData:()=>set((state)=>{
        const tempData = get().storeData.slice(0,get().page*10);
        return {...state,storeTempData:tempData}
    }),
    updatePage:()=>set(state=>({...state, page:get().page+1}))
}))