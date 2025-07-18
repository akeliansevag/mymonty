'use client';
import React from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionForexImage1 from '@/public/personal/forex-on-the-go.webp';
import sectionForexImage2 from '@/public/personal/whats-next.webp';
// import useGlobalAnimation from '../hooks/useGlobalAnimation';
import Link from 'next/link';

const SectionForex = () => {
    const howItWorks = [
        {
            title: 'Head to the <span className="font-bold">More</span> tab in the MyMonty app',
        },
        {
            title: 'Tap <span className="font-bold">Exchange</span> and pick your currencies',
        },
        {
            title: 'Enter the <span className="font-bold">amount</span> you want to convert',
        },
        {
            title: '<span className="font-bold">Confirm</span>, and you are all set!',
        }
    ];
    return (
        <div>
            <Section bg="bg-[#F7F7F7]">
                <div id="forex" className="container">
                    <div className="text-center">
                        <TextBlock buttonColor="dark" center={true} subTitle="Quick, Transparent, Reliable" title="Forex on the Go" description="Enjoy real-time currency exchange right in the palm of your hand." button={false} />
                        <Image className="w-full lg:w-3/4 mx-auto mt-10" alt="Forex" src={sectionForexImage1} width="1562" height="1064" />
                        <TextBlock buttonColor="dark" center={true} subTitle="Convert & Transfer Instantly" title="Stay in Control" description="Need to transfer money between currencies? From LBP to USD or the other way around, with our Forex Manual Transfers, you can quickly move money between your wallets at real-time exchange rates." button={false} />
                    </div>
                    <div className="my-10 py-10">
                        <TextBlock subTitle="Unlock The Perks" button={false} />
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="bg-white p-4 lg:p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.1 5H16.9C14.7469 5 13 6.76367 13 8.9375V43.0625C13 45.2363 14.7469 47 16.9 47H35.1C37.2531 47 39 45.2363 39 43.0625V8.9375C39 6.76367 37.2531 5 35.1 5ZM26 44.375C24.5619 44.375 23.4 43.202 23.4 41.75C23.4 40.298 24.5619 39.125 26 39.125C27.4381 39.125 28.6 40.298 28.6 41.75C28.6 43.202 27.4381 44.375 26 44.375ZM35.1 35.5156C35.1 36.057 34.6612 36.5 34.125 36.5H17.875C17.3387 36.5 16.9 36.057 16.9 35.5156V9.92188C16.9 9.38047 17.3387 8.9375 17.875 8.9375H34.125C34.6612 8.9375 35.1 9.38047 35.1 9.92188V35.5156Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">Convenience</h2>
                                <p className="mt-2">No need to visit banks or exchange offices, convert your money directly in the app.</p>
                            </div>
                            <div className="bg-white p-4 lg:p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.8328 15.5H11.5625C10.8373 15.5 10.25 14.9406 10.25 14.25C10.25 13.5594 10.8373 13 11.5625 13H43.0625C43.7877 13 44.375 12.4406 44.375 11.75C44.375 9.67891 42.6121 8 40.4375 8H10.25C7.3502 8 5 10.2383 5 13V38C5 40.7617 7.3502 43 10.25 43H42.8328C45.1313 43 47 41.318 47 39.25V19.25C47 17.182 45.1313 15.5 42.8328 15.5ZM39.125 31.75C37.6755 31.75 36.5 30.6305 36.5 29.25C36.5 27.8695 37.6755 26.75 39.125 26.75C40.5745 26.75 41.75 27.8695 41.75 29.25C41.75 30.6305 40.5745 31.75 39.125 31.75Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">Both Your Wallets, one Place</h2>
                                <p className="mt-2">Hold and manage both LBP and USD currencies all in one place.</p>
                            </div>
                            <div className="bg-white p-4 lg:p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.998 29.9375C42.998 39.3629 35.3893 47 25.999 47C16.6087 47 9 39.3629 9 29.9375C9 21.4062 15.2357 14.3352 23.3838 13.0801V10.25H21.0954C20.556 10.25 20.1147 9.80703 20.1147 9.26562V5.98438C20.1147 5.44297 20.556 5 21.0954 5H30.9025C31.4419 5 31.8832 5.44297 31.8832 5.98438V9.26562C31.8832 9.80703 31.4419 10.25 30.9025 10.25H28.6142V13.0801C31.6789 13.5559 34.474 14.852 36.7623 16.7387L39.0097 14.4828C39.3938 14.0973 40.015 14.0973 40.3991 14.4828L42.7119 16.8043C43.096 17.1898 43.096 17.8133 42.7119 18.1988L40.3092 20.6105L40.2601 20.6598C41.9927 23.3176 42.998 26.5086 42.998 29.9375ZM28.6142 32.8906V20.4629C28.6142 19.9215 28.1729 19.4785 27.6335 19.4785H24.3645C23.8251 19.4785 23.3838 19.9215 23.3838 20.4629V32.8906C23.3838 33.432 23.8251 33.875 24.3645 33.875H27.6335C28.1729 33.875 28.6142 33.432 28.6142 32.8906Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">24/7 Access</h2>
                                <p className="mt-2">Exchange currencies anytime, without time restrictions.</p>
                            </div>
                            <div className="bg-white p-4 lg:p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.6031 11.8646L27.0031 5.3015C26.5279 5.10245 26.0185 5 25.5041 5C24.9896 5 24.4802 5.10245 24.005 5.3015L8.405 11.8646C6.95063 12.4717 6 13.9074 6 15.499C6 31.7838 15.3031 43.0396 23.9969 46.6985C24.9556 47.1005 26.0362 47.1005 26.995 46.6985C33.9581 43.7697 45 33.6543 45 15.499C45 13.9074 44.0494 12.4717 42.6031 11.8646ZM25.5081 41.6121L25.5 10.3551L39.7919 16.3686C39.5238 28.7893 33.1213 37.789 25.5081 41.6121Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">Crystal clear</h2>
                                <p className="mt-2">See conversion amounts upfront, with complete transparency and no hidden fees.</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-10 py-10 text-center">
                        <TextBlock buttonColor="dark" center={true} subTitle="Getting Started Is Easy" title="How It Works" button={false} />
                        <div className='max-w-[950px] mx-auto relative mt-16'>
                            <>
                                <div className='max-lg:hidden border-t-[2px] left-1/2 -translate-x-1/2 h-[1px] absolute top-[43px] w-[80%]'></div>
                                <div className='relative flex max-lg:flex-col max-lg:items-center max-lg:gap-10 text-center w-full'>
                                    {
                                        howItWorks.map((item,index)=>{
                                            return (
                                                <div className='w-1/2 lg:w-1/4' key={index}>
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                            <div className='bg-[#F7F7F7] px-5'>
                                                                <div className="text-[#007AFF] font-bold w-[86px] h-[86px] flex border border-[#007AFF] rounded-full justify-center items-center ">
                                                                    {index+1}
                                                                </div>
                                                            </div>
                                                        <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        </div>
                    </div>
                    
                    {/* <div className="my-10 py-10">
                        <div className="flex max-lg:flex-col gap-4 bg-white rounded-[1.875rem] overflow-hidden lg:max-h-[500px]">
                            <div className="lg:w-1/2 flex flex-col justify-center gap-4 p-10">
                                <svg width="199" height="106" viewBox="0 0 199 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M134.047 0.663006C135.774 1.3616 136.971 2.61729 136.58 4.44335C135.724 8.41824 131.215 11.8272 128.037 14.7277C119.577 22.4387 109.787 29.1681 101.724 37.1665C98.0819 40.7789 94.4673 44.3868 93.4684 49.1222C92.0833 49.467 90.1517 49.6793 88.739 49.3211C85.9411 48.6181 86.2225 48.2025 87.4201 46.6064C88.6121 45.0235 90.4222 43.2814 91.8625 41.7162C95.3392 37.9447 99.1746 34.3943 103.137 30.9456C111.089 24.0171 119.588 17.4866 127.038 10.2001C128.329 8.93555 130.095 7.3792 130.586 5.74768C130.923 4.62463 130.857 4.576 129.312 4.37261C127.976 4.19575 126.58 4.29744 125.266 4.53178C120.04 5.45586 114.858 7.73734 110.063 9.57666C104.881 11.5619 99.7982 13.7063 94.7984 15.9657C84.7601 20.5021 75.0584 25.5116 65.5278 30.7024C59.0821 34.2174 52.7082 37.8209 46.3508 41.4333C32.8358 49.1177 19.2435 56.6254 6.51215 65.1411C6.00445 65.4816 5.49122 65.8264 5.12699 66.2686C2.754 69.1293 12.1797 69.5581 14.2216 69.6687C33.8457 70.7387 78.342 63.8589 93.4629 70.7342C104.616 75.8012 88.154 85.9175 82.4699 88.9418C68.7176 96.2593 28.741 107.136 12.5991 105.898C9.55841 105.664 5.9327 104.779 3.85772 102.878C1.2695 100.508 2.96923 96.9933 5.67885 95.1318C6.12034 94.8312 6.71634 94.4288 7.32339 94.3846C9.48667 94.2343 8.47125 97.5415 8.23947 98.3905C7.68761 100.407 7.12472 101.565 10.1599 102.034C16.4622 102.998 22.803 102.219 29.0335 101.273C37.35 100.004 45.512 98.0721 53.4863 95.8039C64.2531 92.7354 75.4889 89.154 84.7822 83.7156C91.4762 79.785 96.4319 75.2043 85.2788 72.4277C64.9484 67.3695 16.269 78.6487 2.74848 71.3444C-5.52387 66.8743 7.14127 59.6054 11.5892 56.9084C27.3006 47.389 44.927 37.8253 61.4772 29.23C80.3507 19.4277 99.0974 9.00629 120.195 2.46254C123.291 1.50308 126.387 0.242968 129.748 0.0174739C131.177 -0.0753767 132.766 0.132432 134.058 0.658585L134.047 0.663006Z" fill="#007AFF"/>
                                    <path d="M198.685 73.5333C198.426 73.7853 198.012 73.9754 197.636 74.2274C195.909 75.3859 194.325 76.6371 192.697 77.884C189.844 80.0726 185.369 83.3799 181.439 80.7093C175.397 76.6062 179.486 68.4928 166.65 73.7057C164.475 74.59 156.6 79.7012 155.949 79.7498C153.074 79.9532 153.372 77.4507 154.133 75.8413C145.546 76.3674 140.994 85.1263 132.032 83.6009C124.339 82.2878 129.372 76.3409 128.748 75.8413C119.984 76.1773 113.771 86.8197 104.637 82.9996C100.112 81.1072 102.684 76.699 104.577 73.9356C105.73 72.2511 110.283 66.6358 112.523 66.5474C114.3 66.4766 115.101 67.9799 116.337 68.7581C121.11 64.403 125.371 66.5474 125.696 71.8752L126.816 72.3174L132.07 71.6453C134.73 68.7448 137.649 63.7265 141.711 68.7493C142.881 68.8421 144.658 65.3624 148.609 66.7906C151.424 67.8075 149.928 72.1715 152.715 72.2687C153.129 72.282 157.218 71.747 157.445 71.6453C158.89 70.9688 161.114 66.344 163.338 66.1848C166.832 67.0205 164.194 69.0853 164.072 70.9777C164.519 71.3579 173.647 67.1885 176.373 67.5245C181.351 68.1391 181.103 79.1574 188.089 76.2967C190.175 75.4433 191.731 73.9975 193.663 72.9673C194.662 72.4323 195.727 71.9858 196.93 71.8443C198.023 71.7161 199.711 72.534 198.69 73.5333H198.685ZM113.837 70.9821C113.324 70.9158 113.147 70.9379 112.733 71.1943C111.646 71.8708 105.669 79.0247 106.668 79.8206C110.531 80.4396 116.392 77.7602 118.202 75.0985C120.161 72.2201 113.991 73.3078 113.831 70.9821H113.837ZM139.934 72.1715C139.581 71.9415 139.443 71.1501 138.952 70.9821H138.141C137.125 73.5377 133.555 75.7175 132.484 78.1802C131.215 81.1072 136.926 79.5155 138.709 78.7417C140.249 78.0741 145.386 74.6829 143.968 73.1575C142.776 72.4589 141.11 72.9275 139.94 72.1759L139.934 72.1715Z" fill="#007AFF"/>
                                </svg>
                                <TextBlock buttonColor="dark" center={false} title="What’s Next" description="You’ll be able to settle USD bills directly from your LBP wallet and vice versa. <br /> <br /> <i>One less thing to worry about!</i>" button={false} />
                            </div>
                            <div className="lg:w-1/2 relative">
                                <img className="h-full w-full object-cover" alt="Forex" src='/personal/whats-next.webp' />
                            </div>
                        </div>
                    </div> */}

                    <div className="my-10 text-center">
                        <div className="flex flex-col gap-4 px-4 lg:px-10 py-10 items-center bg-[#007AFF] rounded-[1.875rem] text-white overflow-hidden">
                            <TextBlock buttonColor="dark" center={false} title="Tap Into Smarter Money Management" button={false} />
                            <div className="w-full flex max-md:lex-col justify-center items-center text-center gap-8">
                                <div className="flex max-md:flex-col gap-4 items-center">
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8337 9.2333V9.99997C17.8326 11.797 17.2507 13.5455 16.1748 14.9848C15.0988 16.4241 13.5864 17.477 11.8631 17.9866C10.1399 18.4961 8.29804 18.4349 6.61238 17.8121C4.92673 17.1894 3.48754 16.0384 2.50946 14.5309C1.53138 13.0233 1.06682 11.24 1.18506 9.4469C1.30329 7.65377 1.998 5.94691 3.16556 4.58086C4.33312 3.21482 5.91098 2.26279 7.66382 1.86676C9.41665 1.47073 11.2505 1.65192 12.892 2.3833M17.8337 3.3333L9.50033 11.675L7.00033 9.17497" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h2 className="text-base font-[700] uppercase">Zero Commissions</h2>
                                </div>
                                <div className="flex max-md:flex-col gap-4 items-center">
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8337 9.2333V9.99997C17.8326 11.797 17.2507 13.5455 16.1748 14.9848C15.0988 16.4241 13.5864 17.477 11.8631 17.9866C10.1399 18.4961 8.29804 18.4349 6.61238 17.8121C4.92673 17.1894 3.48754 16.0384 2.50946 14.5309C1.53138 13.0233 1.06682 11.24 1.18506 9.4469C1.30329 7.65377 1.998 5.94691 3.16556 4.58086C4.33312 3.21482 5.91098 2.26279 7.66382 1.86676C9.41665 1.47073 11.2505 1.65192 12.892 2.3833M17.8337 3.3333L9.50033 11.675L7.00033 9.17497" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h2 className="text-base font-[700] uppercase">Zero Deposit Fees</h2>
                                </div>
                            </div>
                            <TextBlock buttonColor="dark" center={false} description="Go to your MyMonty app now and enjoy quick, seamless, and secure Forex transfers anytime you need them!" button={true} />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default SectionForex;
