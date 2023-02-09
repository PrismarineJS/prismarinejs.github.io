import contributorDataJson from '../../data/contributors.json';
import { GitHubProfile } from './UseGithubApi';
import Styles from './index.module.css';

export default function MaintainerCard(): JSX.Element {
    const Content = () => {
        return (
            <>
            {contributorDataJson.map((contributors) => (
                <div key={contributors.id} className={Styles.card}>
                    <GitHubProfile username={contributors.username} />
                    {contributors.extra? <p className={Styles.extra}>{contributors.extra}</p>: null}
                </div>
            ))}
            </>
        );
    };

    return(
        <>
        <h3>Contributors</h3>
        <Content />
        </>
    );
};