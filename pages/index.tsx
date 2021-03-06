import Head from 'next/head'
import Image from 'next/image'
import Landing from "../components/Landing";
import Mission from "../components/Mission";
import ICON_GAME from "../assets/title-game.png";
import ICON_WECHAT from "../assets/wechat-game.png";
import styles from '../styles/Home.module.css'

const Home: React.FC<{}> = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>TD-H5-Demo</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<div className={styles.icon_game}>
					<Image src={ICON_GAME} alt="天涯明月刀 手游" width={108} height={37} />
				</div>
				<div className={styles.icon_wechat}>
					<Image src={ICON_WECHAT} alt="微信游戏 专属" width={96} height={23} />
				</div>
			</header>
			<main className={styles.main}>
				<Landing />
				<Mission />
			</main>
		</div>
	)
}

export default Home;
