export const metadata = { title: "EcoHome CRM" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f3f6f4" }}>
        {children}
      </body>
    </html>
  );
}
