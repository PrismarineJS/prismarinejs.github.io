import Link from 'next/link';
import Styles from '../styles/Custom404.module.scss';

export default function Custom404(): JSX.Element {
    return (
        <>
            <div className={Styles.promoBanner}>
                <h1>PrismarineJS</h1>
                <h3>Sorry wrong url</h3>
            </div>
            <div className={Styles.main}>
                <div>
                    <h3>
                        <Link href="/">Go back to home</Link>
                    </h3>
                    <p>
                        We are sorry.
                        <br />
                        The page you are looking for might have been removed,
                        had its name changed, or is temporarily unavailable.
                    </p>
                </div>
                <svg
                    enable-background="new 0 0 32 32"
                    height="256px"
                    viewBox="0 0 32 32"
                    width="256px"
                >
                    <g>
                        <g>
                            <g>
                                <g>
                                    <circle
                                        cx="7.5"
                                        cy="5.5"
                                        fill="#417e38"
                                        r="0.5"
                                    />
                                    <circle
                                        cx="5.5"
                                        cy="5.5"
                                        fill="#d07912"
                                        r="0.5"
                                    />
                                    <circle
                                        cx="3.5"
                                        cy="5.5"
                                        fill="#f65354"
                                        r="0.5"
                                    />
                                    <path
                                        d="M30.5,8h-29C1.224,8,1,7.776,1,7.5S1.224,7,1.5,7h29C30.776,7,31,7.224,31,7.5S30.776,8,30.5,8z"
                                        fill="var(--text)"
                                    />
                                    <path
                                        d="M29.5,29h-27C1.673,29,1,28.327,1,27.5v-23C1,3.673,1.673,3,2.5,3h27C30.327,3,31,3.673,31,4.5v23      C31,28.327,30.327,29,29.5,29z M2.5,4C2.224,4,2,4.225,2,4.5v23C2,27.775,2.224,28,2.5,28h27c0.276,0,0.5-0.225,0.5-0.5v-23      C30,4.225,29.776,4,29.5,4H2.5z"
                                        fill="var(--text)"
                                    />
                                </g>
                            </g>
                        </g>
                        <g>
                            <path
                                d="M24.5,24c-0.276,0-0.5-0.224-0.5-0.5V21h-3.5c-0.163,0-0.315-0.079-0.409-0.212s-0.117-0.303-0.062-0.456    l2.5-7C22.6,13.133,22.789,13,23,13h1.5c0.276,0,0.5,0.224,0.5,0.5V20h0.5c0.276,0,0.5,0.224,0.5,0.5S25.776,21,25.5,21H25v2.5    C25,23.776,24.776,24,24.5,24z M21.209,20H24v-6h-0.647L21.209,20z"
                                fill="var(--text)"
                            />
                            <path
                                d="M10.5,24c-0.276,0-0.5-0.224-0.5-0.5V21H6.5c-0.163,0-0.315-0.079-0.409-0.212s-0.117-0.303-0.062-0.456    l2.5-7C8.6,13.133,8.789,13,9,13h1.5c0.276,0,0.5,0.224,0.5,0.5V20h0.5c0.276,0,0.5,0.224,0.5,0.5S11.776,21,11.5,21H11v2.5    C11,23.776,10.776,24,10.5,24z M7.209,20H10v-6H9.353L7.209,20z"
                                fill="var(--text)"
                            />
                            <path
                                d="M17.5,24h-3c-0.827,0-1.5-0.673-1.5-1.5v-8c0-0.827,0.673-1.5,1.5-1.5h3c0.827,0,1.5,0.673,1.5,1.5v8    C19,23.327,18.327,24,17.5,24z M14.5,14c-0.276,0-0.5,0.225-0.5,0.5v8c0,0.275,0.224,0.5,0.5,0.5h3c0.276,0,0.5-0.225,0.5-0.5v-8    c0-0.275-0.224-0.5-0.5-0.5H14.5z"
                                fill="var(--text)"
                            />
                        </g>
                    </g>
                </svg>
            </div>
        </>
    );
}
