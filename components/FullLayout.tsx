import React from "react";
interface PageProps {
    children: React.ReactNode;
}

const FullPage = ({ children }: PageProps) => {
    return (
        <div className='font-sans'>
            {children}
        </div>
    );
};

export default FullPage;