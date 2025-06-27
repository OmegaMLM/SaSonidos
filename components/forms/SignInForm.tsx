"use client"

import { Button } from "@heroui/react";
import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return (
      <Button onPress={() => signIn("google")}
       className="flex items-center justify-center px-4 py-3">
        Login
      </Button>
  );
}
