export interface techType {
   icon: any;
   title: string;
   description: any;
}

export const techs = [
	{
		icon: (
			<svg
				className="text-[18px] h-24 w-24"
				width="96"
				height="96"
				preserveAspectRatio="xMinYMin"
				viewBox="0 0 96 96"
				xmlns="http://www.w3.org/2000/svg"
				data-js-controller="NodesIcon">
				<defs>
					<path
						id="nodesIconSegment"
						d="M20 41.15l9.7 5.55a1.5 1.5 0 0 1 0 2.6L20 54.85v-13.7z"></path>
					<circle id="nodesIconDot" cx="34" cy="48" r="6"></circle>
					<clipPath id="nodesIconClipPath">
						<use
							className="NodesIcon__dot"
							href="#nodesIconDot"
							x="0"
							y="-24"
							data-js-target-list="NodesIcon.clipPathDots"></use>
						<use
							className="NodesIcon__dot"
							href="#nodesIconDot"
							x="21"
							y="-12"
							data-js-target-list="NodesIcon.clipPathDots"></use>
						<use
							className="NodesIcon__dot"
							href="#nodesIconDot"
							x="21"
							y="12"
							data-js-target-list="NodesIcon.clipPathDots"></use>
						<use
							className="NodesIcon__dot"
							href="#nodesIconDot"
							x="0"
							y="24"
							data-js-target-list="NodesIcon.clipPathDots"></use>
						<use
							className="NodesIcon__dot"
							href="#nodesIconDot"
							x="-21"
							y="12"
							data-js-target-list="NodesIcon.clipPathDots"></use>
						<use
							className="NodesIcon__dot"
							href="#nodesIconDot"
							x="-21"
							y="-12"
							data-js-target-list="NodesIcon.clipPathDots"></use>
					</clipPath>
				</defs>

				<g className="NodesIcon__segments">
					<g
						className="rotate-0"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendBackground)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[60deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendBackground)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[120deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendBackground)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-180"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendBackground)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[240deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendBackground)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[300deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendBackground)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>
				</g>
				<g className="NodesIcon__dots">
					<use
						className="NodesIcon__dot"
						href="#nodesIconDot"
						x="0"
						y="-24"
						fill="var(--blendForeground)"
						data-js-target-list="NodesIcon.dots"></use>
					<use
						className="NodesIcon__dot"
						href="#nodesIconDot"
						x="21"
						y="-12"
						fill="var(--blendForeground)"
						data-js-target-list="NodesIcon.dots"></use>
					<use
						className="NodesIcon__dot"
						href="#nodesIconDot"
						x="21"
						y="12"
						fill="var(--blendForeground)"
						data-js-target-list="NodesIcon.dots"></use>
					<use
						className="NodesIcon__dot"
						href="#nodesIconDot"
						x="0"
						y="24"
						fill="var(--blendForeground)"
						data-js-target-list="NodesIcon.dots"></use>
					<use
						className="NodesIcon__dot"
						href="#nodesIconDot"
						x="-21"
						y="12"
						fill="var(--blendForeground)"
						data-js-target-list="NodesIcon.dots"></use>
					<use
						className="NodesIcon__dot"
						href="#nodesIconDot"
						x="-21"
						y="-12"
						fill="var(--blendForeground)"
						data-js-target-list="NodesIcon.dots"></use>
				</g>
				<g clipPath="url(#nodesIconClipPath)">
					<g
						className="rotate-0"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendIntersection)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[60deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendIntersection)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[120deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendIntersection)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-180"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendIntersection)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[240deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendIntersection)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>

					<g
						className="rotate-[300deg]"
						data-js-target-list="NodesIcon.segmentRotators">
						<use
							className="NodesIcon__segment"
							href="#nodesIconSegment"
							fill="var(--blendIntersection)"
							data-js-target-list="NodesIcon.segments"></use>
					</g>
				</g>
			</svg>
		),
		title: "Close to the metal",
		description: (
			<p className="text-black-20">
				From{" "}
				<a
					className="text-link"
					href="https://stripe.com/newsroom/news/direct-platform"
					data-js-controller="AnalyticsButton"
					data-analytics-category="Links"
					data-analytics-action="Clicked"
					data-analytics-label="Direct Integrations CTA">
					direct integrations
				</a>{" "}
				with card networks and banks to checkout flows in the browser, we
				operate on and optimize at every level of the financial stack.
			</p>
		),
	},

	{
		icon: (
			<svg
				className="text-[16px] w-24 h-24"
				width="96"
				height="96"
				preserveAspectRatio="xMinYMin"
				viewBox="0 0 96 96"
				xmlns="http://www.w3.org/2000/svg"
				data-js-controller="FastForwardIcon">
				<defs>
					<path
						id="fastForwardIconArrow"
						d="M19.15 31.36l21.53 15.15a2 2 0 0 1 0 3.27L19.15 64.93A2 2 0 0 1 16 63.29V33a2 2 0 0 1 3.15-1.64z"></path>
					<clipPath id="fastForwardIconClipPath">
						<use
							href="#fastForwardIconArrow"
							fill="var(--blendBackground)"
							data-js-target-list="FastForwardIcon.firstBackArrows"
							data-js-bbox="firstHiddenArrow"></use>
						<use
							href="#fastForwardIconArrow"
							transform="translate(-42, 0)"
							fill="var(--blendBackground)"
							data-js-target-list="FastForwardIcon.secondBackArrows"
							data-js-bbox="secondHiddenArrow"></use>
					</clipPath>
				</defs>

				<use
					className="invisible"
					href="#fastForwardIconArrow"
					fill="var(--blendBackground)"
					data-js-target="FastForwardIcon.firstHiddenArrow"></use>
				<use
					className="invisible"
					href="#fastForwardIconArrow"
					transform="translate(-42, 0)"
					fill="var(--blendBackground)"
					data-js-target="FastForwardIcon.secondHiddenArrow"></use>

				<use
					href="#fastForwardIconArrow"
					fill="var(--blendBackground)"
					data-js-target-list="FastForwardIcon.firstBackArrows"></use>
				<use
					className="opacity-0"
					href="#fastForwardIconArrow"
					fill="var(--blendBackground)"
					data-js-target-list="FastForwardIcon.secondBackArrows"></use>
				<use
					href="#fastForwardIconArrow"
					transform="translate(14, 0)"
					fill="var(--blendForeground)"
					data-js-target-list="FastForwardIcon.firstFrontArrows"></use>
				<use
					className="opacity-0"
					href="#fastForwardIconArrow"
					fill="var(--blendForeground)"
					data-js-target-list="FastForwardIcon.secondFrontArrows"></use>
				<g clipPath="url(#fastForwardIconClipPath)">
					<use
						href="#fastForwardIconArrow"
						transform="translate(14, 0)"
						fill="var(--blendIntersection)"
						data-js-target-list="FastForwardIcon.firstFrontArrows"></use>
					<use
						className="opacity-0"
						href="#fastForwardIconArrow"
						fill="var(--blendIntersection)"
						data-js-target-list="FastForwardIcon.secondFrontArrows"></use>
				</g>
			</svg>
		),
		title: "Fastest-improving platform",
		description: (
			<p className="text-black-20">
				We release{" "}
				<a
					className="text-link"
					href="/payments/features"
					data-js-controller="AnalyticsButton"
					data-analytics-category="Links"
					data-analytics-action="Clicked"
					data-analytics-label="Payment features CTA">
					hundreds of features
				</a>{" "}
				and improvements each year to help you stay ahead of industry shifts.
				(On average, we deploy our production API 16x per day.)
			</p>
		),
	},

	{
		icon: (
			<svg
				className="text-[16px] w-24 h-24"
				width="96"
				height="96"
				preserveAspectRatio="xMinYMin"
				viewBox="0 0 96 96"
				xmlns="http://www.w3.org/2000/svg"
				data-js-controller="HealthIcon">
				<defs>
					<circle id="healthIconCircle" cx="35" cy="49" r="19"></circle>
					<path
						id="healthIconCheck"
						d="M47 28a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm3.94 4.73L45 38.78 43.43 37a.83.83 0 0 0-1.3 1L44 41.2a1 1 0 0 0 1.7 0c.3-.41 6-7.57 6-7.57.75-.8-.16-1.51-.76-.9z"></path>
					<clipPath id="healthIconLineClipPath">
						<circle cx="35" cy="49" r="17"></circle>
					</clipPath>
					<clipPath id="healthIconCircleClipPath">
						<use href="#healthIconCircle"></use>
					</clipPath>
				</defs>

				<use href="#healthIconCircle" fill="var(--blendBackground)"></use>
				<path
					className="HealthIcon__line"
					d="M16 53h6l2.5-6L29 59l5-20.5L37 53l19 .09"
					clipPath="url(#healthIconLineClipPath)"
					data-js-target="HealthIcon.line"></path>
				<use
					className="HealthIcon__check"
					href="#healthIconCheck"
					fill="var(--blendForeground)"
					data-js-target-list="HealthIcon.checks"></use>
				<use
					className="HealthIcon__check"
					href="#healthIconCheck"
					fill="var(--blendIntersection)"
					clipPath="url(#healthIconCircleClipPath)"
					data-js-target-list="HealthIcon.checks"></use>
			</svg>
		),
		title: "Battle-tested reliability",
		description: (
			<p className="text-black-20">
				Our systems operate with{" "}
				<a
					className="text-link"
					href="https://status.stripe.com/"
					data-js-controller="AnalyticsButton"
					data-analytics-category="Links"
					data-analytics-action="Clicked"
					data-analytics-label="Status Page CTA">
					99.99%+
				</a>{" "}
				uptime and are highly scalable and redundant. Stripe is certified to the
				highest compliance standards.
			</p>
		),
	},

	{
		icon: (
			<svg
				className="text-[16px] w-24 h-24"
				width="96"
				height="96"
				preserveAspectRatio="xMinYMin"
				viewBox="0 0 96 96"
				xmlns="http://www.w3.org/2000/svg"
				data-js-controller="GearsIcon">
				<defs>
					<path
						id="gearsIconSmall"
						d="M29.5 28l1.13 3.13.64.13 2.24-2.46.93.38-.16 3.33c.19.11.37.23.54.36l3.02-1.42.7.71-1.41 3.02c.13.17.25.35.36.54l3.33-.16.38.93-2.46 2.24c.05.21.1.42.13.64L42 40.5v1l-3.13 1.13c-.04.25-.1.5-.15.73l2.48 2.15-.38.93-3.28-.24c-.14.24-.3.47-.47.7l1.48 2.94-.71.7-2.94-1.47c-.23.17-.46.33-.7.47l.24 3.28-.93.38-2.15-2.48c-.27.06-.54.12-.82.16L29.5 54h-1l-1.04-3.12c-.28-.04-.55-.1-.82-.16l-2.15 2.48-.93-.38.24-3.28c-.24-.14-.47-.3-.7-.47l-2.94 1.48-.7-.71 1.47-2.94c-.17-.23-.33-.46-.47-.7l-3.28.24-.38-.93 2.48-2.15a9.95 9.95 0 0 1-.16-.82L16 41.5v-1l3.12-1.04c.04-.25.08-.49.14-.73l-2.46-2.24.38-.93 3.33.16c.11-.19.23-.37.36-.54l-1.42-3.02.71-.7 3.02 1.41c.17-.13.35-.25.54-.36l-.16-3.33.93-.38 2.24 2.46s.42-.1.64-.13L28.5 28h1zM29 39a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
					<path
						id="gearsIconLarge"
						d="M41.8 38l.88 3.12c.28.03.56.08.83.14l1.9-2.63 1.5.55-.24 3.22c.25.13.49.27.73.42L50.08 41l1.24 1.02-1.35 2.95c.19.2.37.42.54.64l3.16-.8.8 1.38-2.27 2.31c.1.26.2.52.28.79l3.24.32.28 1.57-2.94 1.4v.84l2.94 1.4-.28 1.57-3.24.32c-.08.27-.18.53-.28.79l2.27 2.3-.8 1.4-3.16-.81c-.17.22-.35.43-.54.64l1.35 2.95L50.08 65l-2.68-1.82c-.24.15-.48.29-.73.42l.25 3.22-1.52.55-1.9-2.63c-.26.06-.54.1-.82.14L41.8 68h-1.6l-.88-3.12a12.1 12.1 0 0 1-.83-.14l-1.9 2.63-1.5-.55.24-3.22c-.25-.13-.49-.27-.73-.42L31.92 65l-1.24-1.02 1.35-2.95c-.19-.2-.37-.42-.54-.64l-3.16.8-.8-1.38 2.27-2.31c-.1-.26-.2-.52-.28-.79l-3.24-.32-.28-1.57 2.94-1.4v-.84L26 51.18l.28-1.57 3.24-.32c.08-.27.18-.53.28-.79l-2.27-2.3.8-1.4 3.16.81c.17-.22.35-.43.54-.64l-1.35-2.95L31.92 41l2.68 1.82c.24-.15.48-.29.73-.42l-.25-3.22 1.52-.55 1.9 2.63c.26-.06.54-.1.82-.14L40.2 38h1.6zM41 50a3 3 0 0 0-3.02 3A3 3 0 0 0 41 56a3 3 0 0 0 3.02-3A3 3 0 0 0 41 50z"></path>
					<clipPath id="gearsIconClipPath">
						<use
							className="GearsIcon__gear--small"
							href="#gearsIconSmall"
							data-js-target-list="GearsIcon.smallGears"></use>
					</clipPath>
				</defs>

				<use
					className="GearsIcon__gear--small"
					href="#gearsIconSmall"
					fill="var(--blendBackground)"
					data-js-target-list="GearsIcon.smallGears"></use>
				<use
					className="GearsIcon__gear--large"
					href="#gearsIconLarge"
					fill="var(--blendForeground)"
					data-js-target-list="GearsIcon.largeGears"></use>
				<g clipPath="url(#gearsIconClipPath)">
					<use
						className="GearsIcon__gear--large"
						href="#gearsIconLarge"
						fill="var(--blendIntersection)"
						data-js-target-list="GearsIcon.largeGears"></use>
				</g>
			</svg>
		),
		title: "Intelligent optimizations",
		description: (
			<p className="text-black-20">
				Our machine learning models train on{" "}
				<a
					className="text-link"
					href="https://stripe.com/radar"
					data-js-controller="AnalyticsButton"
					data-analytics-category="Links"
					data-analytics-action="Clicked"
					data-analytics-label="Radar CTA">
					billions
				</a>{" "}
				of data points and help increase revenue across conversion, fraud,
				revenue recovery, and more.
			</p>
		),
	},
];