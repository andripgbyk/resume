<template>
    <div>
        <h1 class="text-lg font-semibold">
            Language
        </h1>
        <hr class="h-[2px] my-4 bg-gray-500">
        <article>
            <ul class="list-disc list-inside">
                <li
                    v-for="language in languages"
                    :key="language"
                >
                    {{ language }}
                </li>
            </ul>
        </article>
    </div>
</template>

<script setup lang="ts">
    const languages = [
        "Indonesian",
        "Javanese"
    ];
</script>
