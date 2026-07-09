import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";

export default function ComponentsPage() {
  const components = [
    {
      name: "Button",
      path: "@/components/ui/button",
      description: "Clickable button component with multiple variants",
      import: 'import { Button } from "@/components/ui/button"',
    },
    {
      name: "Card",
      path: "@/components/ui/card",
      description: "Container component for content with header, content, and footer sections",
      import: 'import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"',
    },
    {
      name: "Badge",
      path: "@/components/ui/badge",
      description: "Small label component for categorization or status indication",
      import: 'import { Badge } from "@/components/ui/badge"',
    },
    {
      name: "Header",
      path: "@/components/header",
      description: "Navigation header component with logo and menu items",
      import: 'import { Header } from "@/components/header"',
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="container max-w-4xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tight">Components</h1>
              <p className="text-lg text-muted-foreground">
                Pre-built components from shadcn/ui and custom components
              </p>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-4xl space-y-8 py-8 md:py-12">
            <div className="space-y-6">
              {components.map((component) => (
                <div key={component.name} className="space-y-4 rounded-lg border border-border p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{component.name}</h2>
                    <Badge>{component.path}</Badge>
                  </div>
                  <p className="text-muted-foreground">{component.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Usage:</p>
                    <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
                      <code>{component.import}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
