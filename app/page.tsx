import Link from "next/link";
import styles from "./page.module.scss";

const Home = () => {
	return (
		<main className={styles.root}>
			<Link href="test">Test</Link>
			Hello world!
		</main>
	)
}

export default Home