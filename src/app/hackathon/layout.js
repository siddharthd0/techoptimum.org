export const metadata = {
    title: "Tech Optimum Hackathon",
    description: "Join the annual Tech Optimum Hackathon, our premier coding competition. With over 300 participants, 50 projects, and $40k in prizes, it's an event you don't want to miss!",
    keywords: ["Tech Optimum", "Hackathon", "Coding Competition", "Computer Science", "Prizes", "Participants", "Projects"],
    openGraph: {
        title: "Donate | Tech Optimum",
        description: "Join the annual Tech Optimum Hackathon, our premier coding competition. With over 300 participants, 50 projects, and $40k in prizes, it's an event you don't want to miss!",
        image: "/tech-optimum-logo.png",
        url: "https://techoptimum.org/hackathon",
    },
    twitter: {
        title: "Donate | Tech Optimum",
        description: "Join the annual Tech Optimum Hackathon, our premier coding competition. With over 300 participants, 50 projects, and $40k in prizes, it's an event you don't want to miss!",
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