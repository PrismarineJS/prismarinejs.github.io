import Link from 'next/link'
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa'
import Styles from './index.module.css'

export default function Footer(): JSX.Element {
    return (
        <div className={Styles.social}>
            <Link href='https://twitter.com/prismarinejs'>
                <FaTwitter className={Styles.icon} />
            </Link>
            <Link href='https://discord.com/invite/GsEFRM8'>
                <FaDiscord className={Styles.icon} />
            </Link>
            <Link href='https://github.com/prismarinejs'>
                <FaGithub className={Styles.icon} />
            </Link>
        </div>
    )
};
