module.exports = {
	content: ["./pages/**/*.{tsx,jsx}", "./src/**/*.{tsx,tsx}"],
	theme: {
		screens: {
			little: "200px",
			xs: "300px",
			320: "320px",
			375: "375px",
			425: "425px",
			tab: "540px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1366px",
			"3xl": "1440px",
			"4xl": "2560px",
		},
		extend: {
			gridRow: {
				"span-7": "span 7 / span 7",
			},
			gridTemplateRows: {
				15: "repeat(15, minmax(0, 1fr))",
			},

			colors: {
				black: {
					10: "#3A3A3A",
					20: "#425466",
					30: "#0A2540",
					40: "#364657",
				},
				blue: {
					10: "#635BFF",
					20: "#00D4FF",
				},
				gray: {
					10: "#ADBDCC",
					20: "#8898AA",
					30: "#F6F9FC",
				},
				gradient: {
					0: "#A960EE",
					1: "#FF333D",
					2: "#90E0FF",
					3: "FFCB57",
				},
				gradientTransparent: {
					0: "rgba(169,96,238,0)",
					1: "rgba(255,51,61,0)",
					2: "rgba(144,224,255,0)",
					3: "rgba(255,203,87,0)",
				},
			},
			backgroundImage: {
				globe: "url('/img/globe.png')",
				picture: "url('/img/picture.png')",
			},
		},
	},
	variants: {},
	plugins: [],
};
