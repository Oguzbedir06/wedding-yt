import React from 'react'
import Image from "next/image";
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
   <footer className='container w-full h-[50vh]'>
    <div className='flex items-center justify-between w-full flex-col h-full mt-6'>
        <div className='grid grid-cols-4 items-start justify-between gap-4 w-full p-5 text-md'>
            <div className='w-full flex items-start justify-start gap-4 flex-col'>
                <div className='flex justify-between items-center flex-row gap-3'>
                    <Image src="/images/logo.png" alt="logo" width={50} height={50}/>
                   <p className='font-serif'>W-PLAN</p>
                </div>
                <p className='text-sm text-[#83817c] mt-3 font-serif'>
                    Düğün etkinliğinizi planlamadan <br />tasarım ve üretime kadar sizinle ilgileneceğiz.
                </p>
                <Button asChild className="rounded-none h-16 bg-[#0abbb5] hover:bg-black flex items-center justify-between gap-3">
                    <Link href="/giris" className="font-normal text-white hover:text-[#0abbb5]'">Rezervasyon Yap <ArrowUpRight className="text-white" /></Link>
                </Button>
            </div>
            <div className='w-full flex items-start justify-start gap-4 flex-col'>
                <div className='font-serif font-semibold h-[50px]'>
                    Hizmetler
                </div>
                <ul className='font-serif text-[#83817c]'>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Tesis</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Yardım Merkezi</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Topluluk</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Blog</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Ürün Güncellemeleri</Link></li>
                </ul>
            </div>
            <div className='w-full flex items-start justify-start gap-4 flex-col'>
                <div className='font-serif font-semibold h-[50px]'>
                    Linkler
                </div>
                <ul className='font-serif text-[#83817c]'>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Ücretlendirme</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>İletişim</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Müşteriler</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Haberler</Link></li>
                </ul>
            </div>
            <div className='w-full flex items-start justify-start gap-4 flex-col'>
                <div className='font-serif font-semibold h-[50px]'>
                    Çözümler
                </div>
                <ul className='font-serif text-[#83817c]'>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Yerinde Hizmet</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Sanal Etkinliker</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Sanal Ticari Fuarlar</Link></li>
                    <li className='mb-1'><Link href="/" className='hover:text-[#0abbb5]'>Karışık Etkinlikler</Link></li>
                </ul>
            </div>
        </div>
        <hr className='w-full mt-3' />
        <div className='w-full flex flex-row items-center justify-between mb-2'>
            <div className='font-serif text-[#83817c]'>
                @2024 W-Plan. Tüm hakları saklıdır.
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='h-[40px] w-[40px] flex items-center justify-center rounded-full border hover:bg-[#0abbb5] hover:text-white'>
                    <Link href="/" className=''><Facebook  /></Link>
                </div>
                <div className='h-[40px] w-[40px] flex items-center justify-center rounded-full border hover:bg-[#0abbb5] hover:text-white'>
                    <Link href="/" className=''><Instagram /></Link>
                </div>
                <div className='h-[40px] w-[40px] flex items-center justify-center rounded-full border hover:bg-[#0abbb5] hover:text-white'>
                    <Link href="/" className=''><Twitter /></Link>
                </div>
                <div className='h-[40px] w-[40px] flex items-center justify-center rounded-full border hover:bg-[#0abbb5] hover:text-white'>
                    <Link href="/" className=''><Youtube /></Link>
                </div>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer