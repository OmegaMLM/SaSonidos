"use client";

import { Card } from "@heroui/react";
import { MusicIcon } from "lucide-react"; // o cualquier otro ícono de música
import clsx from "clsx";

const AboutSection = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-10 px-4 py-10">
  {/* Sección principal */}
  <section className="max-w-3xl w-full bg-zinc-900 rounded-xl p-6 text-center shadow-xl">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
      <span className="text-blue-500">SA Sonidos</span>, expertos en eventos inolvidables
    </h1>
    <p className="text-gray-300 mb-2">
      <strong>SA Sonidos</strong> es una empresa especializada en servicios integrales de <span className="text-cyan-400">sonido</span>, <span className="text-pink-400">iluminación</span> y <span className="text-green-400">eventos</span>.
    </p>
    <p className="text-gray-400 italic">
      Ya sea un <em>casamiento, recital, evento corporativo o fiesta privada</em>, nos encargamos de transformar tu idea en un evento inolvidable.
    </p>
  </section>

  {/* Servicios */}
  <section className="w-full max-w-4xl bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
    <h2 className="text-xl font-bold mb-4">¿Qué ofrecemos?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm list-disc list-inside">
      <ul className="space-y-1">
        <li>Equipos de sonido profesional</li>
        <li>Iluminación escénica y ambiental</li>
        <li>Alquiler de estructuras y pistas LED</li>
        <li>Cabinas para DJs y DJs profesionales</li>
      </ul>
      <ul className="space-y-1">
        <li>Micrófonos inalámbricos y consolas digitales</li>
        <li>Diseño e instalación de sonido</li>
        <li>Soporte técnico en tiempo real</li>
        <li>Experiencia personalizada para cada cliente</li>
      </ul>
    </div>
  </section>

  {/* Footer llamativo */}
  <footer className="max-w-xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-white px-6 py-4 rounded-xl shadow-lg">
    <p className="text-sm font-semibold">
      🎵 En <span className="text-white font-bold">SA Sonidos</span>, tu evento <span className="text-indigo-100">suena</span> y <span className="text-pink-100">se ve</span> como siempre soñaste.
    </p>
  </footer>
</div>

  );
};

export default AboutSection;
