import React from 'react'

const ToolBar = () => {
  return (
    <header className='flex justify-between items-center p-3 pb-1'>
                
                <img src="https://cdn-icons-png.flaticon.com/128/2991/2991108.png" className='h-14 p-2' alt="" />
                <div className=' flex-grow justify-content items-center '>
                    <div >
                        <div className='flex space-x-4'>
                            <h2 className='print ' >Untitled Document</h2>
                            <div className='flex space-x-3'>
                                <img className='h-4 m-1' src="https://cdn-icons-png.flaticon.com/128/2902/2902475.png" alt="" />
                                <img className='h-4 m-1' src="https://cdn-icons-png.flaticon.com/128/6941/6941431.png" alt="" />
                                <img className='h-4 m-1' src="https://cdn-icons-png.flaticon.com/128/2319/2319168.png" alt="" />
                            </div>

                        </div>

                        <div className='flex items-center text-sm space-x-1 -ml-1 h8 text-gray-600'>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>File</p>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>Edit</p>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>View</p>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>Insert</p>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>Format</p>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>Tools</p>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>Extensions</p>
                            <p className='cursor-pointer hover:bg-[#ebebee] p-2 trasiton duration-200 ease-out rounded-lg'>Help</p>
                        </div>
                    </div>
                </div>
                <div className='flex place-items-end justify-between items-center '>
                    
                    <div className='md:inline-flex rounded-full bg-white h-10 w-10 m-2 cursor-pointer hover:bg-[#ebebee]'>
                        <button className='p-2'  ><img src="https://cdn-icons-png.flaticon.com/128/7183/7183278.png" alt="" /></button>
                    </div>
                    <div className='flex md:inline-flex items-center justify-between rounded-full h-10 w-16 m-2 bg-white cursor-pointer hover:bg-[#ebebee]'>
                        <button className=' w-10 p-2 flex' ><img src="https://cdn-icons-png.flaticon.com/128/5346/5346453.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/128/25/25243.png" alt="" className='h-2 ml-2 items-center mt-2 space-x-2' />
                            </button>
                    </div>
                    <div className='flex space-x-4'>
                        <button className='flex  md:inline-flex h-10 justify-content items-center bg-sky-200  hover:bg-[#b2d7ef] hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3)] pl-2 pr-2 rounded-3xl' aria-label='Private to only me' >
                            <img className='h-4' src="https://cdn-icons-png.flaticon.com/128/10421/10421346.png" alt="" /> Share</button>
                        <img src="https://m.media-amazon.com/images/I/71azOmQbOYL._SY879_.jpg" className='cursor-pointer h-8 w-8 rounded-full' alt="" />
                    </div>

                </div>
            </header>
  )
}

export default ToolBar