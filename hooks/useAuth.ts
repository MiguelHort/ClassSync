// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../lib/supabaseClient';

export default function useAuth() {
  const [user, setUser] = useState<any>(null); // ou algum tipo mais específico
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser(); // Chama a função assíncrona
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login'); // Redireciona para a tela de login
      }
    };

    fetchUser(); // Executa a função assíncrona de forma imediata
  }, [router]);

  return user;
}
