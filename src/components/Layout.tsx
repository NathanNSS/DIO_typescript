import { Fragment } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps{
    children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
    return (
        <section style={{backgroundColor:"#9413dc", position:'relative', minHeight:"100vh"}}>
            <Header />
            {children}
            <Footer />
        </section>
    )
}