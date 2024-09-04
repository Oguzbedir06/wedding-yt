"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";


export default function Home() {
  
  const [isHovering1, setIsHovered1] = useState(false);
  const [isHovering2, setIsHovered2] = useState(false);
  const [isHovering3, setIsHovered3] = useState(false);
  const [isHovering4, setIsHovered4] = useState(false);

  const onMouseEnter1 = () => setIsHovered1(true);
  const onMouseLeave1 = () => setIsHovered1(false);
  const onMouseEnter2 = () => setIsHovered2(true);
  const onMouseLeave2 = () => setIsHovered2(false);
  const onMouseEnter3 = () => setIsHovered3(true);
  const onMouseLeave3 = () => setIsHovered3(false);
  const onMouseEnter4 = () => setIsHovered4(true);
  const onMouseLeave4 = () => setIsHovered4(false);
  return (
    <main className="flex flex-col container gap-10 font-serif">
      <div className="text-[#0abbb5] font-semibold text-xl">Hayatta bir kez yaşanacak anlar...</div>
      <div className="flex flex-row gap-5 items-center justify-between w-full">
        <div className="font-semibold text-6xl font-serif w-full">
          Size özel,<br/><div className="h-3"></div> Unutulmaz düğünler
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="text-[#83817c] text-lg">
            Sizi zamansız anları yaşamaya davet ediyoruz. Aşk hikayenize göre özel olarak hazırlanmış düğün planlaması
          </div>
          <Button asChild className="w-1/3 rounded-none h-16 bg-[#0abbb5] hover:bg-black shadow-2xl">
            <Link href="/giris" className="text-xl font-normal text-white hover:text-[#0abbb5]'">İletişime Geç</Link>
          </Button>
        </div>
      </div>
      <div className="w-full relative flex items-center justify-center">
        <Image src="/images/banner.jpeg" width={1000} height={1000} alt="banner" className="w-full"/>
        <div className="absolute h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center">
          <div className="absolute h-20 w-20 rounded-full bg-slate-300 flex items-center justify-center">
            <div className="absolute h-16 w-16 rounded-full bg-slate-400 flex items-center justify-center">
              <Link href="/">
                <Play className="size-11 text-slate-600 hover:animate-pulse hover:text-black"/>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-5">
        <hr className="w-full"/>
        <div className="w-full text-4xl text-center font-serif">
          Tüm ihtiyacınız bizde
        </div>
        <hr className="w-full"/>
      </div>
      <div className="w-full text-lg text-center text-[#83817c]">
        Düğün etkinliğinizi planlamadan <br />tasarım ve üretime kadar sizinle ilgileneceğiz.
      </div>
      <div className="w-full flex flex-row gap-6">
        <div onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1} className="flex items-center justify-center bg-hero1 opacity-100 w-full h-96 bg-cover relative">
        {isHovering1 ? 
           <>
            <div className="w-full h-96 flex items-center justify-center bg-gradient-to-r from-[#0abbb5] to-[#40ccc7] opacity-70 relative transition ease-in-out delay-150 hover:animate-in duration-200"></div>
            <div className="absolute w-full text-center">
              <Button asChild className="w-2/3 rounded-none h-16 bg-black hover:bg-[#333] shadow-2xl">
                <Link href="/" className="text-xl font-normal text-white hover:text-[#0abbb5]'">Görüntüle</Link>
              </Button>
            </div>
          </>
         : 
          <div></div>
        } 
        </div>
        <div onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} className="bg-hero2 opacity-100 w-full h-96 bg-cover relative flex items-center justify-center">
        {isHovering2 ? 
          <>
            <div className="w-full h-96 flex items-center justify-center bg-gradient-to-r from-[#0abbb5] to-[#40ccc7] opacity-70 relative transition ease-in-out delay-150 hover:animate-in duration-200"></div>
            <div className="absolute w-full text-center">
              <Button asChild className="w-2/3 rounded-none h-16 bg-black hover:bg-[#333] shadow-2xl">
                <Link href="/" className="text-xl font-normal text-white hover:text-[#0abbb5]'">Görüntüle</Link>
              </Button>
            </div>
          </>
         : 
          <div></div>
        } 
        </div>
        <div onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3} className="bg-hero3 opacity-100 w-full h-96 bg-cover relative flex items-center justify-center">
        {isHovering3 ? 
        <>
          <div className="w-full h-96 flex items-center justify-center bg-gradient-to-r from-[#0abbb5] to-[#40ccc7] opacity-70 relative  transition ease-in-out delay-150 hover:animate-in duration-200"></div>
          <div className="absolute w-full text-center">
              <Button asChild className="w-2/3 rounded-none h-16 bg-black hover:bg-[#333] shadow-2xl">
                <Link href="/" className="text-xl font-normal text-white hover:text-[#0abbb5]'">Görüntüle</Link>
              </Button>
          </div>
        </>
          
         : 
          <div></div>
        } 
        </div>
        <div onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4} className="bg-hero4 opacity-100 w-full h-96 bg-cover relative flex items-center justify-center">
        {isHovering4 ? 
           <>
            <div className="w-full h-96 flex items-center justify-center bg-gradient-to-r from-[#0abbb5] to-[#40ccc7] opacity-70 relative transition ease-in-out delay-150 hover:animate-in duration-200"></div>
            <div className="absolute w-full text-center">
              <Button asChild className="w-2/3 rounded-none h-16 bg-black hover:bg-[#333] shadow-2xl">
                <Link href="/" className="text-xl font-normal text-white hover:text-[#0abbb5]'">Görüntüle</Link>
              </Button>
            </div>
          </>
         : 
          <div></div>
        } 
        </div>
      </div>
      <div className="w-full h-72 bg-[url('/images/bg-1.jpeg')] bg-cover mt-5 relative flex items-center justify-center">
        <div className="w-full h-72 bg-gradient-to-r from-[#0abbb5] to-[#40ccc7] opacity-70 relative flex items-center justify-center"></div>
        <div className="absolute w-full flex items-center justify-evenly flex-row container text-white">
            <div className="flex flex-col items-start justify-start">
              <p className="text-5xl font-semibold font-serif">20+</p>
              <p className="text-lg font-semibold font-serif">Yıllık Deneyim</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-5xl font-semibold font-serif">250+</p>
              <p className="text-lg font-semibold font-serif">Düğün Organizasyonu</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-5xl font-semibold font-serif">50+</p>
              <p className="text-lg font-semibold font-serif">Çalışan Sayısı</p>
            </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between gap-5 mt-5">
        <div className="flex flex-col gap-6 items-start justify-between w-full h-svh">
          <h2 className="font-serif font-semibold text-5xl">Hayalinizdeki düğün, rüyaların kalbinde sizi bekliyor</h2>
          <Button asChild className="w-1/3 rounded-none h-16 bg-[#0abbb5] hover:bg-black shadow-2xl flex items-center justify-between gap-3">
            <Link href="/giris" className="text-xl font-normal text-white hover:text-[#0abbb5]'">Rezervasyon Yap <ArrowUpRight className="text-white" /></Link>
          </Button>
          <Image src="/images/e1.jpeg" alt="e1" width={1000} height={1000}/>
        </div>
        <div className="flex flex-col items-center justify-between h-svh w-full bg-[url('/images/e2.jpeg')] bg-cover"></div>
      </div>
      <div className="w-full flex items-center justify-between gap-5">
        <hr className="w-full"/>
        <div className="w-full text-4xl text-center font-serif">
          Instagramdan Takip Edin
        </div>
        <hr className="w-full"/>
      </div>
      <div className="w-full text-lg text-center text-[#83817c]">
        Düğün etkinliğinizi planlamadan <br />tasarım ve üretime kadar sizinle ilgileneceğiz.
      </div>
      <div className="w-full mt-5 grid grid-cols-3 items-center justify-center gap-4">
        <Link href="/" className="">
          <Image src="/images/i1.jpeg" alt="i1" width={500} height={500}/>
        </Link>
        <Link href="/">
          <Image src="/images/i2.jpeg" alt="i6" width={500} height={500}/>
        </Link>
        <Link href="/">
          <Image src="/images/i3.jpeg" alt="i2" width={500} height={500}/>
        </Link>
        <Link href="/">
          <Image src="/images/i4.jpeg" alt="i3" width={500} height={500}/>
        </Link>
        <Link href="/">
          <Image src="/images/i5.jpeg" alt="i4" width={500} height={500}/>
        </Link>
        <Link href="/">
          <Image src="/images/i6.jpeg" alt="i5" width={500} height={500}/>
        </Link>
      </div>
      <div className="w-full h-[50vh] flex items-center justify-center flex-col gap-8 bg-[#eedbca]">
        <div className="w-full text-4xl text-center font-serif">
          Bu özel gününüzü planlamaya hazır mısınız?
        </div>
        <div className="w-full text-lg text-center text-[#83817c]">
          Düğün etkinliğinizi planlamadan <br />tasarım ve üretime kadar sizinle ilgileneceğiz.
        </div>
          <Button asChild className="w-1/4 rounded-none h-16 bg-[#0abbb5] hover:bg-black shadow-2xl">
            <Link href="/giris" className="text-xl font-normal text-white hover:text-[#0abbb5]'">İletişime Geç</Link>
          </Button>
      </div>
      
    </main>
  );
}

