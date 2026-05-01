
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// ── Promo Section ──────────────────────────────────────────────────────────────
// Each item: { title, description, buttonLabel, buttonTo, imageSrc, imageAlt, reverse }
// Set reverse={true} to flip image to the left side.

const promoItems = [
    {
        title: 'Make Your First Game',
        description:
            'Never used a game engine before? No problem. This beginner-friendly series walks you through everything from installing Godot to building your first complete 3D game step by step, with no fluff.',
        buttonLabel: 'Beginner Course →',
        buttonTo: './docs/category/walking-sim',
        imageSrc: '/img/HomePage/firstGame.png',
        imageAlt: 'Beginner Course',
        reverse: false,
    },
    {
        title: 'More Tutorials',
        description:
            'This is my YouTube channel where I share Godot content focused on helping you bring your dream game to life. Join me and start building.',
        buttonLabel: 'Explore More Tutorials →',
        buttonTo: 'https://youtube.com/@godotsensei', 
        imageSrc: '/img/HomePage/yt.png',
        imageAlt: 'More Tutorials',
        reverse: true,
    },
];

export default function PromoSectionComponent() {
    return (
        <section className={styles.promoSection}>
            <div className="container">
                {promoItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={clsx(styles.promoRow, item.reverse && styles.promoRowReverse)}>
                        {/* Text side */}
                        <div className={styles.promoText}>
                            <Heading as="h2">{item.title}</Heading>
                            <p>{item.description}</p>
                            <Link className="button button--primary button--lg" to={item.buttonTo}>
                                {item.buttonLabel}
                            </Link>
                        </div>

                        {/* Image side */}
                        <div className={styles.promoImage}>
                            <img src={item.imageSrc} alt={item.imageAlt} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}