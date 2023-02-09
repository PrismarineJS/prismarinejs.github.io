import Link from 'next/link';
import Styles from '../styles/Home.module.css';
import { MaintainerCard, ContributorCard } from '../components/github/index';

export default function IndexPage() {
    return (
        <>
            <div className={Styles.promoBanner}>
                <h1>PrismarineJS</h1>
                <h3>Minecraft-compatible <Link href='https://github.com/PrismarineJS/flying-squid'>server</Link>, <Link href='https://github.com/PrismarineJS/mineflayer'>bot</Link>, and <Link href='https://github.com/PrismarineJS/node-minecraft-protocol'>API</Link>. All written in JavaScript.</h3>
                <Link href="https:github.com/PrismarineJS/">Check out our GitHub</Link>
            </div>
            <div className={Styles.main}>
                <h2>Main projects</h2>
                <ul>
                    <li>
                        <Link href="https://minecraft-data.prismarine.js.org/">Minecraft data</Link> : Language independent module providing minecraft data for minecraft clients, servers and libraries.
                    </li>
                    <li>
                        <Link href="https://mineflayer.prismarine.js.org/">Mineflayer</Link> : Create Minecraft bots with a powerful, stable, and high level JavaScript API..
                    </li>
                    <li>
                        <Link href="https://flying-squid.prismarine.js.org/">Flying-squid</Link> : Create Minecraft servers with a powerful, stable, and high level JavaScript API.
                    </li>
                    <li>
                        <Link href="https://node-minecraft-protocol.prismarine.js.org/">Minecraft protocol</Link> : Parse and serialize minecraft packets, plus authentication and encryption..
                    </li>
                </ul>
                <h2>How to contribute</h2>
                <p>Go to <Link href="https://github.com/PrismarineJS/prismarine-contribute">prismarine-contribute</Link> to learn more about the projects and start contributing !</p>
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