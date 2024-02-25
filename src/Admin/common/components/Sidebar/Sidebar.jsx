import React, { useState } from 'react'

function Sidebar() {
    const [isOpen,setIsOpen] = useState(true);
    const handleDrawer = () => {
        setIsOpen(prevState => !prevState);
    } 
    return (
        <div className=''>
        {!isOpen && <button onClick={handleDrawer} 
            class="fixed left-8 bg-slate-800 text-slate-100 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>}
        {isOpen && <nav className="fixed z-10 h-screen bg-slate-800 w-72 text-slate-100 p-8">
            <button onClick={handleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </nav>}
    </div>
    )
}

export default Sidebar