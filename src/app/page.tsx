import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Hero2 } from '@/components/Hero2'
import { Hero3 } from '@/components/Hero3'
import { Hero4 } from '@/components/Hero4'
import { Hero5 } from '@/components/Hero5'
import { LastComp } from '@/components/LastComp'
import { NavBar } from '@/components/NavBar'

export default function Home() {
    return (
        <main>
            <NavBar />
            <div style={{ paddingTop: '150px' }}></div>
            <Hero />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
            <LastComp />
            <Footer />
        </main>
    )
}

// git add .
// git commit -m "Commit"
// git branch -M main
// git remote add origin https://github.com/VOLTA007/Limitless-Link.git
// git push -u origin main
