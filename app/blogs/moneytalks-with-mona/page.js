import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import image1 from '@/public/moneytalks-with-mona-1.webp';
import image2 from '@/public/moneytalks-with-mona-2.webp';
import image3 from '@/public/moneytalks-with-mona-3.webp';
import image4 from '@/public/moneytalks-with-mona-4.webp';
import image5 from '@/public/moneytalks-with-mona-5.webp';

const page = () => {
  	return (
		<section className='py-32'>
			<div className='container'>

				<Link href={`/blogs`} className='mm-button mt-8'>Back to Blogs</Link>

				<Image className='w-full mt-12' src={image1} width="" height="" />
				
				<div className='flex max-lg:flex-col gap-12 px-10 py-14 bg-[#F7F7F7] rounded-3xl mt-12'>
					<div className='lg:w-1/4 order-1 lg:order-0'>
						<Image className='w-full' src={image2} width="" height="" />
					</div>
					<div className='lg:w-3/4 order-0 lg:order-1 flex flex-col gap-4'>
						<h3 className='text-pretty text-2xl font-bold'>About MoneyTalks by Mona</h3>
						<p>MoneyTalks by Mona is your go-to voice on all things digital finance in Lebanon. <br /> Powered by fintech insights and local flair, Mona breaks down complex money topics into bite-sized, relatable tips you can actually use. Smart, witty and always on your side, Mona is here to help you make confident, secure and savvy financial choices, one tap at a time.</p>
					</div>
				</div>

				<div className='px-8'>
					<div className='flex flex-col gap-4'>
						<p className='mt-12'>May 09, 2025</p>
						<h1 className='text-pretty text-5xl font-bold uppercase'>MoneyTalks with Mona</h1>
						<h2 className='text-pretty text-3xl font-bold'>Cash is Out; Digital Wallets Are In – Here’s Why You Need One</h2>
						<p>Picture this: You just finished your daily jog on the Beirut Corniche, enjoying the sea breeze. You crave a chicken shawarma sandwich, so you head to the nearest snack, reach for your wallet… and BAM!!! you left it at home. <br /> No cash, no cards, just your phone. After the crisis, Lebanon became an increasingly cash-heavy country, but let’s be real—who actually enjoys dealing with cash? Long ATM lines, no change at supermarkets, and that awkward moment when a cashier sighs because you handed them a pile of large bills. Well, what if your phone could handle it all? Welcome to the world of digital wallets—fast, secure, and always within reach.</p>
					</div>

					<hr className='mt-12' />

					<div className='flex max-lg:flex-col gap-24 mt-12'>
						<div className='lg:w-1/2 flex flex-col gap-4'>
							<h2 className='text-pretty text-3xl font-bold uppercase'>What is a Digital Wallet?</h2>
							<p>MoneyTalks by Mona is your go-to voice on all things digital finance in Lebanon. <br /> Powered by fintech insights and local flair, Mona breaks down complex money topics into bite-sized, relatable tips you can actually use. Smart, witty and always on your side, Mona is here to help you make confident, secure and savvy financial choices, one tap at a time.</p>
						</div>
						<div className='lg:w-1/2'>
							<Image className='w-full' src={image3} width="" height="" />
							<hr className='mt-6' />
							<div className='flex flex-col gap-4 mt-6'>
								<h2 className='text-pretty text-3xl font-bold uppercase'>Mona’s Tip:</h2>
								<p>“If your digital wallet could talk, it’d say: <br /> ‘I got you.’”</p>
							</div>
						</div>
					</div>
					</div>
			</div>
		</section>
  	)
}

export default page