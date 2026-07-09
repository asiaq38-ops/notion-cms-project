import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container max-w-4xl">
            <div className="flex flex-col gap-4">
              <Badge>Next.js 15 + shadcn/ui</Badge>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Welcome to Claude <br className="hidden sm:inline" /> Starter Kit
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                A modern Next.js starter template with Tailwind CSS, shadcn/ui components,
                and TypeScript. Perfect for building your next web application.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/examples">
                  <Button size="lg">Explore Examples</Button>
                </Link>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="lg">View on GitHub</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/50">
          <div className="container max-w-4xl space-y-8 py-8 md:py-12 lg:py-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Features</h2>
              <p className="text-muted-foreground">
                Everything you need to build modern web applications
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-2 text-2xl">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const features = [
  {
    icon: "⚡",
    title: "Next.js 15",
    description: "Latest Next.js with App Router, Server Components, and TypeScript support.",
  },
  {
    icon: "🎨",
    title: "shadcn/ui",
    description: "High-quality, accessible React components built with Tailwind CSS.",
  },
  {
    icon: "🌈",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Mobile-first responsive design patterns included by default.",
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    description: "Built-in dark mode support with smooth transitions.",
  },
  {
    icon: "🚀",
    title: "Production Ready",
    description: "Optimized for performance with best practices included.",
  },
];
