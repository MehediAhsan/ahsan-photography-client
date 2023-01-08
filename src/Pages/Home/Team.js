import React from 'react';

const Team = () => {
    return (
        <section className=" dark:text-gray-700">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
    <h1 className="text-2xl md:text-3xl font-bold leading-none text-center">My <span className='text-orange-500'>Team</span></h1>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Portrait Photographer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Fashion Photographer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Sports Photographer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Still Life Photographer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Editorial Photographer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Architectural Photographer</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Team;