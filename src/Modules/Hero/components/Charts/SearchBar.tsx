import { faSearch,faBell, faCircleQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const SearchBar = () => {
  return (
		<div className="col-span-3 row-span-1 flex justify-between">
			<div className="flex flex-col gap-y-1 relative w-full h-full">
				<input
					id="email"
					className="border-[1px] rounded shadow-md focus:outline-none px-2"
					readOnly
				/>
				<FontAwesomeIcon
					icon={faSearch}
					className="absolute left-2 top-[50%] text-xs translate-y-[-50%] text-black-10"
				/>
				<p className="absolute left-7 top-[50%] text-xs translate-y-[-50%] text-black-10">
					Search
				</p>
			</div>

			<div className="flex w-full justify-end items-center gap-x-4">
				<FontAwesomeIcon
					icon={faBell}
					className=" text-sm  text-blue-500"
				/>
				<FontAwesomeIcon
					icon={faCircleQuestion}
					className=" text-sm  text-black-10"
				/>
				<FontAwesomeIcon
					icon={faUser}
					className=" text-sm  text-black-10"
				/>
			</div>
		</div>
	);
}

export default SearchBar