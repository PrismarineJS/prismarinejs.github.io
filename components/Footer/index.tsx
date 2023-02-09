import Link from 'next/link'
import Styles from './index.module.css'
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa'

export default function Footer(): JSX.Element {
    return (
        <div className={Styles.social}>
            <Link href='https://twitter.com/prismarinejs'>
                <FaTwitter className={Styles.icon} />
            </Link>
            <Link href=''>
                <FaDiscord className={Styles.icon} />
            </Link>
            <Link href='https://github.com/prismarinejs'>
                <FaGithub className={Styles.icon} />
            </Link>
        </div>
    )
};
