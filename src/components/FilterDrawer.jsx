import { Button, Drawer, Select, Tabs, Checkbox } from 'antd';
import { useState } from 'react';

import { FaSort } from "react-icons/fa6";
import { useStore } from '../store/store';

export default function FilterDrawer() {
    const [showDrawer, setShowDrawer] = useState(false);
    const { setFilterValue } = useStore(state => state);

    function sortClickHandler(value) {
        setShowDrawer(false);
        setFilterValue(value)
    }

    const tabsItem = [
        {
    key: '1',
    label: 'Category',
    children: <div className='flex flex-col gap-2'>
                <Checkbox>Footwear</Checkbox>
                <Checkbox>Apparal</Checkbox>
            </div>,
  },
  {
    key: '2',
    label: 'Gender',
    children: <div className='flex flex-col gap-2'>
            <Checkbox>Men</Checkbox>
            <Checkbox>Women</Checkbox>
            <Checkbox>Kids</Checkbox>
        </div>,
  },
  {
    key: '3',
    label: 'Size',
    children: <div className='flex flex-col gap-2'>
            <Checkbox>XL</Checkbox>
            <Checkbox>L</Checkbox>
            <Checkbox>M</Checkbox>
            <Checkbox>S</Checkbox>
            <Checkbox>XS</Checkbox>
        </div>,
  },
    ]

    function onTabClickHandler(){

    }

    const drawerFooter = (<div className='flex  justify-between items-center'>
        <p className='font-semibold font-sans'>Sort By</p>
        <Select
            className='w-[140px]'
            defaultValue="recom"
            onChange={(value) => sortClickHandler(value)}
            options={[
                {
                    value: 'price',
                    label: 'Price',
                },
                {
                    value: 'recom',
                    label: 'Recommended',
                },
                {
                    value: 'char',
                    label: 'Alphabet [A-Z]',
                },
            ]}
        />
    </div>)

    return <>
        <div className='fixed bottom-0 w-full z-10 px-3 py-4  bg-gray-200 hidden lg:block'>
            <div className='flex gap-2 items-center'>
                <span className='font-semibold font-mono'>Sort By:</span>
                <div className='flex'>
                <Button type="link" className='p-0' onClick={()=>sortClickHandler('price')}>Price</Button>
                <Button type="link" className="p-0" onClick={()=>sortClickHandler('char')}>Alphabet [A-Z]</Button>
                  <Button type="link"onClick={()=>sortClickHandler('recom')}>Recommended</Button>
                  </div>
            </div>
        </div>
        <div className='fixed bottom-8 left-[36%] md:left-[45%] lg:hidden'>

            <Button className='px-3 py-2 bg-gray-300 bordered' title='Filter and Sort' onClick={() => setShowDrawer(true)}>
                <FaSort size={18} className='text-md' />
                Filter and Sort
            </Button>

            <Drawer
                title="Filter and Sort Products"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => setShowDrawer(false)}
                open={showDrawer}
                footer={drawerFooter}
            >
               <div className='flex h-full '>
                    <div className='flex flex-col gap-2 h-full pr-5'>
                        <Tabs tabPlacement="start" defaultActiveKey="1" items={tabsItem} onChange={onTabClickHandler} />
                    </div>
               </div>
            </Drawer>
        </div>
    </>
}