import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";

export default function ExamplesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="container max-w-4xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tight">Examples</h1>
              <p className="text-lg text-muted-foreground">
                Explore different component combinations and patterns
              </p>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-4xl space-y-8 py-8 md:py-12">
            {/* Card Examples */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Card Components</h2>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Success Card</CardTitle>
                    <CardDescription>Card with success state</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Operation completed successfully</span>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Information Card</CardTitle>
                    <CardDescription>Card with informational content</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <span>This is an informational message</span>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Warning Card</CardTitle>
                    <CardDescription>Card with warning state</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <span>Please review this action before proceeding</span>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Error Card</CardTitle>
                    <CardDescription>Card with error state</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span>An error occurred while processing</span>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Badge Examples */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Badges</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Button Examples */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Buttons</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form Example */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Form Pattern</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Example form layout using Starter Kit components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      placeholder="Enter your message"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button>Submit</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
