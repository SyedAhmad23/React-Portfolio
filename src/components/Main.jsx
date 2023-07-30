import { TypeAnimation } from 'react-type-animation'
import main1 from "../images/main1.jpg";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen " src={main1} />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-950'>This is Syed Ahmad</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-950'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Software Engineer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Website Developer',
                                2000,
                                'Front End Developer',
                                2000,
                                'Seo Expert',
                                2000,
                            ]}
                            wrapper="div"
                            speed={50}
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className="cursor-pointer" size={20} />
                        <FaFacebookF className="cursor-pointer" size={20} />
                        <FaInstagram className="cursor-pointer" size={20} />
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
