import React from 'react';
import Image from 'next/image';

export default function Whatsapp() {
    return (
        <div className='flex justify-end fixed left-0 right-0 bottom-14'>
            <a href="https://wa.me/9597885273" target="_blank" rel="noopener noreferrer" className='p-3 bg-white rounded-full hover:shadow-slate-950 hover:shadow-2xl'>
                <Image src="/Whatsapp.png" alt="Whatsapp logo" height={40} width={40} />
            </a>
        </div>
    );
}