"use client";

import { useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    console.log("Sign up:", { fullName, email, password });
  };

  const handleGithubSignUp = () => {
    // Handle GitHub OAuth sign up
    console.log("Sign up with GitHub");
  };

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-3xl font-medium text-foreground">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form below to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors hover:border-foreground/20 focus:border-foreground/60 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors hover:border-foreground/20 focus:border-foreground/60 focus:outline-none"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  We&apos;ll use this to contact you. We will not share your email with anyone else.
                </p>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors hover:border-foreground/20 focus:border-foreground/60 focus:outline-none"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Must be at least 8 characters long.
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors hover:border-foreground/20 focus:border-foreground/60 focus:outline-none"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Please confirm your password.
                </p>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-foreground px-4 py-3 text-base font-medium text-background transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* GitHub Sign Up Button */}
            <button
              type="button"
              onClick={handleGithubSignUp}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            >
              <Github className="h-5 w-5" />
              Sign up with GitHub
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Column - Placeholder/Branding */}
      <div className="fixed right-0 top-16 hidden h-[calc(100vh-4rem)] w-1/2 bg-muted/40 lg:block">
        <div className="flex h-full items-center justify-center p-12">
          <div className="text-center">
            {/* Placeholder for logo or branding */}
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-foreground/5">
              <div className="text-4xl font-bold text-foreground/20">L</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
