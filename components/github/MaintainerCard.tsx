import maintainerDataJson from '../../data/maintainers.json';
import { GitHubProfile } from './UseGithubApi';
import Styles from './index.module.css';

export default  function MaintainerCard(): JSX.Element {
    const Content = () => {
        return (
            <>
            {maintainerDataJson.map((maintainer) => (
                <div key={maintainer.id} className={Styles.card}>
                    <GitHubProfile username={maintainer.username} />
                    {maintainer.extra? <p className={Styles.extra}>{maintainer.extra}</p>: null}
                </div>
            ))}
            </>
        );
    };

    return (
        <div>
        <h3>Maintainers</h3>
        <Content />
        </div>
    );
};