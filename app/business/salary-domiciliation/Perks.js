import React from 'react';

const Perks = () => {
  return (
    <section className='lg:py-32 max-lg:py-16 bg-[#091111]'>
      <div className='container'>
        <div className=''>
            <div className='flex max-lg:flex-col max-lg:gap-10 lg:gap-32 justify-between items-center'>
                <div className='w-full'>
                    <h2 className='section-title text-balance'>The Smarter Way to Pay Your Team</h2>
                    <div className='flex flex-col gap-5 my-7'>
                        <p>
                            Still paying your employees in cash, carrying batches of money at month-end, and calling each one separately?
                        </p>
                        <p>
                        Or using financial institutions that take days before employees can withdraw, plus hidden fees that spark complaints?
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

            <div className='flex max-lg:flex-col max-lg:gap-10 lg:gap-32 justify-between items-center lg:mt-32 max-lg:mt-16'>
                <div className='w-full'>
                    <div className='flex flex-col gap-5'>
                        <p className='mt-5'>
                            With MyMonty Salary Domiciliation, you can streamline payments, transfer salaries instantly with no hidden fees, and give your employees easy access to financial benefits like salary advances, car loans, and credit cards through one digital platform that has it all.
                        </p>
                        <p>
                            Make payroll smarter. Make your employees happier.
                        </p>
                    </div>
                </div>
                <div className='w-full'>
                    <img src='/prepaid-card-benefits.webp' />
                </div>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Perks;
