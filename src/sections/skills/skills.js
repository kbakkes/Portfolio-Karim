import parse from 'html-react-parser';
import Skill from '../../components/skill/skill';
import './_skills.scss';
import { glossary, skills } from './../../utils/glossary';

function Skills() {
  return (
    <section id="skills" className="skills">
        <h3 className="skills__sub-title">{glossary.skills_title}</h3>
        <h2 className="skills__title">{glossary.skills_subtitle}</h2>
        <div className="skills__content">
          <div className="skills__text">
              {parse(glossary.skills_text)}
          </div>
          <div className="skills__bubbles">
            {skills.map(skill => {
              return (<Skill icon={skill} key={skill} size={0.6} />)
            })}
          </div>
        </div>
    </section>
  );
}

export default Skills;
