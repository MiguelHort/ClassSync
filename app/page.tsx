"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useEffect, useState } from 'react';
import { getUserNames, Usuario } from '@/lib/supabaseClient';


export default function Layout() {

  const [nomes, setNomes] = useState<Usuario[]>([]);

  useEffect(() => {
    async function fetchData() {
      const usuario = await getUserNames();
      setNomes(usuario);
    }
    fetchData();
  }, []);

  return (

    <ScrollArea className="w-full h-dvh p-4">
      <section className="grid grid-cols-2 gap-4">
        <Card className="p-10">
          <h1 className="text-xl mb-4">Bom dia!</h1>
          <p>Ficamos muito felizes de ter você conosco nessa busca pela organização academica</p>
        </Card>
        <Card className="p-10 row-span-2">
          <h1 className="text-xl mb-4">Bom dia!</h1>
          <p>Ficamos muito felizes de ter você conosco nessa busca pela organização academica</p>
        </Card>
        <Card className="p-10">
          <h1 className="text-xl mb-4">Bom dia!</h1>
          <p>Ficamos muito felizes de ter você conosco nessa busca pela organização academica</p>
        </Card>
        <Card className="p-10">
          {nomes.map((user, index) => (
            <p key={index}>{user.nome}</p>
          ))}
        </Card>
      </section>
    </ScrollArea>

  )
}
