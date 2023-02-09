import Link from 'next/link';
import Styles from '../styles/Home.module.css';

export default function Custom404() {
    return (
        <>
        <div className={Styles.promoBanner}>
                <h1>PrismarineJS</h1>
                <h3>Sorry wrong url</h3>
        </div>
        <div className={Styles.main}>
            <h3><Link href="/">Go back to home</Link></h3>
            <p>
                We are sorry.
                <br />
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
        </div>
        </>
    )
};