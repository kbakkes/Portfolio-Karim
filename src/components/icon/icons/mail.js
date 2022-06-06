import React from "react"

const Mail = ({ ...props }) => {
	return (     
        <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path fill="#fff" d="M512 16C238.064 16 16 238.064 16 512s222.064 496 496 496 496-222.064 496-496S785.936 16 512 16zM307.488 346.672l409.008 0c5.184 0 10.064 1.232 14.464 3.296l-196.688 138.064c-17.104 17.12-27.696 17.12-44.8 0l-196.608-137.984C297.328 347.936 302.24 346.672 307.488 346.672zM750.816 652.192c0 18.96-15.36 34.336-34.304 34.336L307.488 686.528c-18.944 0-34.304-15.376-34.304-34.336L273.184 391.296c0-1.728 0.256-3.376 0.512-5.024l201.92 143.312c20.096 20.112 52.688 20.112 72.784 0l201.92-143.312c0.24 1.648 0.512 3.296 0.512 5.024L750.832 652.192z"  />
		</svg>
	)
}

export default Mail
