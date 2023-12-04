import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white p-8">
            <h1 className="text-3xl font-bold mb-4 mx-auto">Welcome to "Thennavan Stores"</h1>

            <div className="lg:flex items-center justify-center mb-8">
                <img src='/leelavathi.png' alt="Leelavathi" className="h-1/2 w-1/2 mr-4 my-5" />
                <div>
                    <h2 className="text-2xl font-bold mb-4">Thennavan - "A Farmer's Heartbeat"</h2>
                    <p className="text-lg">Embark on a heartfelt journey where farming isn't just a job but a passion. I'm Leelavathi, a single mother farmer from Tirunelveli, Tamil Nadu.</p>
                    <p className="text-lg">Thennavan Stores isn't just a place to shop; it's where the hard work of single moms like me meets the love we cultivate in the land.</p>
                </div>
            </div>
            <hr className="w-1/2 h-2 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10" />

            <div className="lg:flex items-center justify-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Thennavan - "Empowering Farmers"</h2>
                    <p>In the fields of Tirunelveli, where dreams are sown like seeds, Thennavan is a beacon of hope. This store isn't just a marketplace; it's a dream shared by farmers like me who tend the land solo.</p>
                    <p>Choosing Thennavan means standing with us, acknowledging the effort we invest in growing your food, and giving us a fair chance.</p>
                </div>

                <img src="/From-farmers-about-us-page.png" alt="From-farmers" className='h-1/2 w-1/2 mr-4 my-5' />
            </div>
            <hr className="w-1/2 h-2 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10" />

            <div className="lg:flex items-center justify-center mb-8">
                <img src="/Temple-front-view.png" alt="Temple-front-view" className="h-1/2 w-1/2 mr-4 my-5" />
                <div>
                    <h2 className="text-2xl font-bold mb-4">Taste of Our Land - "Savor the South"</h2>
                    <p>Indulge in the flavors that define South Tamil Nadu. "Taste of Our Land" is a celebration of our heritage, from the sweet Tirunelveli Halwa to the crunchy Nagerkoil banana chips.</p>
                    <p>Your purchase isn't just about delicious food; it's about supporting traditions and the love single mothers pour into their recipes.</p>
                </div>
            </div>
            <hr className="w-1/2 h-2 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10" />

            <div className="lg:flex items-center justify-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Sell with Us - "Growing Together"</h2>
                    <p>At Thennavan Stores, "Sell with Us" isn't just an option; it's an invitation to share your story with our community. It's like creating music together, where your hard work harmonizes with the efforts of farmers working towards a fairer, more equal future.</p>
                    <p>Thank you for being a part of our story. Together, let's cultivate change, one harvest at a time.</p>
                </div>

                <img src="/sell-with-us-image.png" alt="Temple-front-view" className="h-1/2 w-1/2 mr-4 my-5" />
            </div>
        </div>
    );
};

export default AboutUs;
