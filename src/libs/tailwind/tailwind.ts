export const tailwindConfig = {
    darkMode: "class", // or 'media' for automatic dark mode based on user's system preference
    screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        tv: "1536px",
    },
    extend: {
        colors: {
            primary: "#1A73E8", // Blue (Primary)
            darkButtons: "#878f99",
            secondary: "#FF9800", // Orange (Secondary)
            accent: "#FF5722", // Red-Orange (Accent)
            background: "#F4F5F7", // Light Gray Background
            text: "#333333", // Dark Gray Text
            success: "#28A745", // Green for Success
            warning: "#FFC107", // Yellow for Warnings
            error: "#DC3545", // Red for Errors
            info: "#17A2B8", // Teal for Info messages
            cloud: "#F0F8FF",
            darkBackground: "#1f2937",
            darkText: "#f9fafb",
            violetta: "#229799",
            test: "#48CFCB",
            nav: "#F5F5F5",
            write: "#424242",
        },
        fontFamily: {
            sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
            mono: ["Fira Code", "monospace"],
        },
        spacing: {
            "72": "18rem",
            "84": "21rem",
            "96": "24rem",
            "128": "32rem",
        },
        borderRadius: {
            lg: "0.5rem",
            xl: "1rem",
        },
        screens: {
            "3xl": "1600px", // For very large screens like dashboards
        },
    },
};
