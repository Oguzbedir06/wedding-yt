"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"

export const Menu = () => {
    
    const [aktif, setAktif] = useState("anasayfa");
   
    function aktifYap(deger:any) {
        setAktif(deger);
    }


  return (
    <div className='container flex items-center justify-between h-24 mb-7 font-serif'>
        <div id='logo' className='flex items-center justify-center gap-3'>
            <Image src="/logo.png" width={100} height={100} alt='logo' className='size-12'/>
            <h5 className='font-semibold'>W-PLAN</h5>
        </div>
        <div id='linkler'>
            <ul className='flex items-center justify-center gap-5'>
                <li onClick={() => aktifYap("anasayfa")} className={aktif == "anasayfa" ? `text-[#0abbb5] font-semibold` : `text-[#83817c]`}><Link href="/" className='hover:text-slate-400'>Anasayfa</Link></li>
                <li onClick={() => aktifYap("hakkimizda")} className={aktif == "hakkimizda" ? `text-[#0abbb5] font-semibold` : `text-[#83817c]`}><Link href="#hakkimizda" className='hover:text-slate-400'>Hakkımızda</Link></li>
                <li onClick={() => aktifYap("hizmetler")} className={aktif == "hizmetler" ? `text-[#0abbb5] font-semibold` : `text-[#83817c]`}><Link href="#hizmetler" className='hover:text-slate-400'>Hizmetler</Link></li>
                <li onClick={() => aktifYap("ucretlendirme")} className={aktif == "ucretlendirme" ? `text-[#0abbb5] font-semibold` : `text-[#83817c]`}><Link href="#ucretlendirme" className='hover:text-slate-400'>Ücretlendirme</Link></li>
                <li onClick={() => aktifYap("iletisim")} className={aktif == "iletisim" ? `text-[#0abbb5] font-semibold` : `text-[#83817c]`}><Link href="#iletisim" className='hover:text-slate-400'>İletişim</Link></li>
            </ul>
        </div>
        <div id='butonlar' className='flex items-center justify-center gap-3'>
            <Link href="/" className='hover:text-slate-400'>Giriş</Link>
            <Button variant="outline" className='bg-transparent hover:bg-[#0abbb5] hover:text-white'>Üye Ol</Button>
        </div>
    </div>
  )
}
