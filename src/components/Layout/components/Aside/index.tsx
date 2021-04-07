import React from 'react'

export const Aside = () => {
    return (
        <aside className="Search">
            <form>
                <input type="search" className="Search-Input" placeholder="Search for a movie..." aria-label="Input movie name" value=""></input>
                <button type="button" className="Search-Clear" aria-label="Clear search"></button>
            </form>
        </aside>
    )
}
