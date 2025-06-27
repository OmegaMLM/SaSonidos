"use client";

import { Button } from "@heroui/react";
import { signIn } from "next-auth/react";

const GoogleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M533.5 278.4c0-17.4-1.4-34.3-4-50.6H272v95.8h146.9c-6.4 34.3-25 63.4-53.5 83v68.4h86.4c50.6-46.6 81.7-115.5 81.7-196.6z"
      fill="#4285f4"
    />
    <path
      d="M272 544.3c72.8 0 133.8-24.2 178.4-65.8l-86.4-68.4c-24 16-54.6 25.4-92 25.4-70.8 0-130.8-47.9-152.3-112.1H30.7v70.7C74.9 475.5 166.3 544.3 272 544.3z"
      fill="#34a853"
    />
    <path
      d="M119.7 323.4c-10.2-30.2-10.2-62.5 0-92.7V160h-89C4.5 201.3-6.5 256.1 3.2 309.6s42.2 100.8 86.5 132.3l89-70.7z"
      fill="#fbbc04"
    />
    <path
      d="M272 107.7c39.6-.6 77.6 13.7 106.5 39.9l79.6-79.6C407.2 25.7 341.4-.1 272 0 166.3 0 74.9 68.8 30.7 160l89 70.7c21.5-64.2 81.5-112.1 152.3-112.1z"
      fill="#ea4335"
    />
  </svg>
);

export default function SignIn() {
  return (
    <Button
      onPress={() => signIn("google")}
      className="flex items-center justify-center gap-2 px-4 py-3"
      variant="flat"
    >
      <GoogleIcon />
      Iniciar sesión con Google
    </Button>
  );
}
