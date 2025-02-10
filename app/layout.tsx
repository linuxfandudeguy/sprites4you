import "./globals.css";
import type React from "react";
import Image from "next/image";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'sprites4you',
  description: 'these are sprites 4 games, fangames, mods, and of course, you <3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sprite-computer-pastel.png" />
        <Script src="/oneko.js" strategy="beforeInteractive" />     
       </head>
      <body className="text-gray-800 min-h-screen flex flex-col">
        <header className="bg-pastel-blue p-4 text-center border-b-4 border-pastel-purple">
            <Image src="/sprite-computer-pastel.png" alt="logo" width={32} height={32} />
           <h1 className="text-2xl font-bold text-gray-800">sprites4you</h1>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="bg-pastel-pink p-6 rounded-lg shadow-lg border-2 border-pastel-purple">{children}</div>
        </main>
        <footer className="bg-pastel-blue p-4 text-center text-gray-800 border-t-4 border-pastel-purple">
          <div className="flex">
            <Image src="/www2.gif" alt="www" width={88} height={31} />
            <Image src="/button.png" alt="made on a chromebook" width={88} height={31} />
            <Image src="/wow-wow.gif" alt="wow wow" width={88} height={31} />
            <a href="https://github.com/linuxfandudeguy/sprites4you" target="_blank" rel="noopener noreferrer">
              <Image src="/github.png" alt="github" width={88} height={31} />
            </a>
              <Image src="/besteyes3.png" alt="best viewed with eyes" width={88} height={31} />
              <Image src="/yankovic.png" alt="yankovic now" width={88} height={31} />
             <Image src="/chill_pill.png" alt="take a c h i l  p i l l" width={88} height={31} />
              <Image src="/debian-powered.png" alt="debian powered" width={88} height={31} />
          </div>
          <p>made by linuxfandudeguy on 2/9/2025, click the github button for the repo</p>
        </footer>
      </body>
    </html>
  );
}