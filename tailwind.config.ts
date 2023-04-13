import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.indigo
            }
        },
    },
    plugins: [],
} satisfies Config;

