
import goIcon from "@iconify/icons-logos/go";
import tsIcon from "@iconify/icons-logos/typescript-icon";
import javaIcon from "@iconify/icons-logos/java";
import swiftIcon from "@iconify/icons-logos/swift";
import reactIcon from "@iconify/icons-logos/react";
import laravelIcon from "@iconify/icons-logos/laravel";
import springIcon from "@iconify/icons-logos/spring-icon";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import elasticIcon from "@iconify/icons-logos/elasticsearch";
import redisIcon from "@iconify/icons-logos/redis";
import rabbitMQIcon from "@iconify/icons-logos/rabbitmq-icon";
import gqlIcon from "@iconify/icons-logos/graphql";
import SkillProps from "@/components/sections/skills/types";

const skills: SkillProps[] = [
    {name: "Golang", url: "https://go.dev", icon: goIcon},
    {name: "TypeScript", url: "https://www.typescriptlang.org/", icon: tsIcon},
    {name: "Java", url: "https://www.java.com/en/", icon: javaIcon},
    {name: "Swift", url: "https://www.swift.org/", icon: swiftIcon},
    {name: "React", url: "https://react.dev/", icon: reactIcon},
    {name: "Laravel", url: "https://laravel.com", icon: laravelIcon},
    {name: "Spring", url: "https://spring.io/", icon: springIcon},
    {name: "PostgreSQL", url: "https://www.postgresql.org/", icon: postgresqlIcon},
    {name: "GraphQL", url: "https://graphql.org/", icon: gqlIcon},
    {name: "ElasticSearch", url: "https://www.elastic.co/", icon: elasticIcon},
    {name: "Redis", url: "https://redis.io/", icon: redisIcon},
    {name: "RabbitMQ", url: "https://www.rabbitmq.com/", icon: rabbitMQIcon},
];

export default skills;