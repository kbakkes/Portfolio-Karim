import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import parse from 'html-react-parser';
import './_project.scss';
import './_project-modal.scss';

function Project(props) {
  const [isVisible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const node = useRef();


  useEffect(() => {
    if(props.project.content){
      setContent(String(props.project.content));  
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);



  const handleClick = e => {
    if (!node.current.contains(e.target)) {
      setVisible(false);
      return;
    }
  };

  const openModal = () => {
    if(!isVisible){
      setVisible(true);
    }
  }

  return (
  <>
    <motion.div className="project"onTap={() => openModal()}  ref={node}>
      <img className="project__image" alt={props.name } src={props.image} />
            <h3 className="project__name">{props.name}</h3>
            <div className='project__tag-list'>
                {props.project.tags.map(tag => {
                  return (<div key={tag} className='project__tag'>{tag}</div>)
                })}
            </div>
            <AnimatePresence>
              {isVisible && (
                        <motion.div
                        className='project-modal'
                            style={{
                                borderRadius: 15,
                            }}
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            id={props.project.key}
                        >
                    
                      <h3 className="project-modal__title">{props.project.name}</h3>
                      <div className='project-modal__content'>
                        <div className="project-modal__text">{parse(content)}</div>
                        <div className='project-modal__tag-list'>
                          {props.project.tags.map(tag => {
                            return (<div className='project-modal__tag'>{tag}</div>)
                          })}
                        </div>
                      </div>
                      
                      <img className="project-modal__image" alt={props.name} src={props.image} />
                      
                    </motion.div>
                    )}
            </AnimatePresence>
    </motion.div>
    {isVisible && <div className='modal-overlay' />}
    </>
  );
}

export default Project;
