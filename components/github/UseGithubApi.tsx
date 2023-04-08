import { useState, useEffect } from 'react';
import Link from 'next/link';
import Styles from './index.module.scss';

interface Props {
    username: string;
}

interface User {
    avatar_url: string;
    html_url: string;
    name: string;
}

export const GitHubProfile: React.FC<Props> = ({ username }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );
            const data = await response.json();
            setUser(data);
        }

        fetchData();
    }, [username]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <img
                className={Styles.img}
                src={user.avatar_url}
                alt={`${user.name}'s profile picture`}
            />
            <Link href={user.html_url} className={Styles.github_username}>
                @{user.name ? user.name : username}
            </Link>
        </>
    );
};
