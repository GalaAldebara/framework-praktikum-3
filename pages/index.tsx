import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React from 'react';
import Link from 'next/link';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const HomePage = () => {
  return (
    <div>
      <h1>Selamat Datang di Website Saya</h1>
      <p>Ini adalah halaman utama</p>
      <Link href="/about">
      Tentang Kami
      </Link>
    </div>
  );
};

export default HomePage;


