import React from 'react'
import ProfileCard from '../Data/Profilecard'
import { Layoutwrapper } from '../Layout/Layoutwrapper'

export const Dashboard = () => {
    return (
        <Layoutwrapper>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 pb-3 mx-auto justify-center flex-wrap">
                <ProfileCard />
            </div>
        </Layoutwrapper>
    )
}
