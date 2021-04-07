import { FC } from "react";
import { Header, Footer, Aside } from './components';
import './layout.css'

export const Layout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <div className="Layout-Container">
                <Aside />
                {children}
                <Footer />
            </div>
        </>
    )
}
