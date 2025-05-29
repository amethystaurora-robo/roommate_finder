import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AuthProvider from "@/components/auth-provider"
import { ComparisonProvider } from "@/context/comparison-context"
import { ComparisonFloatingButton } from "@/components/comparison-floating-button"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ComparisonProvider>
            <AuthProvider>
              {children}
              <ComparisonFloatingButton />
            </AuthProvider>
          </ComparisonProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
