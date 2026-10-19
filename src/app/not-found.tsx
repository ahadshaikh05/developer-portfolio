import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="relative text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          Page <span className="text-gradient">not found</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
