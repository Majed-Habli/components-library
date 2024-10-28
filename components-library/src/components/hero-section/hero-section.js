import  "./hero-section.scss";
import LinkButton from '../link-button/link-button';
import IconButton from '../icon-button/icon-button';
import TextIconButton from '../text-icon-button/text-icon-button';
import Button from '../button/button';

const heroSection = () => {
    return (
        <section className="banner-section">
            {/* <p className="banner-title">Build sites faster with copy-ready <span className="text-span-blue-500">components</span></p>
            <p className="banner-description">Build faster with accessible, copy-ready components designed for flexibility and usability. Focus on creating great experiences, not repetitive coding.</p> */}
            {/* <LinkButton text="Discover Components" mode="solid" size="large" theme="blue-500" href="#"/> */}
            <div style={{padding: '5px', gap: '5px', display: 'flex', alignItems: 'center'}}>
                link button
                <LinkButton text="button" mode="outlined" size="small" href="#" theme="blue-400"/>
                <LinkButton text="button" mode="solid" size="medium" href="#" theme="blue-400"/>
                <LinkButton text="button" mode="text" size="large" href="#" theme="blue-400"/>
                <LinkButton text="button" mode="outlined" size="small" href="#"/>
                <LinkButton text="button" mode="solid" size="medium" href="#"/>
                <LinkButton text="button" mode="text" size="large" href="#"/>
            </div>
            <div style={{padding: '5px', gap: '5px', display: 'flex', alignItems: 'center'}}>
                button
                <Button text="Discover" mode="outlined" size="small" theme="blue-400" />
                <Button text="Discover" mode="solid" size="medium" theme="blue-400" />
                <Button text="Discover" mode="text" size="large" theme="blue-400" />
                <Button text="Discover" mode="outlined" size="small"/>
                <Button text="Discover" mode="solid" size="medium"/>
                <Button text="Discover" mode="text" size="large"/>
            </div>
            <div style={{padding: '5px', gap: '5px', display: 'flex', alignItems: 'center'}}>
                text icon button
                <TextIconButton text="button" mode="outlined" size="small" trailingIcon="ArrowLongRightIcon" theme="blue-400"/>
                <TextIconButton text="button" mode="solid" size="medium" trailingIcon="ArrowLongRightIcon" theme="blue-400"/>
                <TextIconButton text="button" mode="text" size="large" trailingIcon="ArrowLongRightIcon" theme="blue-400"/>
                <TextIconButton text="button" mode="outlined" size="small" trailingIcon="ArrowLongRightIcon"/>
                <TextIconButton text="button" mode="solid" size="medium" trailingIcon="ArrowLongRightIcon"/>
                <TextIconButton text="button" mode="text" size="large" trailingIcon="ArrowLongRightIcon"/>
            </div>
            <div style={{padding: '5px', gap: '5px', display: 'flex', alignItems: 'center'}}>
                icon button
                <IconButton iconName="ArrowLongRightIcon" size="small"  mode="outlined" theme="blue-400"/>
                <IconButton iconName="ArrowLongRightIcon" size="medium"  mode="solid" theme="blue-400"/>
                <IconButton iconName="ArrowLongRightIcon" size="large"  mode="text" theme="blue-400"/>
                <IconButton iconName="ArrowLongRightIcon" size="small"  mode="outlined" theme="blue-400"/>
                <IconButton iconName="ArrowLongRightIcon" size="medium"  mode="solid" theme="blue-400"/>
                <IconButton iconName="ArrowLongRightIcon" size="large"  mode="text" theme="blue-400"/>
            </div>
        </section>
    )
}

export default heroSection;