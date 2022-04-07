module.exports = {
	content: ["./pages/**/*.{tsx,jsx}", "./src/**/*.{tsx,tsx}"],
	theme: {
		screens: {
			little: "200px",
			xs: "300px",
			425: "425px",
			tab: "540px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
			"3xl": "2560px",
		},
		extend: {
			fontFamily: {
				sans: ['"Dosis"', "sans-serif"],
			},
			colors: {
				gray: {
					10: "#6B7280",
					20: "#33546D",
					30: "#7393B3",
				},

				green: {
					10: "#F4FFDC",
					20: "#E9FF99",
					30: "#B1FF05",
					40: "#00ED64",
					50: "#00AA57",
					60: "#00684A",
					70: "#014E3D",
					80: "#023430",
				},
				blue: {
					20: "#33546D",
					30: "#4d4dff",
					40: "#00BCD7",
					80: "#001E2B",
				},
				black: {
					40: "#4B5563",
					70: "#5d6c74",
					80: "#001E2B",
				},
				red: {
					20: "#F74356",
				},
				brown: {
					20: "#F5F5F5",
				},
			},
			backgroundImage: {
				mannequinn: "url('/img/mannequin.svg')",
				expectrum: "url('/img/expectrum.png')",
				cart: "url('/img/cart.png')",
				hero: "url('/img/hero.png')",
				picture: "url('/img/picture.png')",
			},
		},
	},
	variants: {},
	plugins: [],
};
