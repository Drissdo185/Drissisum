import { AnimatedInvitation } from "@/components/animated-invitation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Invito</h1>
          <nav className="flex gap-6">
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sign In
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Create Beautiful Digital Invitations
            </h2>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Design, send, and manage invitations for all your events. From
              weddings to corporate gatherings, make every invitation special.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h3 className="mb-12 text-center text-3xl font-bold">
                Template Demo
              </h3>
              <div className="mb-16 overflow-x-auto">
                <div className="flex gap-6 w-max px-2">
                  <div className="shrink-0 w-80 ">
                    <AnimatedInvitation />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h3 className="mb-12 text-center text-3xl font-bold">Features</h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">Easy to Use</h4>
                  <p className="text-muted-foreground">
                    Create stunning invitations in minutes with our intuitive
                    drag-and-drop editor.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">
                    Multi-Event Support
                  </h4>
                  <p className="text-muted-foreground">
                    Manage multiple events simultaneously with our powerful
                    event management tools.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">
                    Real-time Tracking
                  </h4>
                  <p className="text-muted-foreground">
                    Track RSVPs and guest responses in real-time with detailed
                    analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          2026 Invito. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
