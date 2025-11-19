import type { ReactNode } from 'react';

// Root layout that wraps locale-specific layouts
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
