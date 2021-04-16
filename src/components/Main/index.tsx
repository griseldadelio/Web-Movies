import React, { FC, ReactNode } from 'react'
import './main.css'

interface Props {
    className?: string;
    children?: ReactNode;
}

export const Main: FC<Props> = ({ className, children }) => {
    return (
        <main className='PageContent'>
            {children}
        </main>
    )
}
