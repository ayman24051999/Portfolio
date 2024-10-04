import { Config } from "tailwindcss"; // Ensure you have tailwindcss installed
import { tailwindConfig } from "./src/libs/tailwind/tailwind"; // Import your config

const config: Config = {
    content: ["./src/**/*.{ts,tsx,js,jsx}"], // Paths to your template files
    theme: {
        extend: tailwindConfig.extend, // Extend the default theme
        // If you want to add additional theme settings, do it here
    },
    darkMode: "class", // Enable dark mode
};

export default config; // Export the configuration
