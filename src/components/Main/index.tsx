import React, { FC } from 'react'
import './main.css'

export const Main: FC = ({ children }) => {
    return (
        <main className='PageContent'>
            {children}
        </main>
    )
}
