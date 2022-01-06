import styles from './css/styles.module.css'
import Link from 'next/link'
export default function FirstPost() {
    return (
        <>
            <h2>
                <Link href="/">
                    <a>Back to homepage</a>
                </Link>
            </h2>
            <h1 className={styles.top}>
                Code Editor 0.1 Attempt 1
            </h1>
            <textarea name="Code" cols="98" rows="13" className={styles.editor}>Type Code Here</textarea>

        </>
    )
}
