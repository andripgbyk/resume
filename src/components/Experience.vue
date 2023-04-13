<template>
    <div>
        <h1 class="text-lg font-semibold">
            Experience
        </h1>
        <hr class="h-[2px] my-4 bg-gray-500">
        <article>
            <ol class="relative border-l border-gray-500">
                <li
                    v-for="experience in experiences"
                    :key="experience.title"
                    class="mb-10 ml-6"
                >
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -left-3 ring-8 ring-white ">
                        <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-primary-800"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>briefcase</title>
                            <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
                        </svg>
                    </span>
                    <h3 class="flex items-center justify-between mb-1 text-lg font-semibold text-gray-900">
                        {{ experience.title }} <span class="bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{{ experience.company }}</span>
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
                        {{ experience.since }}
                    </time>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        {{ experience.desc }}
                    </p>
                </li>
            </ol>
        </article>
    </div>
</template>

<script setup lang="ts">
    const experiences = [
        {
            title: "Lead Backend Developer",
            since: "January 2021 - Present",
            desc: "Create backend and frontend scaffolding, Create helper Libraries, Build and configure applications Ensure team adherence to project quality standards Assist with application troubleshooting and debugging Write testable and scalable program code Educate junior developers on best practices Create API Services Build Web Applications Technology research.",
            company: "PT Botika Teknologi Indonesia"
        },
        {
            title: "Backend Developer",
            since: "May 2019 - December 2020",
            desc: "Build web app, build api, webhook, Third party integration",
            company: "PT Botika Teknologi Indonesia"
        },
        {
            title: "Senior Chatbot Developer",
            since: "September 2018 - April 2019",
            desc: "Building Chatbots, Helping struggling teams, Using APIs",
            company: "PT Botika Teknologi Indonesia"
        },
        {
            title: "Chatbot Developer",
            since: "March 2018 - September 2018",
            desc: "Building Chatbots, Using APIs",
            company: "PT Botika Teknologi Indonesia"
        },
    ];
</script>
