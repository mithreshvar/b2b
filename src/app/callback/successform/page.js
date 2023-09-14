import Image from 'next/image';
import tick from './successmark.png';

function Sucessform() {
    return (
        <div className="container mx-auto py-8">
                <div className="w-[513px] h-[555px] max-w-sm mx-auto bg-white p-8  items-center rounded-md shadow-md ">
                        <div className='flex justify-center'>
                                <Image className="" src={tick}/>
                        </div>
                        <div  className='flex justify-center'>
                                <div className='text-[16px] text-center font-semibold'>
                                        Thank You for showing interest in PartnerFundsindia. Our customer care people will contact to you soon.
                                </div>
                        </div>  
                </div>  
        </div>
)}

export default  Sucessform;