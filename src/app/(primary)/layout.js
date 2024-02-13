import Footer from "./component/footer";
import Header from "./component/header";
import "./../import.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}