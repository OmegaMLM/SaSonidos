import { PrismaClient } from "../lib/prisma/generated/prisma";

const prisma = new PrismaClient();

const blogsData = [
  {
    title: "Cómo elegir el sonido perfecto para tu evento",
    content: "En esta nota te explicamos qué tener en cuenta al contratar sonido profesional.",
    image: "https://source.unsplash.com/featured/?sound",
  },
  {
    title: "Iluminación LED vs tradicional",
    content: "Comparativa entre iluminación LED y convencional para fiestas y escenarios.",
    image: "https://source.unsplash.com/featured/?lighting",
  },
  {
    title: "Eventos exitosos que acompañamos",
    content: "Un repaso por algunos de los eventos que tuvieron nuestro sonido e iluminación.",
    image: "https://source.unsplash.com/featured/?event",
  },
  {
    title: "¿Qué es un rider técnico?",
    content: "Una guía para entender qué es un rider técnico y por qué es importante.",
    image: "https://source.unsplash.com/featured/?concert",
  },
  {
    title: "Tendencias 2025 en eventos",
    content: "Te mostramos lo último en tecnología de sonido e iluminación para este año.",
    image: "https://source.unsplash.com/featured/?stage",
  },
];

async function main() {
  for (const blog of blogsData) {
    await prisma.blog.create({ data: blog });
  }

  console.log("📝 Blogs insertados correctamente.");
}

main()
  .catch((e) => {
    console.error("❌ Error insertando blogs:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
