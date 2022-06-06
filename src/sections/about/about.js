import parse from 'html-react-parser';
import './_about.scss';
import { glossary } from './../../utils/glossary';

function About() {
  return (
    <section id="about" className="about">
        <h3 className="about__sub-title">{glossary.about_subtitle}</h3>
        <h2 className="about__title">{glossary.about_title}</h2>
            <div className="about__content">
                <div className="about__text">
                {parse(glossary.about_text)}
                </div>  
                <img className="about__image" src={glossary.landing_image} />
            </div>
    </section>
  );
}

export default About;
