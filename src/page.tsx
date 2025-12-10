'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
// Update the import path to the correct location of Card and CardContent
import { Card } from '@/components/ui/card';
import { API_BASE } from '@/lib/config';
import Link from "next/dist/client/link";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    const res = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message || 'Register failed');
      return;
    }

    router.push('/login');
  }

  return (
    <div className="text-center">
      <header className = "border">
        <span className = "float-left">Navigation Page</span>
        <Button variant = "outline"><Link href="/register">Register</Link></Button>
        <Button variant = "outline"><Link href="/login">Login</Link></Button>
        <Button variant = "outline"><Link href="/dashboard">Dashboard</Link></Button>
        <Button variant = "outline"><Link href="/positions">Positions</Link></Button>
      </header>
      <main>
        
          <h1 className="text-xl font-bold mb-4">Welcome to Navigation page. Click any of the links to go to my website.</h1>
          

      </main>
    </div>
  );
}
