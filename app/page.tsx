'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // ganti link di bawah ini dengan URL kamu sendiri
    window.location.href = 'https://yellow-nih-boss-projects.vercel.app';
  }, []);

  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>Mengarahkan ke halaman tujuan...</h1>
    </main>
  );
}

