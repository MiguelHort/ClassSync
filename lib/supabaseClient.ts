// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface Usuario {
  nome: string;
}

// Função para buscar os nomes dos usuários
export async function getUserNames(): Promise<Usuario[]> {
  const { data, error } = await supabase.from('usuario').select('nome');

  if (error) {
    console.error('Erro ao buscar nomes dos usuários:', error);
    return [];
  }

  return data as Usuario[];
}

// Função para fazer login com email e senha
export async function loginWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data?.user; // Acessando o user dentro de 'data'
}

// Função para verificar se o usuário está logado (sessão ativa)
export async function getCurrentUser() {
    const { data } = await supabase.auth.getSession();
  
    // Verifique se a session existe antes de acessar o usuário
    return data.session?.user || null; // Retorna o usuário ou null se não houver sessão
}

// Função para fazer logout
export async function logout() {
  await supabase.auth.signOut();
}
