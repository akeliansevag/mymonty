import Image from 'next/image';
import { websiteName } from '@/app/config';
import SectionScrollLayout from "../SectionScrollLayout";
import OfferSection from "../OfferSection";
import Banner from '../../components/Banner';
import businessPrepaidCardBanner from '@/public/salary-advance-banner.webp';
import sectionTwoImage from '@/public/physical-platinum-mastercard-banner2.webp';

export const metadata = {
  title: 'Business Executive Credit Card' + websiteName,
  description: '',
};

export default function Page() {
    const data = {
        title: 'Business Executive Credit Card',
        subtitle: 'Cards',
        desc: 'MyMonty Business Executive Credit Card',
        image: {
            inGrid: true,
            layout: 'half',
            url: businessPrepaidCardBanner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Download App'
            }
        }
    };

    const sections = [
        {
            id: "productivity",
            label: "Productivity",
            icon: "/productivity.svg",
        },
        {
            id: "accounting",
            label: "Accounting",
            icon: "/accounting.svg",
        },
        {
            id: "marketing",
            label: "Marketing",
            icon: "/marketing.svg",
        },
        {
            id: "logistics",
            label: "Logistics",
            icon: "/logistics.svg",
        },
        {
            id: "education",
            label: "Education",
            icon: "/education.svg",
        },
        {
            id: "insurance",
            label: "Insurance",
            icon: "/insurance.svg",
        },
        {
            id: "travel",
            label: "Travel",
            icon: "/travel.svg",
        },
        {
            id: "hotel-and-tickets",
            label: "Hotel & Tickets",
            icon: "/hotel-and-tickets.svg",
        },
        {
            id: "car-rentals",
            label: "Car Rentals",
            icon: "/car-rentals.svg",
        },
    ];

    const productivityCards = [
        {
            title: "Business Subscriptions Management & Discount",
            description: "Enjoy up to <strong>30% discounts</strong> on software subscriptions by visiting <a href='https://mastercard.gonuclei.com/' target='_blank'>https://mastercard.gonuclei.com/</a>",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "Zoho One",
            description: "Get <strong>35% off</strong> on subscribing for Zoho’s annual license.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "Google Workspace",
            description: "Get <strong>25% off</strong> on the first year of the standard business plan.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "Notion",
            description: "Tasks, lists, wikis, roadmaps, pitch decks, and more Get <strong>6 months for free.</strong>",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "DocuSign",
            description: "Up to <strong>30% off</strong> on DocuSign plans.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        },
    ];

    const accoutingCards = [
        {
            title: "FISKL",
            description: "<strong>50% OFF</strong> for plans of global accounting solution.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "SOL.ONLINE",
            description: "<strong>20% OFF</strong> on different accounting solutions.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "GLOBAL TAX ASSISTANT",
            description: "<strong>20% DISCOUNT</strong> for Accounting. <strong>20% DISCOUNT</strong> on Tax Advisory services.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ];

    const marketingCards = [
        {
            title: "META ADS BY MEDIGIT",
            description: "Get up to <strong>$300 OFF</strong> on management fees.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "GOOGLE ADS",
            description: "Get credit up to <strong>$400</strong> when you spend your first <strong>$400</strong>.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "EMAIL MARKETING BY MAILCHIMP",
            description: "Flat <strong>50% OFF</strong> on MailChimp Essentials Plan.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ]

    const logisticsCards = [
        {
            title: "MY US SHIPPING",
            description: 'Free Premium membership and <strong>20% DISCOUNT</strong> on shipping. Simply visit <a href="https://myus.com/welcome/Mastercardpremium" target="_blank" rel="noopener noreferrer">myus.com/welcome/Mastercardpremium</a> to register and use your TIER Mastercard® on the payment page.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "DHL",
            description: 'Enjoy <strong>20%</strong> all year long with DHL by visiting <a href="https://DHL.com/" target="_blank" rel="noopener noreferrer">https://DHL.com/</a>',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "CAREEM",
            description: 'Book your ride with Careem and get <strong>20%</strong> on 5 rides/month. Use your Mastercard to enjoy discounts on your rides with Careem. Enter the relevant promo code to redeem the offer.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ]

    const educationCards = [
        {
            title: "MC BUSINESS ACADEMY",
            description: "Learn from 200+ experts across providing unparalleled industry insights.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "MASTERCARD TRUST CENTER",
            description: "Free of charge informational center created to defend business against cyberattacks.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "HARVARD BUSINESS REVIEW",
            description: "Get <strong>15% DISCOUNT</strong> on an annual HBR Digital subscription.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ]

    const insuranceCards = [
        {
            title: "TRAVEL INSURANCE BUNDLE",
            description: 'Discover the protection of your Debit Mastercard®, with our travel insurance for you and your peace of mind. Visit Mastercard <a href="https://mcpeaceofmind.com" target="_blank" rel="noopener noreferrer">mcpeaceofmind.com</a> to claim your insurance.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "TRAVEL INCONVENIENCE INSURANCE",
            description: 'Disrupted travel? Visit Mastercard <a href="https://mcpeaceofmind.com" target="_blank" rel="noopener noreferrer">mcpeaceofmind.com</a> to file a claim for the inconvenience with your [TIER] Mastercard® for baggage loss, flight delays, cancellations and more.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "TRAVEL MEDICAL INSURANCE",
            description: 'Discover the protection of your [TIER] Mastercard®, with global health insurance for you and your peace of mind. Visit <a href="https://mcpeaceofmind.com/TIER" target="_blank" rel="noopener noreferrer">mcpeaceofmind.com/TIER</a> to claim.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "PURCHASE PROTECTION",
            description: 'Automatically protect your purchases from theft or accident for 180 days with Purchase Protection from your Executive Mastercard®. Visit <a href="https://mcpeaceofmind.com" target="_blank" rel="noopener noreferrer">mcpeaceofmind.com</a> to claim online Up to 1,000USD.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "ECOMMERCE PROTECTION",
            description: 'Automatically protect your purchases from theft for 60 days with Ecommerce Protection from your Credit Mastercard®. Visit <a href="https://mcpeaceofmind.com" target="_blank" rel="noopener noreferrer">mcpeaceofmind.com</a> to claim online Up to 1,000USD.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "CORPORATE LIABILITY WAIVER INSURANCE",
            description: "Waive any unauthorized use of corporate cards by your employees with the Corporate Liability Waiver Insurance from Mastercard. (Up to 25,000USD)",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ]

    const travelCards = [
        {
            title: "FREE LOUNGE ACCESS WITH DRAGONPASS",
            description: "MEL lounges access with your Mastercard. Download the Mastercard Travel Pass App and present the app QR code to the lounge receptionist.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "HEATHROW EXPRESS OFFER",
            description: 'Travel smarter with Mastercard! Get <strong>12% OFF</strong> Heathrow Express tickets (Express & Business First). Tap to book <a href="http://www.heathrowexpress.com/mastercard" target="_blank" rel="noopener noreferrer">http://www.heathrowexpress.com/mastercard</a>',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "Costa Complimentary Food and/or Drink items in Dubai Airports",
            description: 'Get up to 1 complimentary food and/or drink items from a pre-determined list at Costa when traveling from an airport in Dubai. Download the Mastercard Travel Pass App from <a href="http://www.heathrowexpress.com/mastercard" target="_blank" rel="noopener noreferrer">Google Play</a> or <a href="http://www.heathrowexpress.com/mastercard" target="_blank" rel="noopener noreferrer">Apple Store</a> and enjoy your complimentary coffee or food!',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "PRICELESS CITIES",
            description: 'Enjoy exclusive dining, travel, and entertainment experiences worldwide with Mastercard’s Priceless Cities offers. Visit <a href="http://www.heathrowexpress.com/mastercard" target="_blank" rel="noopener noreferrer">priceless.com</a>, register, and choose your destination to get started.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ]

    const hotelAndTicketsCards = [
        {
            title: "IHG HOTEL CHAIN",
            description: 'Get <strong>15% DISCOUNT</strong> on IHG Hotels & Resorts across Europe, Maldives, India, Middle East & Africa when you book at <a href="http://www.ihg.com/mastercardoffer" target="_blank" rel="noopener noreferrer">http://www.ihg.com/mastercardoffer</a>. T&Cs apply.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ]

    const carRentalsCards = [
        {
            title: "RENTALCARS.COM DISCOUNT",
            description: 'Enjoy <strong>10% OFF</strong> car rental when booking on Rentalcars.com with your Mastercard. Simply go to <a href="https://www.rentalcars.com" target="_blank" rel="noopener noreferrer">www.rentalcars.com</a> to make a booking and enter your Mastercard details upon checkout.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "BUDGET TRUCK & CAR RENTAL",
            description: 'Get up to <strong>10% OFF</strong> on your next car or truck rental with Budget. Visit <a href="https://www.budgetinternational.com/mastercard" target="_blank" rel="noopener noreferrer">www.budgetinternational.com/mastercard</a> and book with your Mastercard.',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "SIXT",
            description: "Up to <strong>10% DISCOUNT</strong> worldwide.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        },
    ]

    return (
        <div className='bg-black text-white'>
            <Banner theme="dark-green" data={data} />

            <div className='container text-center py-10 lg:py-20'>
                <div className="md:max-w-full lg:max-w-[60vw] fhd:max-w-[45vw] mx-auto">
                    <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Built for leadership</h2>
                    <p className="leading-8 mt-8">A premium card designed for business owners and senior executives. Manage strategic business expenses, travel, and company spending with flexibility and full control through your MyMonty Business account.</p>
                </div>
                <Image className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} width='2120' height='860' />
            </div>

            <SectionScrollLayout title="Business Executive Credit Card Benefits" sections={sections}>
                <OfferSection id="productivity" cards={productivityCards} />
                <OfferSection id="accounting" cards={accoutingCards} className="mt-14" />
                <OfferSection id="marketing" cards={marketingCards} className="mt-14" />
                <OfferSection id="logistics" cards={logisticsCards} className="mt-14" />
                <OfferSection id="education" cards={educationCards} className="mt-14" />
                <OfferSection id="insurance" cards={insuranceCards} className="mt-14" />
                <OfferSection id="travel" cards={travelCards} className="mt-14" />
                <OfferSection id="hotel-and-tickets" cards={hotelAndTicketsCards} className="mt-14" />
                <OfferSection id="car-rentals" cards={carRentalsCards} className="mt-14" />
            </SectionScrollLayout>
        </div>
    );
}