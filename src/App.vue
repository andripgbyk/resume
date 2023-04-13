<template>
    <div class="container mx-auto">
        <Header />

        <main class="p-8">
            <h1 class="text-lg font-semibold">
                Summary
            </h1>
            <hr class="h-[2px] my-4 bg-gray-500">
            <article>
                I like challenges and new things
            </article>

            <div class="flex gap-8 mt-8">
                <div class="flex-1">
                    <Experience />
                </div>
                <div class="flex-none w-80 flex-col flex gap-8">
                    <Skills />
                    <Education />
                    <Language />
                    <Interests />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
    import Header from "@/components/Header.vue";
    import Experience from "@/components/Experience.vue";
    import Skills from "@/components/Skills.vue";
    import Education from "@/components/Education.vue";
    import Language from "@/components/Language.vue";
    import Interests from "@/components/Interests.vue";
</script>
