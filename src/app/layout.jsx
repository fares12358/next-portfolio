import "./globals.css";
import Nav from "./components/Nav";
export const metadata = {
  title: "MY PORTFOLIO",
  description: "this is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-transparent overflow-hidden">
        <div className="main w-full h-full overflow-y-auto overflow-hidden">
          <section className="main container mx-auto h-full w-full">
            <Nav />
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
