import React from 'react'
import { chipType } from '../../../Shared/Products';
import { uses } from '../../../Shared/Uses';
import Chips from './Chips';

const UseCaseKids = () => {
  return (

		<div className="flex flex-col py-8 px-8">
			{uses
				.filter((chip: chipType, index: number) => index < 6)
				.map((chip: chipType, index: number) => (
					<Chips
						name={chip.name}
						icon={chip.icon}
						description={chip.description}
						key={index}
					/>
				))}
		</div>
	);
}

export default UseCaseKids