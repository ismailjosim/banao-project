import React from 'react';
import bannerBg from '../../assets/banner.png'

const Banner = () => {
    return (
        <section>
            <div className="hero place-items-stretch min-h-[450px]" style={ { backgroundImage: `url(${ bannerBg })` } }>
                <div className="hero-overlay bg-black bg-opacity-30"></div>
                <div className="text-white text-left w-11/12 mx-auto flex flex-col justify-end mb-20 pl-20">
                    <h1 className="mb-5 text-5xl font-bold">Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>

        </section>
    );
};

export default Banner;
