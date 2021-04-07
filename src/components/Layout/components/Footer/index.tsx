import { FC } from 'react';
import { Link } from "react-router-dom";
import { Github, Linkedin } from 'react-bootstrap-icons'
import "./footer.css";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="d-flex m-3">
                <div className="text-start pt-2 w-100 ">
                    <b> De Lio Griselda &nbsp; {new Date().getFullYear()}</b>
                    <div className='fw-lighter'>
                        <small>Built on top of React and TypeScript. <br /> Data provided by TMDb</small>
                    </div>
                </div>
                <div>
                    <Link className="size" to={"https://github.com/griseldadelio"}>
                        <Github />
                    </Link>
                </div>
                <div>
                    <Link className="size" to={"www.linkedin.com/in/griseldadelio"}>
                        <Linkedin />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export { Footer }