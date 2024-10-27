import  "./hero-section.scss";
import Button from '../button/button';
import LinkButton from '../button/link-button';

const heroSection = () => {
    return (
        <section className="banner-section">
            <p className="banner-title">Build sites faster with copy-ready <span className="text-span-blue-500">components</span></p>
            <p className="banner-description">Build faster with accessible, copy-ready components designed for flexibility and usability. Focus on creating great experiences, not repetitive coding.</p>
            <LinkButton text="Discover Components" mode="solid" size="large" theme="blue-500" href="#"/>
        </section>
    )
}

export default heroSection;