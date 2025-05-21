import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import image1 from '@/public/moneytalks-with-mona-1.webp';
import image2 from '@/public/moneytalks-with-mona-2.webp';
import image3 from '@/public/moneytalks-with-mona-3.webp';
import image4 from '@/public/moneytalks-with-mona-4.webp';
import image5 from '@/public/moneytalks-with-mona-5.webp';
import image6 from '@/public/moneytalks-with-mona-6.webp';

const page = () => {
  	return (
		<section className='py-32'>
			<div className='container'>

				<Link href={`/blogs`} className='mm-button'>Back to Blogs</Link>

				<Image className='w-full mt-12' src={image1} width="" height="" alt="Image 6 Alt tag: Contactless digital wallet payment with phone at POS machine — fast and secure mobile transactions replacing cash payments." />
				
				<div className='flex max-lg:flex-col gap-12 px-10 py-8 bg-[#F7F7F7] rounded-3xl mt-12'>
					<div className='lg:w-1/4 order-1 lg:order-0'>
						<Image className='w-full' src={image2} width="" height="" alt="Modern Lebanese woman representing Mona — a fintech digital persona offering expert guidance on digital wallets and money tips." />
					</div>
					<div className='lg:w-3/4 order-0 lg:order-1 flex flex-col gap-4'>
						<h3 className='text-pretty text-2xl font-bold'>About MoneyTalks by Mona</h3>
						<p class="text-lg !leading-6">MoneyTalks by Mona is your go-to voice on all things digital finance in Lebanon. <br /> Powered by fintech insights and local flair, Mona breaks down complex money topics into bite-sized, relatable tips you can actually use. Smart, witty and always on your side, Mona is here to help you make confident, secure and savvy financial choices, one tap at a time.</p>
					</div>
				</div>

				<div className='lg:px-8'>
					<div className='flex flex-col gap-4'>
						<p className='mt-12'>May 09, 2025</p>
						<h1 className='text-pretty text-3xl font-bold uppercase'>Cash is Out; Digital Wallets Are In – Here’s Why You Need One</h1>
						<p>Picture this: You just finished your daily jog on the Beirut Corniche, enjoying the sea breeze. You crave a chicken shawarma sandwich, so you head to the nearest snack, reach for your wallet… and BAM!!! you left it at home. <br /> No cash, no cards, just your phone. After the crisis, Lebanon became an increasingly cash-heavy country, but let’s be real—who actually enjoys dealing with cash? Long ATM lines, no change at supermarkets, and that awkward moment when a cashier sighs because you handed them a pile of large bills. Well, what if your phone could handle it all? Welcome to the world of digital wallets—fast, secure, and always within reach.</p>
					</div>

					<hr className='my-6 lg:my-12' />

					<div className='flex max-lg:flex-col gap-12 lg:gap-24'>
						<div className='lg:w-1/2 flex flex-col gap-4'>
							<h2 className='text-pretty text-3xl font-bold uppercase'>What is a Digital Wallet?</h2>
							<ul className='flex flex-col gap-2 list-disc pl-6'>
								<li>Store money & make payments – No more fumbling for change.</li>
								<li>Send & receive money instantly –No awkward "I owe you" moments.</li>
								<li>Shop online with ease – No more borrowing someone’s card for subscriptions</li>
								<li>Request virtual or physical prepaid cards – Spend smart whether you're shopping from Beirut, Istanbul or Barcelona.</li>
								<li>Top up anytime – Use your debit/ credit/ prepaid card to load cash when needed.</li>
								<li>Access financial services without a traditional bank – Get the tools you need, minus the bank hassle.</li>
							</ul>
						</div>
						<div className='lg:w-1/2'>
							<Image className='w-full aspect-video object-cover' src={image3} width="" height="" alt="Person checking empty wallet while managing bills — visualizing the need for digital wallets in Lebanon due to cash limitations and financial pressure." />
							<hr className='my-6' />
							<div className='flex flex-col gap-4'>
								<h2 className='text-pretty text-3xl font-bold'>Mona’s Tip:</h2>
								<p>“If your digital wallet could talk, it’d say: <br /> ‘I got you.’”</p>
							</div>
						</div>
					</div>

					<hr className='my-6 lg:my-12' />

					<div className='flex flex-col gap-4'>
						
						<div className='flex max-lg:flex-col gap-12 lg:gap-24'>
							<div className='lg:w-1/2 flex flex-col gap-4'>
								<h2 className='text-pretty text-3xl font-bold uppercase'>How Does a Digital Wallet Work?</h2>
								<p className='font-bold'>Digital wallets give you instant access to your money and let you pay in just a few taps.</p>
								<ul className='flex flex-col gap-2 list-disc pl-6'>
									<li><span className='font-bold'>Tap-to-pay (NFC)</span> – Just hold your card near a POS card terminal. Voilà —done</li>
									<li><span className='font-bold'>QR Code Payments</span> – Scan, confirm, pay. Easy.</li>
									<li><span className='font-bold'>Online Transactions </span> – Skip typing in your card details for the millionth time.                           </li>
									<li><span className='font-bold'>Games & Subscriptions</span> – Pay for Netflix, Shahid, mobile games, and more—all in a tap </li>
									<li><span className='font-bold'>Pay bills in one place </span>– Mobile, internet … it’s your one-stop payment shop.</li>
									<li><span className='font-bold'> P2P Transfers </span> – Send or receive money from friends and family in seconds — no cash, no stress.</li>
								</ul>
							</div>
							<div className='lg:w-1/2'>
								<Image className='w-full object-cover' src={image6} width="" height="" alt="Using a smartphone digital wallet to make contactless payment at POS terminal in Lebanon — mobile payment convenience in action." />
							</div>
						</div>
					</div>

					<hr className='my-6 lg:my-12' />

					<div>
						<h2 className='lg:w-1/2 text-pretty text-3xl font-bold uppercase'>Why Are Digital Wallets Taking Over?</h2>
						<div className='flex max-lg:flex-col gap-6 lg:gap-24 mt-6'>
							<div className='lg:w-1/2 flex flex-col gap-6'>
								<div className='flex flex-col'>
									<p className='font-bold'>Convenience</p>
									<ul className='list-disc pl-6'>
										<li>Pay bills, buy groceries, shop online, split dinner — all from your phone.</li>
										<li>Superfast transactions — no more ATM visits.</li>
										<li>Contactless payments — less germs (if you know what I mean!), more speed.</li>
										<li>Skip the paperwork. Get onboarded with a Lebanese ID or a Lebanese Residence Permit in less than 5 minutes.</li>
									</ul>
								</div>
								<div className='flex flex-col'>
									<p className='font-bold'>Security</p>
									<p>Two-factor authentication, real-time fraud alerts, Face ID or PIN protection — plus encryption and tokenization of your card data — digital wallets are like Fort Knox, but friendlier.</p>
								</div>
							</div>

							<div className='lg:w-1/2 flex flex-col gap-6'>
								<div className='flex flex-col'>
									<p className='font-bold'>Access to Services</p>
									<p>Digital wallets and prepaid cards let you access apps, subscriptions, international payments, and more — without linking your main debit card that holds your life savings. Just load what you need, and you're good to go.</p>
								</div>
								<div className='flex flex-col'>
									<p className='font-bold'>Better financial control</p>
									<p>Track your spending in real time, down to the last lira. No surprises, no stress.</p>
								</div>
								<div className='flex flex-col'>
									<p className='font-bold'>Global Friendly</p>
									<p>Whether you’re in Beirut or Berlin, your money travels with you.</p>
								</div>
							</div>
						</div>
					</div>

					<hr className='my-6 lg:my-12' />

					<div className='flex'>
						<p className="text-8xl">💡</p>
						<div className='lg:w-1/3 flex flex-col gap-4'>
							<h2 className='text-pretty text-3xl font-bold uppercase'>Mona’s Reality Check: </h2>
							<p>“Lebanon is moving fast. If you don’t want to be left behind, it’s time to go digital!”</p>
						</div>
					</div>

					<hr className='my-6 lg:my-12' />

					<div className='flex max-lg:flex-col gap-12 lg:gap-24'>
						<div className='lg:w-1/2 flex flex-col gap-4'>
							<h2 className='text-pretty text-3xl font-bold uppercase'>The Risks of Sticking to Cash</h2>
							<div className='flex flex-col gap-2'>
								<p className='font-bold'>Cash Gets Lost or Stolen</p>
								<p>Your mattress isn’t a vault. Fires, theft, or one bad decision can wipe out your savings.</p>
							</div>
							<div className='flex flex-col gap-2'>
								<p className='font-bold'>No Transaction History</p>
								<p>With cash, you never really know where your money went. With digital tools, you can track every lira.</p>
							</div>
							<div className='flex flex-col gap-2'>
								<p className='font-bold'>Not Future-Proof</p>
								<p>Cash limits your access to the global economy. Want to freelance internationally? Pay for online courses? Shop global? Good luck without a digital payment method.</p>
							</div>
						</div>
						<div className='lg:w-1/2'>
							<Image className='w-full aspect-video object-cover' src={image4} width="" height="" alt="Lebanese pounds and US dollars side by side — representing Lebanon's currency volatility and the shift to secure digital finance solutions." />
							<hr className='my-6' />
							<div className='flex flex-col gap-4'>
								<h2 className='text-pretty text-3xl font-bold'>💡 Mona's Reality Check: </h2>
								<p>“Cash might feel safe, but it’s actually fragile. Digital is the upgrade your money deserves.”</p>
							</div>
						</div>
					</div>

					<hr className='my-6 lg:my-12' />

					<div className='flex flex-col gap-4'>
						<h2 className='text-pretty text-3xl font-bold uppercase'>But Can You Really Trust a Digital Wallet?</h2>
						<p className='font-bold'>💬 Mona’s Reality Check for the Trust-Issues Club:</p>
						<p>“I get it. After what the 2019 financial crisis put us through, trusting anyone with your money feels like dating after a bad breakup. But here’s the truth: digital wallets like MyMonty are tools. You load only what you want, use it how you want, and you stay in control. No one’s locking up your savings, and no one’s charging you for breathing. It’s freedom, not a risk. Plus, Monty Finance is licensed by Banque du Liban and follows rigorous compliance standards. Oh, and the cards? Backed by Mastercard, they’re globally recognized and built on the same level of trust and protection you expect — minus the paperwork.”</p>
					</div>

					<hr className='my-6 lg:my-12' />

					<div className='flex max-lg:flex-col gap-12'>
						<div className='lg:w-1/2 order-1 lg:order-0'>
							<Image className='w-full' src={image5} width="" height="" alt="Young Lebanese woman confidently using a mobile phone — embracing digital wallets for secure and effortless money management." />
						</div>
						<div className='lg:w-1/2 order-0 lg:order-1 flex flex-col gap-4'>
							<h2 className='text-pretty text-3xl font-bold uppercase'>So, What Can You Do Now?</h2>
							<ul className='flex flex-col gap-2 list-disc pl-6'>
								<li>Download a digital wallet (Hi, MyMonty!)</li>
								<li>Get a prepaid card to shop, travel, and subscribe without paperwork drama</li>
								<li>Set spending limits and stay in control — load only what you need, no surprises</li>
								<li>Start tracking your spending in real time</li>
								<li>Bank-level encryption and biometric logins</li>
								<li>No hidden fees, no long-term ties</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-2 px-10 py-10 bg-[#F7F7F7] rounded-3xl mt-12 text-center'>
					<h2 className='text-pretty text-3xl font-bold uppercase'>Ready to ditch the cash chaos?</h2>
					<p>MyMonty makes digital finance simple, secure, and stress-free.</p>
					<p className='font-bold'>Join the fintech wave today.</p>
						<Link href={`/blogs`} className='w-max mx-auto mm-button mt-4'>Download App</Link>
				</div>
			</div>
		</section>
  	)
}

export default page