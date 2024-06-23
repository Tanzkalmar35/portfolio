import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import {Grid} from "@/components/Grid";
import {navItems} from "@/data";
import {RecentProjects} from "@/components/RecentProjects";
import {Experience} from "@/components/Experience";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <main
            className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                // https://www.youtube.com/watch?v=FTH6Dn3AyIQ&list=PL6QREj8te1P7rEwj_IzsoLzQ-FBbZ6lqP&index=7
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Grid/>
                <RecentProjects/>
                <Experience />
                <Footer />
            </div>
        </main>
    );
}
