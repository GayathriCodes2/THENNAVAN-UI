/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const UnderConstructionPage = () => {
    return (
        <div className='h-screen'>
            <div className='lg:mt-32'>
                {/* Place your image source and styling here */}
                <img
                    src="/Underconstruction-img.png"
                    alt="Under Construction"
                    className='h-96 w-80 mx-auto'
                />
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h2 className='font-semibold tex'>This page is under construction</h2>
                <p>
                    We're working hard to bring you exciting content. Please check back
                    later for updates. In the meantime, feel free to explore other
                    sections of our website.
                </p>
                <p>
                    If you have any urgent inquiries or need assistance, you can contact
                    our support team at support@example.com.
                </p>
            </div>
        </div>
    );
};

export default UnderConstructionPage;
