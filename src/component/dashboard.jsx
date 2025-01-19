
import 'chart.js/auto';
import { useState } from 'react';
import Sidebar from './Sidebar';



export default function Dashboard({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div>
            <div className="flex">

                <Sidebar isShow={showSidebar} />
                <div className='flex-1'>
                    <div className='h-10 p-2'>
                        <button className='btn hover:btn-accent' onClick={() => setShowSidebar(!showSidebar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                    </div>

                    {/* Main Content */}
                    <main className="flex-1 p-8 overflow-hidden">
                        {/* Header */}
                        {children}

                    </main>
                </div>
            </div >
        </div >
    )
}



