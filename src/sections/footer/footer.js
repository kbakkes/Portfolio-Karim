import { motion } from "framer-motion";
import { glossary }  from '../../utils/glossary'; 
import './_footer.scss'
import Icon from '../../components/icon/icon';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__curve">
          <svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 116">
            <path className="cls-1" d="M0,59.74c80.12-23.67,200.49-53.13,318.75-56,28.15-.68,56,0,56,0,60,1.47,111.2,7.4,208.83,23,70.15,11.21,83.2,14.48,123.91,21a2107.32,2107.32,0,0,0,262.79,26,2032.81,2032.81,0,0,0,309.76-13v57c-.38,6.48-374.15.93-425,2l-10.42.2c-15.48.27-45.53.62-85,.06h0c-3.21,0-55.17-.12-159.08-.26,0,0-81.49-.11-147.27-.06l-44.26.06-19.74,0c-19.2,0-127.75,0-389.26,0v-60Z"/>
          </svg>
        </div>
        <div className="footer__content">
          <div>
          <h3 className="footer__title">Feel free to contact me</h3>
          <div className="footer__icons-list">
            <a href='https://github.com/kbakkes' target='_blank'>
              <Icon className="footer__icon" type='Github'/>
            </a>
            <a href='https://www.linkedin.com/in/karim-bakkes-586247b0' target='_blank'>
              <Icon className="footer__icon" type='Linkedin'/>
            </a>
            <a href='mailto:karim.bakkes@gmail.com'>
              <Icon className="footer__icon" type='Mail'/>
            </a>
            

          </div>
          </div>
          <div className="footer__copyright">© 2022 | Designed & Developed by <a href="https://github.com/kbakkes">Karim Bakkes</a>⚡️</div>
        </div>

    </div>
  );
}

export default Footer;
