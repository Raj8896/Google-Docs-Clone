import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className='flex mt-2 md:flex-col md:flex-grow items-end  space-y-8'>
                <button className='md:inline-flex rounded-full bg-white h-6 w-6 m-2 cursor-pointer'>
                    <img className=' cursor-pointer h-6 w-6 rounded-full' src="https://cdn-icons-png.flaticon.com/128/5968/5968499.png" alt="" />
                </button>
                <button className='md:inline-flex rounded-full bg-white h-6 w-6 m-2 cursor-pointer'>
                    <img className=' cursor-pointer h-6 w-6 rounded-full' src="https://cdn-icons-png.flaticon.com/128/5968/5968545.png" alt="" />
                </button>
                <button className='md:inline-flex rounded-full bg-white h-6 w-6 m-2 cursor-pointer'>
                    <img className=' cursor-pointer h-6 w-6 rounded-full' src="https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2" alt="" />
                </button>
                <button className='md:inline-flex rounded-full bg-white h-6 w-6 m-2 cursor-pointer'>
                    <img className=' cursor-pointer h-6 w-6 rounded-full' src="https://cdn-1.webcatalog.io/catalog/google-contacts/google-contacts-icon-filled-256.png?v=1675614168513" alt="" />
                </button>
                <button className='md:inline-flex rounded-full bg-white h-6 w-6 m-2 cursor-pointer'>
                    <img className=' cursor-pointer h-6 w-6 rounded-full' src="https://cdn-icons-png.flaticon.com/128/2642/2642502.png" alt="" />
                </button>
                <button className='md:inline-flex rounded-full bg-white h-6 w-6 m-2 cursor-pointer'>
                    <img className=' cursor-pointer h-6 w-6 p-1  mt-16 rounded-full' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="" />
                </button>
            </div>
        </div>

    )
}

export default Sidebar