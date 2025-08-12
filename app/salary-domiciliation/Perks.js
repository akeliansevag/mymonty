import React from 'react';

const Perks = () => {
  return (
    <section className='lg:py-32 max-lg:py-16 bg-[#091111]'>
      <div className='container'>
        <div className=''>
            <div className='flex max-lg:flex-col lg:gap-32 items-center justify-between '>
                <div className='w-full'>
                    <h2 className='section-title text-balance'>The Smarter Way to Pay Your Team</h2>
                    <div className='flex flex-col gap-5 my-7'>
                        <p>
                            Still paying your employees in cash, carrying batches of money at month-end, and calling each one separately?
                        </p>
                        <p>
                        Or using wallets or financial institutions that take days before employees can withdraw, plus hidden fees that spark complaints? 
                        </p>
                        <p>
                            Are your employees constantly asking for loans or salary advances that are complicated to arrange?
                            Payroll should be simple and hassle-free, for you and
                            your team.
                        </p>
                    </div>
                    
                </div>
                <div className='w-full'>
                    <img src='/mymonty-transfer.webp' />
                </div>
            </div>

            <div className='flex max-lg:flex-col lg:gap-32 justify-between lg:mt-32 max-lg:mt-16 items-center'>
                <div className='w-full'>
                    <img src='/prepaid-card-benefits.webp' />
                </div>
                <div className='w-full'>
                    <h2 className='section-title text-balance'>With MyMonty Salary Domiciliation</h2>
                    <div className='flex flex-col gap-5'>
                        <p className='mt-5'>
                            Make payroll smarter. Make your employees happier.
                        </p>
                            <ul className=' list-disc pl-5'>
                                <li>You can streamline payments</li>
                                <li>Transfer salaries instantly with no hidden fees</li>
                                <li>Give your employees easy access to financial benefits like salary advances, car loans, and credit cards</li>
                            </ul>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Perks;
