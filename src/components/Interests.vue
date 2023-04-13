<template>
    <div>
        <h1 class="text-lg font-semibold">
            Interests
        </h1>
        <hr class="h-[2px] my-4 bg-gray-500">
        <article>
            <ul class="list-disc list-inside">
                <li
                    v-for="interest in interests"
                    :key="interest"
                >
                    {{ interest }}
                </li>
            </ul>
        </article>
    </div>
</template>

<script setup lang="ts">
    const interests = [
        "Motorcycle",
        "To tourist spots",
        "Game",
        "Music"
    ];
</script>
