import Link from 'next/link';
import { MaintainerCard, ContributorCard } from '../components/github/index';
import Styles from '../styles/Home.module.scss';

export default function IndexPage(): JSX.Element {
    return (
        <>
            <div className={Styles.promoBanner}>
                <h1>PrismarineJS</h1>
                <h3>
                    Minecraft-compatible{' '}
                    <Link href="https://github.com/PrismarineJS/flying-squid">
                        server
                    </Link>
                    ,{' '}
                    <Link href="https://github.com/PrismarineJS/mineflayer">
                        bot
                    </Link>
                    , and{' '}
                    <Link href="https://github.com/PrismarineJS/node-minecraft-protocol">
                        API
                    </Link>
                    . All written in JavaScript.
                </h3>
                <Link href="https:github.com/PrismarineJS/">
                    Check out our GitHub
                </Link>
            </div>
            <div className={Styles.main}>
                <h2>Main projects</h2>
                <ul>
                    <li>
                        <Link href="https://prismarinejs.github.io/minecraft-data/">
                            Minecraft data
                        </Link>{' '}
                        : Language independent module providing minecraft data
                        for minecraft clients, servers and libraries.
                    </li>
                    <li>
                        <Link href="https://prismarinejs.github.io/mineflayer/">
                            Mineflayer
                        </Link>{' '}
                        : Create Minecraft bots with a powerful, stable, and
                        high level JavaScript API..
                    </li>
                    <li>
                        <Link href="https://prismarinejs.github.io/flying-squid/">
                            Flying-squid
                        </Link>{' '}
                        : Create Minecraft servers with a powerful, stable, and
                        high level JavaScript API.
                    </li>
                    <li>
                        <Link href="https://prismarinejs.github.io/node-minecraft-protocol/">
                            Minecraft protocol
                        </Link>{' '}
                        : Parse and serialize minecraft packets, plus
                        authentication and encryption..
                    </li>
                </ul>
                <h2>How to contribute</h2>
                <p>
                    Go to{' '}
                    <Link href="https://github.com/PrismarineJS/prismarine-contribute">
                        prismarine-contribute
                    </Link>{' '}
                    to learn more about the projects and start contributing !
                </p>
                <h2>Meet the Team</h2>
                <div className={Styles.team}>
                    <div>
                        <MaintainerCard />
                    </div>
                    <div>
                        <ContributorCard />
                    </div>
                </div>
            </div>
        </>
    );
}
