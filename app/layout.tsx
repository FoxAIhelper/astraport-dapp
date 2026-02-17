import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AstraPort DApp',
  description: 'Stellar wallet portfolio visualization and AI-driven insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
