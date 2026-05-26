import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "urlaubsverwaltung",
  description: "Einfache Verwaltung von Urlaub, Mitarbeitern und Genehmigungen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "Urlaubsanträge", href: "/urlaubsantraege" },
    { label: "Mitarbeiter", href: "#" },
    { label: "Genehmigungen", href: "#" },
  ];

  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
            <Link href="/" className="text-lg font-semibold text-slate-950">
              urlaubsverwaltung
            </Link>

            <div className="flex flex-wrap gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
