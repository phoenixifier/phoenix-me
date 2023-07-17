import Image from "next/image";
import {useState} from 'react';


const Phoenix = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Image className="relative cursor-pointer"
                   height={150} width={150} alt="Phoenix"
                   src={isActive ? '/img/gray-phoenix.svg' : '/img/red-phoenix.svg'}
                   onClick={() => setIsOpen(true)}
                   onMouseEnter={() => setIsActive(false)}
                   onMouseLeave={() => setIsActive(true)}
            />
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"
                         onClick={() => setIsOpen(false)}>
                    </div>

                    <div className="relative bg-black border border-reddish w-4/5 h-4/5 rounded shadow-lg z-50">
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)}
                                    className="m-4 text-center py-1 px-2 rounded bg-reddish text-white text-xl hover:bg-red-900">⚔
                            </button>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col gap-10 pr-14">
                                <Image
                                    src="/img/avatar.png" height={200} width={200} alt="Avatar"
                                />

                                <div className="w-px bg-reddish h-[250px] mx-5 ml-[90px]"></div>

                                <button className="border border-reddish p-2 w-[100px] ml-[40px]">
                                    Send Message
                                </button>
                            </div>

                            <div className="flex flex-col mr-[20px]">
                                <div className="mt-10 ml-[80px] w-[900px] p-2">
                                    <p className="text-xl">
                                        Hi, there! <br/><br/> My name's Rasul - I'm a 21-years-old graduate, who has recently
                                        started contributing to Open Source working for Uzinfocom. I love writing some
                                        Rusty code and developing front-end on top of Next.js framework. Apart from
                                        programming, I love break dancing and I'm crazy about the mythological creature
                                        - Phoenix - which symbolizes my way of life. <br/><br/>
                                        <span className="text-reddish">Now feel free to research my profile!</span>
                                    </p>
                                </div>
                                <div className="flex justify-start items-center w-[900px] h-[400px] ml-[80px] gap-10">
                                        <Image src="/img/gray-phoenix.svg" height={250} width={250} alt="Phoenix 1"/>
                                        <Image src="/img/gray-phoenix.svg" height={200} width={200} alt="Phoenix 2"/>
                                        <Image src="/img/gray-phoenix.svg" height={150} width={150} alt="Phoenix 3"/>
                                        <Image className="hidden" src="/img/gray-phoenix.svg" height={150} width={150} alt="Phoenix 4"/>
                                        <Image className="hidden" src="/img/gray-phoenix.svg" height={150} width={150} alt="Phoenix 5"/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            )}
            <h1 data-text="⚔Phoenix Me!⚔" className="relative text-2xl text-grayish
                before:content-[attr(data-text)] before:absolute before:text-2xl before:text-reddish
                before:w-14 before:overflow-hidden before:whitespace-nowrap before:border-r-2 before:animate-anime">
                ⚔Phoenix Me!⚔
            </h1>
        </div>
    )
}

export default Phoenix;