import { content as _content, plugin } from "flowbite-react/tailwind";

// Export the Tailwind CSS configuration
export default {
    // Specify your custom theme configuration here
    theme: {
        extend: {
            colors: {
                // Add custom colors here
                primary: "#FF5722",
                secondary: "#4CAF50",
                // Add more custom colors as needed
            },
            // Add more customizations as needed
        },
    },
    // Include Flowbite-React content
    content: [_content(), "./src/**/*.{js,ts,jsx,tsx,mdx}"],
    // Include Flowbite-React plugin
    plugins: [plugin()],
};
