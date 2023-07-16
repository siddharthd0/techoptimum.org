export const metadata = {
    title: "Our Mission | Tech Optimum<",
    description: "Learn about our mission at Tech Optimum to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do.",
    keywords: ["Mission", "Tech Optimum", "Computer Science Education", "Values", "Vision"],
    openGraph: {
        title: "Our Mission | Tech Optimum<",
        description: "Learn about our mission at Tech Optimum to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do.",
        image: "/tech-optimum-logo.png",
        url: "https://techoptimum.org/mission",
    },
    twitter: {
        title: "Our Mission | Tech Optimum<",
        description: "Learn about our mission at Tech Optimum to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do.",
        image: "/tech-optimum-logo.png",
    }
}

export default function Layout({ children }) {
    return (
        <>
            {children}
        </>
    )
}