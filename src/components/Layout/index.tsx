import { FC } from "react";
import { Header, Footer, Aside } from './components';

export const Layout: FC = ({ children }) => {
    return (
        <>
            <div className="Wrapper">
                <Header />
                <Aside />
                {children}
                <Footer />
            </div>
        </>
    )
}
