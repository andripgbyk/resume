<template>
    <div>
        <h1 class="text-lg font-semibold">
            Skills
        </h1>
        <hr class="h-[2px] my-4 bg-gray-500">
        <article class="flex flex-col gap-4">
            <div
                v-for="skill in skills"
                :key="skill.title"
            >
                <h1 class="text-base font-semibold">
                    {{ skill.title }}
                </h1>
                <ul class="list-disc list-inside">
                    <li
                        v-for="children in skill.children"
                        :key="children.title"
                    >
                        {{ children.title }}
                    </li>
                </ul>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
    const skills = [
        {
            title: "Frontend",
            children: [
                { title: "JavaScript/Nuxt.js/Vite.js/Vue.js/jQuery" },
                { title: "Tailwindcss/Bootstrap" },
                { title: "Flutter" },
                { title: "HTML/CSS/SASS/LESS" },
                { title: "Blade/Twig/EJS/Freemarker" },
            ]
        },
        {
            title: "Backend",
            children: [
                { title: "PHP (Native, Laravel, CodeIgniter, Symfony, Slim Framework)" },
                { title: "Node.js (Express, Adonis.js, Socket.io)" },
                { title: "Go" },
                { title: "Java" },
            ]
        },
        {
            title: "Databaase",
            children: [
                { title: "MySQL/MariaDB" },
                { title: "MongoDB" },
                { title: "Redis" },
                { title: "SQLite" },
            ]
        },
        {
            title: "Other",
            children: [
                { title: "Continuous Integration" },
                { title: "Git/Github/Azure Repos" },
                { title: "Azure Pipelines/Github Actions" },
                { title: "Code Review" },
                { title: "Build Library" },
            ]
        }
    ];
</script>
