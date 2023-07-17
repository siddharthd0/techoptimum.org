export const metadata = {
    title: "Donate | Tech Optimum",
    description: "Help Tech Optimum continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!",
    keywords: ["Donations", "Tech Optimum", "Computer Science Education", "Free Resources", "Support", "Non-Profit"],
    openGraph: {
        title: "Donate | Tech Optimum",
        description: "Help Tech Optimum continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!",
        image: "/tech-optimum-logo.png",
        url: "https://techoptimum.org/donate",
    },
    twitter: {
        title: "Donate | Tech Optimum",
        description: "Help Tech Optimum continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!",
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