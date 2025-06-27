"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Si no está logueado, redirigir al login
      router.push("/"); // redirige a la página de login
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // o spinner
  }

  if (status === "authenticated") {
    return <>{children}</>; // muestra el contenido del panel
  }

  return null; // mientras redirige o no está autenticado
}