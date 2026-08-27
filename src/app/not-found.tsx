import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="page-hero">
      <div className="container" style={{ textAlign: "center", paddingBlock: "6rem" }}>
        <p className="eyebrow">404</p>
        <h1 className="page-hero__title" style={{ marginInline: "auto" }}>
          Page not found
        </h1>
        <p className="page-hero__lead" style={{ marginInline: "auto" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="page-hero__actions" style={{ justifyContent: "center" }}>
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </main>
  );
}
