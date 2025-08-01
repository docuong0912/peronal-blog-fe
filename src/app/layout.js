import { DM_Sans, Fira_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main/main-header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/components/lib/fontawesome-icon";
import PageContent from "@/components/main/page-content";
import TableOfContent from "@/components/ui/ui-table-of-content";
import MainFooter from "@/components/main/main-footer";

const geistSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"]
});

const geistMono = Fira_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Personal Blog",
  description: "Cuong's personal blog",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainHeader/>
        <PageContent>
        {children}
        </PageContent>
        <MainFooter/>
      </body>
    </html>
  );
}
