import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { LoadingProvider } from "@/components/ui/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LUCIS - Connect with Professional Photographers & Videographers",
  description: "Find and hire the perfect photographer or videographer for your special moments. Trusted by thousands of couples worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <AuthProvider>
            <ProtectedRoute>
              {children}
            </ProtectedRoute>
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
