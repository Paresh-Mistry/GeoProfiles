import React, { useEffect, useState } from 'react'
import ProfileCard from '../Data/Profilecard'
import { Layoutwrapper } from '../Layout/Layoutwrapper'
import SkeletonCard from '../Data/SkeletonCard'
import { FaSearch } from 'react-icons/fa'

export const Dashboard = () => {

    const [Loading, setLoading] = useState(false)
    const [searchvalue, setsearchvalue] = useState()
    const [search, setsearch] = useState(false)

    const OnSearching = () =>{
        setsearch(!search)
    }

    useEffect(() => {
        setLoading(true)
    }, [])

    return (
        <Layoutwrapper>
            <div className="px-4 sm:px-6 md:px-24 mx-auto">
                <div className='flex justify-between  py-2 md:py-4'>
                    <div>
                        <h1 className='font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl font-sanserif text-gray-600'>User Data</h1>
                    </div>
                    <div className='flex gap-2'>
                    {search && <input className='border active:border-white rounded-l-full rounded-r px-4 w-40 text-sm' type="search" id="" onChange={e=> setsearchvalue(e.target.value)} value={searchvalue} placeholder='Search User' />}
                    <button className='md:px-4 px-2 py-2 border rounded mr-1' onClick={()=>OnSearching()}><FaSearch /></button>
                    </div>
                </div>
                <div className='grid  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3'>
                    {Loading ? <ProfileCard search={searchvalue}/> : <SkeletonCard />}
                </div>
            </div>
        </Layoutwrapper>
    )
}
