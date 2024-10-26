import  "./hero-section.scss";
import Button from '../button/button';

const heroSection = () => {
    return (
        <section className="banner-section">
            <p className="banner-title">Build sites faster with copy-ready <span className="text-span-blue-300">components</span></p>
            <p className="banner-description">Build faster with accessible, copy-ready components designed for flexibility and usability. Focus on creating great experiences, not repetitive coding.</p>
            <Button text="Discover Components" mode="solid" size="large" theme="blue-200"/>
        </section>
    )
}

export default heroSection;