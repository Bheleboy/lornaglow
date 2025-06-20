import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductShowcase from "@/components/product-showcase"
import Benefits from "@/components/benefits"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <Benefits />
      <About />
      <Footer />
    </main>
  )
}
