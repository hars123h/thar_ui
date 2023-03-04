import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import asset43 from '../images/assets4/asset 0.jpeg'
import lenskart_logo from '../images/lenskart_logo.png';



const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-red-800 h-full p-2'>
            {/* [#2e9afe] */}
            <div className="options text-center text-white  items-center text-lg flex font-medium ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>

            <div className="hp_company mt-10">
                <img src={lenskart_logo} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={240} />
            </div>

            <div className=" cpy_info sm:w-4/5 lg:w-3/4 mx-auto mt-5">

                {/*  [#2e9afe]*/}
                <div className='shadow-lg text-center bg-white h-10 flex justify-center items-center text-lg font-bold rounded-lg shadow-slate-300 text-red-800 '>Company Profile</div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white  mt-4">
                <div className="heading font-bold mb-1">Lenskart</div>
                <hr />
                <div className="data text-sm mt-2">
                    Founded in 2010, By an ex-Microsoft 'techie' with no money but truckloads of relentless passion to make a difference in this world, Lenskart is India's fastest growing eyewear business today.

                    With a rapidly growing business reaching out to over 1,00,000 customers a month via a unique combination of a strong online business  uniquely designed physical stores, as well as a first of its kind 'home eye check up' service, Lenskart is revolutionizing the eyewear industry in India.                </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Cause</div>
                <hr />
                <div className="data text-sm mt-2">
                    1/3rd of our population needs glasses but doesn't have access to them, making us the blind capital of the world with over 15 million blind people.

                    With the cause in mind, Peyush along with his two co-founders Amit Chaudhary and Sumeet Kapahi founded 'VALYOO technologies'.

                    The aim was in truly add 'valyoo' in customers' lives by eliminating the retailers, setting up our own high quality manufacturing and supply directly to the consumer everywhere in India. This not only cuts costs,but also helps us maintain high quality standards. Our in house robotic lens manufacturing and assembling ensures 100% precision and top quality control.

                    Offering the best quality products at affordable prices helped us grow more than 200% in the last 2 years and we are among the top 3 optical businesses in India today. From servicing 30 customers per day to more than 3000 today, we have came a long way. Our commitment to consumer satisfaction and innovative technologies has given us tremendous support from those who believe in our cause.                                   </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Trust</div>
                <hr />
                <div className="data text-sm mt-2">
                    *14 day refund
                    <br />
                    *All our product, including prescription lenses come with a 'no question ask' 14 days return policy.
                    <br />
                    *1 year warranty
                    <br />
                    *All Lenskart product come with 1 year warranty.
                    <br />
                    *Authenticity card
                    <br />
                    *With every frame or contact lenses, we provide authenticity card as a proof of quality and authenticity.
                </div>
            </div>

            {/* <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Awards</div>
                <hr />
                <div className="data text-sm mt-2">Walton is the No. 1 Manufacturer and Exporter of Refrigerator, Air Conditioner, LED TV, Mobile Phone, Walton has achieved many international & national awards and recognitions like some recent prestigious and best business awards are: The Golden Globe Tiger Award 2015 in the category of Excellence & Leadership Brand, DHL-Daily Star Bangladesh 15th Business Award 2014 for Best Enterprise in Bangladesh, Asia Best Employer Brand Awards in 2015, Six times 1st Prize for Highest VAT Payer at DITF-2015, 2014, 2013, 2012, 2011 & 2010 respectively, Second Prize for Premier Pavilion Category at DITF-2015, Best Refrigerator Brand Award-2014, Best Television Brand Award-2014, Best Local Brand Award-2014, 1st Prize for Premier Pavilion Category at DITF-2014, The Global Brand excellence Award in 2014 for brand excellence in consumer electronics, 1st Prize for Premier Pavilion Category at DITF-2013, Best Sponsor Award-2012, Creative Media Ltd. BABISAS Award-2012, Best Brand (Refrigerator) Award-2011, 2nd Prize for Premier Pavilion Category at DITF-2011, 2nd Prize for Premier Pavilion Category at DITF-2010, 1st Prize for Premier Pavilion Category at DITF-2009, 1st Prize for Premier Pavilion Category at CITF-2005.
                </div>
            </div> */}

            {/* <div className="part  sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Vision</div>
                <hr />
                <div className="data text-sm mt-2">Along the way, Walton has earned domestic and global recognition for its experience and proven track record in a variety of electronics fields. Walton is the pioneer of developing state of the art designs and modern technology having leading market share specializing in Multi-Stored Refrigerators, Freezers, Air Conditioners, LED/ LCD televisions, Motorcycles, Smart Phones and Home Appliances.Walton is working on carrying the flag of red and green into the global market presence from the present 40 countries to more than 200 countries to dominate Go Global and the top five Electronics Brand of the Globe within 2030.</div>
                <br />
                <br />
            </div> */}

        </div>
    )
}

export default Company