import "./globals.css";
import Nav from "./components/Nav";
export const metadata = {
  title: "FARES.PORTFOLIO",
  description: "Hi,i'm fares and this is my portfolio",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full bg-transparent overflow-hidden">
        <div className="main container mx-auto w-full h-full overflow-y-auto overflow-hidden">
            <Nav />
            {children}
        </div>
      </body>
    </html>
  );
}
