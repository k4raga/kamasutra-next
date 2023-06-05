import Image from "next/image";
import s from "./page.module.css";

export default function Home() {
	return (
		<main className={s.main}>
			<section className={s.header}>Шапка</section>
			<section className={s.navbar}>Навигация</section>
			<section className={s.content}>Контент</section>
			<section className={s.footer}>Футер</section>
		</main>
	);
}
