import React from "react";

const Tools = () => {
	return (
		<div className="flex flex-col gap-  w-full ">
			<div className="">
				<svg
					className="lg:mb-0"
					width="96"
					height="96"
					preserveAspectRatio="xMinYMin"
					viewBox="0 0 96 96"
					xmlns="http://www.w3.org/2000/svg"
					data-js-controller="TerminalIcon">
					<defs>
						<path
							id="terminalIconCode"
							d="M44 28a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h24zm-23.2 5.17l-.67.75a.5.5 0 0 0-.02.64l.06.06 3.29 2.92-3.3 2.92a.5.5 0 0 0-.03.7l.66.76c.18.2.5.22.7.04l4.97-4.42-4.96-4.41a.5.5 0 0 0-.7.04z"></path>
						<path
							id="terminalIconCursor"
							d="M27.64 40h6.72c.22 0 .3.02.38.07.09.04.15.1.2.19.04.08.06.16.06.38v.72c0 .22-.02.3-.07.38a.45.45 0 0 1-.19.2c-.08.04-.16.06-.38.06h-6.72c-.22 0-.3-.02-.38-.07a.45.45 0 0 1-.2-.19c-.04-.08-.06-.16-.06-.38v-.72c0-.22.02-.3.07-.38.04-.09.1-.15.19-.2.08-.04.16-.06.38-.06z"></path>
						<path
							className="text-blue-10"
							id="terminalIconGear"
							d="M42.5 42l1.13 3.13.64.13 2.24-2.46.93.38-.16 3.33c.19.11.37.23.54.36l3.02-1.42.7.71-1.41 3.02c.13.17.25.35.36.54l3.33-.16.38.93-2.46 2.24c.05.21.1.42.13.64L55 54.5v1l-3.13 1.13c-.04.25-.1.5-.15.73l2.48 2.15-.38.93-3.28-.24c-.14.24-.3.47-.47.7l1.48 2.94-.71.7-2.94-1.47c-.23.17-.46.33-.7.47l.24 3.28-.93.38-2.15-2.48c-.27.06-.54.12-.82.16L42.5 68h-1l-1.04-3.12c-.28-.04-.55-.1-.82-.16l-2.15 2.48-.93-.38.24-3.28c-.24-.14-.47-.3-.7-.47l-2.94 1.48-.7-.71 1.47-2.94c-.17-.23-.33-.46-.47-.7l-3.28.24-.38-.93 2.48-2.15a9.95 9.95 0 0 1-.16-.82L29 55.5v-1l3.12-1.04c.04-.25.08-.49.14-.73l-2.46-2.24.38-.93 3.33.16c.11-.19.23-.37.36-.54l-1.42-3.02.71-.7 3.02 1.41c.17-.13.35-.25.54-.36l-.16-3.33.93-.38 2.24 2.46s.42-.1.64-.13L41.5 42h1zM42 53a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
						<clipPath id="terminalIconClipPath">
							<use href="#terminalIconCode"></use>
						</clipPath>
					</defs>

					<use href="#terminalIconCode" fill="#635BFF"></use>
					<use
						href="#terminalIconCursor"
						fill="#3A3A3A"
						data-js-target="TerminalIcon.cursor"></use>
					<use
						href="#terminalIconGear"
						fill="#00D4FF"
						transform-origin="42 55"
						data-js-target-list="TerminalIcon.gears"></use>
					<g clipPath="url(#terminalIconClipPath)">
						<use
							href="#terminalIconGear"
							fill="#FFFFFF"
							transform-origin="42 55"
							data-js-target-list="TerminalIcon.gears"></use>
					</g>
				</svg>
			</div>
			<div className="flex flex-col gap-3">
				<p className="text-white text-[15px]  font-semibold tracking-wider">
					Tools for every stack
				</p>
				<p className="text-[18px] text-gray-10 font-light">
					We offer client and server libraries in everything from React and PHP
					to .NET and iOS.
				</p>
				<p className="text-blue-20 text-[15px] group font-medium">
					See libraries
					<span
						className="border-blue-20 ml-2 arrow before:border-blue-20 inline-block 
            align-middle"
					/>
				</p>
			</div>
		</div>
	);
};

export default Tools;
