import Image from "next/image";
import form from "./form/page";
import captcha from "./captcha.png"
import page3Img from './page3img.png';
import page4Img from './page4img.png';
import page5Img from './page5img.png';
import page6Img from './page6img.png';
import page2Img1 from './2ndpageassets/1.png'
import page2Img2 from './2ndpageassets/2.png'
import page2Img3 from './2ndpageassets/3.png'
import page2Img4 from './2ndpageassets/4.png'
function callback() {
    return (
        <>
            <div className="flex min-h-screen flex-row items-center justify-center font-poppins p-[100px]">
                <div className="w-[50%]">
                    <div className="text-[45px] font-bold">
                        <span className="text-[#0071E7]">Connect</span> And <span className="text-[#0071E7]">Grow</span>
                    </div>
                    <div className="text-[16px]">
                        <span className="font-semibold">Are you looking to enhance your mutual fund business in today’s challenging times?<br/> Are your clients asking for online access to their investments?<br/> Are your service costs sky-rocketing?<br/> Do you wish to attract more and more affluent customers?</span><br/><br/> Presenting www.partner.fundsindia.com a premium destination that has been strategically tailored to give you all the advantages of an integrated online transaction platform, to complement your financial planning and Value added services to your clients.<br/><br/> With FundsindiaPartner have an effective way to attract, retain and service ideal clients in the digital age. A service that requires differentiation, strategy, and innovative content distribution
                    </div>
                </div>
                <div className="w-[50%] p-[63px]">
                <div className="w-[513px] h-[555px] bg-white p-8  items-center rounded-[15px] shadow-lg ">
                <div className="text-[26px] font-bold mb-6 text-center">Please tell us how to <span className="text-[#0071E7]">REACH YOU</span></div>
                <div className="mb-4">
                    <input className="w-full text-[14] text-[#6E6E72] px-3 py-2 border border-[#E4E5E5] rounded-[10px] focus:outline-none focus:border-indigo-500"
                    type="text" id="name" name="name" placeholder="Name"/>
                </div>
                <div className="mb-4">
                    <input className="w-full text-[#6E6E72] px-3 py-2 border border-[#E4E5E5] rounded-[10px] focus:outline-none focus:border-1px solid #E4E5E5"
                    type="text" id="mobilenumber" name="mobilenumber" placeholder="Mobile Number"/>
                </div>
                <div className="mb-4">
                    <input className="w-full text-[#6E6E72] px-3 py-2 border border-[#E4E5E5] rounded-[10px] focus:outline-none focus:border-indigo-500"
                    type="text" id="phonenumber" name="phonenumber" placeholder="Phone Number"/>
                </div>
                <div className="mb-4">
                    <input className="w-full text-[#6E6E72] px-3 py-2 border border-[#E4E5E5] rounded-[10px] focus:outline-none focus:border-indigo-500"
                    type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div className="mb-4">
                    <input className="w-full h-[80px] text-[#6E6E72] px-3 py-2 border border-[#E4E5E5] rounded-[10px] focus:outline-none focus:border-indigo-500"
                    type="text" id="comments" name="comments" placeholder="Comments"/>
                </div>
                <div className="flex flex-row">
                    <div className="mb-4">
                        <input className="w-full text-[#6E6E72] px-3 py-2 border border-[#E4E5E5] rounded-[10px] focus:outline-none focus:border-indigo-500"
                        type="text" id="verficationcode" name="verficationcode" placeholder="Verfication Code"/>
                    </div>
                    <div>
                        <Image className="w-[144px] h-[36px] ml-[18px]" src={captcha}/>
                    </div>
                </div>
                <div className="flex flex-rowitems-center justify-center">
                    <button
                    className="w-[166px] bg-[#0071E7] text-[#FFFFFF] text-sm font-bold py-2 px-4 rounded-[25px]  hover:bg-[#0070E9]transition duration-300"
                    >Submit</button>
                </div>
                
                </div>
                </div>
            </div>

            {/* Second page will be here */}
            <div className="flex min-h-screen flex-col items-center justify-center font-poppins p-[100px]">
                <div className="items-center text-[35px] font-bold">
                    How it <span className="text-[#0071E7]">Works?</span>
                </div>
                <div className="flex gap-x-[44px] mt-[53px]">

                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px]">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[74px] h-[63px]" src={page2Img1} />
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center">
                        Partner signs up with FundsindiaPartner
                        </div>
                    </div>

                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px]">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[64px] h-[66px]" src={page2Img2}/>
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center ">
                        Partner uploads or creates client information in Funds IndiaPartner
                        </div>
                    </div>

                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px]">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[73px] h-[51px]" src={page2Img3}/>
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center ">
                        FundsindiaPartner generates user ids, documents for client signature
                        </div>
                    </div>
                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px]">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[57px] h-[73px]" src={page2Img4}/>
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center ">
                        Once client account opened, investments can start
                        </div>
                    </div>
                </div>

                <div className="h-[187px] min-w-full shadow-lg mt-[60px] rounded-[15px]">
                    <div className="text-center font-bold text-[30px] text-[#0071E7]">
                    Connect <span className="text-[#000000]">and</span> Grow!
                    </div>
                    <div className="mt-[31px] mb-[30px] ml-[38px] mr-[37px] text-[16px] text-center">
                    FundsindiaPartner lets you connect with your clients across geographical regions, offering them products across the investment<br/> spectrum, giving them the best of both worlds - your planning & advice along with access to cutting-edge technology and services. <br/>Direct your browser to www.partner.fundsindia.com and get the online advantage to grow your business exponentially
                    </div>
                </div>
            </div>

            {/* 3rd page */}

            <div className="flex min-h-screen flex-row items-center justify-center font-poppins p-[100px]">
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                        With Fundsindiapartner<br/> Get Low Cost High Value Solutions
                    </div>
                    <br/>
                    <div className="text-[16px]">
                        <ul className="marker:text-[#0071E7] list-outside list-disc ml-4">
                            <li>
                                A single contact point for all your clients and dedicated services
                            </li>
                            <li>
                                Immediate access to information and source documents
                            </li>
                            <li>
                                All transactions will be done online in a convenient, secure, user-friendly, 24x7-available service platform
                            </li>
                            <li>
                                Increased data accuracy, productivity and efficiency
                            </li>
                            <li>
                                Paperless organization with permanent online databases
                            </li>
                            <li>
                                Call center- Supported by knowledgeable service personnel
                            </li>
                            <li>
                                Portfolio on your mobile-A missed call will get your portfolio on your mobile
                            </li>
                            <li>
                                Chat on the website - Live chat with customer service personnel
                            </li>
                            <li>
                                Query Tracker - ‘Ask us’ and it will be answered and tracked for your reference
                            </li>
                        </ul>
                            
                    </div>
                </div>
                <div className="w-[50%] p-[63px]">
                    <Image src={page3Img}/>
                </div>
            </div>

            {/* 4th page */}
            <div className="flex min-h-screen flex-row items-center justify-center font-poppins p-[100px]">
                <div className="w-[50%] p-[63px]">
                    <Image src={page4Img}/>
                </div>
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                        Value added services
                    </div>
                    <br/>
                    <div className="text-[16px]">
                        <ul className="marker:text-[#0071E7] list-outside list-disc ml-4">
                            <li>
                            Customize Your web panels with Your logo / name / service provider. create accounts based on investment strategy. keep track of your Clients/prospects and customize templates for investment proposals
                            </li>
                            <li>
                            Get trigger facility on ALL mutual funds
                            </li>
                            <li>
                            Value cost averaging investment plan (VIP) & value cost averaging transfer plan (VTP) 
                            </li>
                            <li>
                            Prepackaged portfolios on Mutual Funds & Equities
                            </li>
                            <li>
                            Different modes of SIP including Alert SIP, Portfolio SIP, Flexi-SIP, SIP on ETFs
                            </li>
                            <li>
                            Comprehensive, integrated financial planning tool, consolidation family’s investments. auto calculation of capital gains
                            </li>
                        </ul>   
                    </div>
                </div> 
            </div>

            {/* 5th page */}

            <div className="flex min-h-screen flex-row items-center justify-center font-poppins p-[100px]">
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                        With Fundsindiapartner<br/> Get Low Cost High Value Solutions
                    </div>
                    <br/>
                    <div className="text-[16px]">
                    With Fundsindia Partner can reach out to NRIs without the cumbersome procedures Iike mailing forms abroad After the initial sign-up. the entire process is online with 24x7 access.
                    </div>
                </div>
                <div className="w-[50%] p-[63px]">
                    <Image src={page5Img}/>
                </div>
            </div>

            {/* 6th page */}

            <div className="flex min-h-screen flex-row items-center justify-center font-poppins p-[100px]">
                <div className="w-[50%] p-[63px]">
                    <Image src={page6Img}/>
                </div>
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                    Non…Competitive Services
                    </div>
                    <br/>
                    <div className="text-[16px]">
                    FundsIndiaPartner is here to sUpport you in your business and not compete with you. You have secured access and we only work to facilitate your connection<br/>At FundsIndiaPartner we adhere to the highest standards of client confidentiality. If for any reason the Partner should decide to cancel the account. FundsIndiaPartner will transfer back all registered clients and AUM, as per the agreement.
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default callback;