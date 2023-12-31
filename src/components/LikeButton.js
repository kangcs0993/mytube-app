import { useState } from "react"

export default function LikeButton(){
    const [likes, setLikes] = useState(false)

	return(
		<>
			<svg	baseProfile="tiny"
					height="24px"
					id="Layer_1"
					version="1.2"
					viewBox="0 0 24 24"
					width="24px"
					style={{fill: likes ? "red": "black"}}
					onClick={() => setLikes(!likes)}
					// xml:space="preserve"
					xmlns="http://www.w3.org/2000/svg"
					// xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<path d="M19.57,8.676c-0.391-0.144-2.512-0.406-3.883-0.56C15.902,6.861,16,5.711,16,4.5C16,3.121,14.878,2,13.5,2S11,3.121,11,4.5  c0,1.875-0.666,2.738-1.616,3.699C8.836,7.477,7.977,7,7,7c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3  c0.755,0,1.438-0.29,1.965-0.752c0.064,0.062,0.117,0.141,0.188,0.193C10.113,19.177,12.82,20,15.001,20  c1.879,0,2.608-0.293,3.253-0.553c0.104-0.041,0.207-0.084,0.316-0.123c0.834-0.305,1.576-1.227,1.736-2.2l0.666-5.974  C21.145,10.113,20.529,9.025,19.57,8.676z M7,17c-0.551,0-1-0.448-1-1v-6c0-0.552,0.449-1,1-1s1,0.448,1,1v6C8,16.552,7.551,17,7,17  z M18.327,16.85c-0.037,0.224-0.292,0.541-0.443,0.596c-0.131,0.049-0.254,0.099-0.376,0.146C16.963,17.811,16.492,18,15,18  c-1.914,0-4.118-0.753-4.632-1.146C10.21,16.734,10,16.29,10,16v-4.98c0.003-0.047,0.051-0.656,0.707-1.312  C11.62,8.794,13,7.414,13,4.5C13,4.225,13.225,4,13.5,4S14,4.225,14,4.5c0,1.407-0.146,2.73-0.479,4.293l-0.297,1.396l1.321-0.188  c0.603,0.05,3.933,0.447,4.334,0.55c0.058,0.03,0.132,0.183,0.111,0.323L18.327,16.85z"/>
			</svg>
		</>
	)
}