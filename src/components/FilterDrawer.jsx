import { Button, Drawer, Select } from 'antd';
import { useState } from 'react';

import { FaSort } from "react-icons/fa6";
import { useStore } from '../store/store';

export default function FilterDrawer() {
    const [showDrawer, setShowDrawer] = useState(false);
    const { setFilterValue } = useStore(state => state);

    function sortClickHandler(value){
        setShowDrawer(false);
        setFilterValue(value)
    }

    const drawerFooter = (<div className='flex  justify-between items-center'>
        <p className='font-semibold font-sans'>Sort By</p>
        <Select
            className='w-[140px]'
            defaultValue="recom"
            onChange={(value)=>sortClickHandler(value)}
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

    return <div className='fixed bottom-8 left-[36%] md:left-[45%] lg:hidden'>

        <Button className='px-3 py-2 bg-gray-300 bordered' title='Filter and Sort' onClick={() => setShowDrawer(true)}>
            <FaSort size={18} className='text-md'/>
            Filter and Sort
        </Button>

        <Drawer
            title="Filter and Sort Products"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={() => setShowDrawer(false)}
            open={showDrawer}
            footer={drawerFooter}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </div>
}