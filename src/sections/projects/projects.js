import { motion } from "framer-motion"
import './_projects.scss';
import Project from './../../components/project/project';
import { projects }  from './../../utils/glossary'; 




function Projects() {

const getProjectCards = (projects) => {
return  projects.map((project,index) => {
    return <Project project={project}  key={project.key} name={project.name} image={project.image}/>
  })
};

  return (
    <section id='projects' className="projects">
        <h3 className="projects__sub-title">Projects & Work</h3>
        <h2 className="projects__title">A selection of projects I've worked on</h2>
        <motion.div
    animate={{ scale: [0.8,1] }}
    transition={{ duration: 0.5 }}
    
  >
        <div className='projects__list'>
          {getProjectCards(projects)}
          </div>
          </motion.div>
        </section>
  );
}

export default Projects;
