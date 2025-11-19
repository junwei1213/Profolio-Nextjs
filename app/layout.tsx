import type { ReactNode } from 'react';

// Since we have all content in [locale]/layout.tsx,
// this root layout just passes through children
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

// Prevent static generation at root level
export const dynamic = 'force-dynamic';
