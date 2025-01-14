import ExperienceProps from "@/components/sections/experiences/types";

const experiences: ExperienceProps[] = [
    {
        title: "Senior Software Engineer",
        company: "GovTech Procurement Indonesia",
        period: "Feb 2023 – Present",
        contributions: "Led the architecture and development of the E-Gov Marketplace, improving product search efficiency to under 100ms with ElasticSearch, migrating 10,000+ products seamlessly, and optimizing inter-service communication with message queueing. Co-led the backend team of product squad, mentoring junior members to enhance team performance.",
        techStacks: ["Go", "Chi", "Google Cloud", "GraphQL", "ElasticSearch", "PostgreSQL"]
    },
    {
        title: "Associate Software Engineer",
        company: "SIRCLO",
        period: "Mar 2022 – Feb 2022",
        contributions: "Optimized API performance to under 100ms by implementing concurrent workers and resolving N+1 issues, while reducing cloud operational costs and server memory usage by 50% through efficient code refactoring.",
        techStacks: ["Go", "TypeScript", "gRPC", "Google Cloud", "GraphQL", "PostgreSQL"]
    },
    {
        title: "Junior Developer (Apple  Platform)",
        company: "Apple Developer Academy @ BINUS",
        period: "Feb 2021 – Dec 2021",
        contributions: "Finished 5 projects ranging from iOS app, macOS app, iPad app, to watchOS app.",
        techStacks: ["Swift", "UIKit", "SwiftUI", "Apple Technologies"]
    },
    {
        title: "Part-time Software Engineer",
        company: "Ahlibisnis.id",
        period: "Apr 2020 – Mar 2021",
        contributions: "Improved API latency by 80% with database indexing and Redis caching.",
        techStacks: ["PHP", "Laravel", "Redis", "MySQL"]
    }
];

export default experiences;