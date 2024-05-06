import { NavBar } from '@/components/NavBar'
// import { NextUIProvider } from '@nextui-org/react'

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <NavBar />
            {children}
        </main>
    )
}
