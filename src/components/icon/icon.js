import ReactIcon from './icons/react'
import Sass from './icons/sass'
import Magento from './icons/magento'
import TypescriptIcon from './icons/typescript'
import Github from './icons/github'
import Next from './icons/next'
import Node from './icons/node'
import JavaScriptIcon from './icons/javascript'
import Jquery from './icons/jquery'
import Tailwind from './icons/tailwind'
import Linkedin from './icons/linkedin'
import Mail from './icons/mail'

const icons = {
	ReactIcon: ReactIcon,
    Sass: Sass,
    Magento: Magento,
    TypescriptIcon: TypescriptIcon,
    Github: Github,
    Next: Next,
    Node: Node,
    JavaScriptIcon: JavaScriptIcon,
    Jquery: Jquery,
    Tailwind: Tailwind,
    Linkedin: Linkedin,
    Mail: Mail,
	document: "div",
}

function Icon({ type = null, ...rest }) {
	const IconComp = icons[type]

	if (!type || type === "") return null

	return <IconComp {...rest} />
}

export default Icon