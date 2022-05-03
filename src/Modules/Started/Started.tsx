import React from 'react'

const Started = () => {
  return (
		<div
			className="flex flex-col lg:flex-row z-10 bg-white w-full h-full -mt-[350px] md:-mt-[300px]
         gap-y-6 gap-x-6 pt-[121px] pb-[100px] px-8 xl:px-[120px] 2xl:px-[160px] 3xl:px-[200px]
         4xl:px-[760px] ">
			<div className="flex flex-col gap-y-8 md:max-w-[600px] lg:max-w-sm lg:mr-20">
				<p className="text-[24px] text-black-30 font-semibold">
					Ready to get started?
				</p>
				<p className="text-[18px] text-black-20">
					Explore <span className="text-link">Stripe Payments</span>, or create
					an account instantly and start accepting payments. You can also
					contact us to design a custom package for your business.
				</p>
				<div className="flex flex-col 375:flex-row 375:items-center gap-x-8 gap-y-2">
					<button
						className="group w-32 py-[6px] px-4 items-center  rounded-[2rem]
                  text-white bg-blue-10 hover:bg-black-30 border-[1px] text-[15px]">
						Start now
						<span className="border-white ml-2 arrow before:border-white inline-block align-middle" />
					</button>
					<p className="text-blue-10 group font-semibold hover:text-black-30 text-[15px]">
						Contact sales
						<span
							className="border-blue-10  ml-2 arrow before:border-blue-10  inline-block
                     hover:border-black-30  align-middle"
						/>
					</p>
				</div>
			</div>

			{/* ...................... */}
			<div className="flex flex-col md:flex-row gap-8">
				<div className="flex flex-col gap-y-2">
					<svg
						className="font-[15px] h-24 w-24 -ml-4 -mb-5"
						preserveAspectRatio="xMinYMin"
						viewBox="0 0 96 96"
						xmlns="http://www.w3.org/2000/svg"
						data-js-controller="PricingIcon">
						<defs>
							<path
								id="pricingIconTag"
								d="M41.4 30.38l8.4 8.27A4 4 0 0 1 51 41.5V62a3 3 0 0 1-3 3H32a3 3 0 0 1-3-3V41.5a4 4 0 0 1 1.2-2.85l8.4-8.27a2 2 0 0 1 2.8 0zM40 36a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
							<clipPath id="pricingClipPath">
								<use
									className="origin-[49px_39px] rotate-45"
									href="#pricingIconTag"
									data-js-target-list="PricingIcon.tagBacks"></use>
							</clipPath>
						</defs>

						<use
							className="origin-[49px_39px] rotate-45"
							href="#pricingIconTag"
							fill="var(--blendBackground)"
							data-js-target-list="PricingIcon.tagBacks"></use>
						<use
							className="origin-[49px_39px]"
							href="#pricingIconTag"
							fill="var(--blendForeground)"
							data-js-target-list="PricingIcon.tagFronts"></use>
						<g clipPath="url(#pricingClipPath)">
							<use
								className="origin-[49px_39px]"
								href="#pricingIconTag"
								fill="var(--blendIntersection)"
								data-js-target-list="PricingIcon.tagFronts"></use>
						</g>
					</svg>
					<p className="text-[15px] text-black-30 font-semibold">
						Always know what you pay
					</p>
					<p className="text-[15px] text-black-20">
						Integrated per-transaction pricing with no hidden fees.
					</p>
					<p className="text-blue-10 group font-semibold text-[15px]">
						Pricing details
						<span
							className="border-blue-10  ml-2 arrow before:border-blue-10  inline-block 
                     align-middle"
						/>
					</p>
				</div>

				<div className="flex flex-col gap-y-2">
					<svg
						className="font-[15px] h-24 w-24 -ml-4 -mb-5"
						width="96"
						height="96"
						preserveAspectRatio="xMinYMin"
						viewBox="0 0 96 96"
						xmlns="http://www.w3.org/2000/svg"
						data-js-controller="CodeFilesIcon">
						<defs>
							<path
								id="codeFilesIconBack"
								d="M21.13 28h16.74c1.79 0 2.43.19 3.08.53.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H21.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 0 1-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V33.13c0-1.79.19-2.43.53-3.08.35-.66.86-1.17 1.52-1.52.65-.34 1.3-.53 3.08-.53z"></path>
							<path
								id="codeFilesIconFront"
								d="M45.95 33.53c.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H26.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 0 1-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V48c0-3-1-7 9-6 0-2-1-9 4.5-9H43c1.78 0 2.3.19 2.95.53z"
								data-js-target-list="CodeFilesIcon.fileFrontPaths"
								mask="url(#codeFilesCaretMask)"></path>
							<path
								id="codeFilesIconCarets"
								d="M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z"></path>
							<clipPath id="codeFilesClipPath">
								<use
									href="#codeFilesIconBack"
									data-js-target-list="CodeFilesIcon.fileBacks"></use>
							</clipPath>
							<mask id="codeFilesCaretMask">
								<path
									d="M45.95 33.53c.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H26.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 0 1-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V48c0-3-1-7 9-6 0-2-1-9 4.5-9H43c1.78 0 2.3.19 2.95.53z"
									data-js-target-list="CodeFilesIcon.fileFrontPaths"
									fill="white"></path>
								<path
									d="M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z"
									fill="#000"
									x="-27"
									data-js-target-list="CodeFilesIcon.carets"></path>
								<path
									d="M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z"
									fill="#000"
									data-js-target-list="CodeFilesIcon.carets"></path>
							</mask>
						</defs>

						<use
							href="#codeFilesIconBack"
							fill="var(--blendBackground)"
							data-js-target-list="CodeFilesIcon.fileBacks"></use>
						<use
							href="#codeFilesIconFront"
							fill="var(--blendForeground)"
							data-js-target-list="CodeFilesIcon.fileFronts"></use>
						<g clipPath="url(#codeFilesClipPath)">
							<use
								href="#codeFilesIconFront"
								fill="var(--blendIntersection)"
								data-js-target-list="CodeFilesIcon.fileFronts"></use>
						</g>
					</svg>
					<p className="text-[15px] text-black-30 font-semibold">
						Start your integration
					</p>
					<p className="text-[15px] text-black-20">
						Get up and running with Stripe in as little as 10 minutes.
					</p>
					<p className="text-blue-10 group font-semibold text-[15px]">
						API reference
						<span
							className="border-blue-10  ml-2 arrow before:border-blue-10  inline-block 
                     align-middle"
						/>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Started