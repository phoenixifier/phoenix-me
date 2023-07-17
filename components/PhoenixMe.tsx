import Image from "next/image";
import { useState } from 'react';


const Phoenix = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="min-h-screen flex justify-center items-center ">
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
                         onClick={() => setIsOpen(false)}></div>

                    <div className="relative bg-grayish w-4/5 h-4/5 rounded shadow-lg z-50">
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)}
                                    className="m-4 text-center py-1 px-2 rounded bg-reddish text-white text-xl hover:bg-red-900">⚔
                            </button>
                        </div>
                        <div className="flex justify-start items-start">
                            <Image
                                className="ml-14"
                                src="/img/avatar.png" height={200} width={200} alt="Avatar"
                            />
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