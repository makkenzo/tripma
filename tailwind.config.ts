import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            screens: {
                sm: "1040px",
                md: "1168px",
                lg: "1424px",
                xl: "1800px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#605DEC",
                    foreground: "hsl(var(--primary-foreground))",
                    hover: "hsl(var(--primary-hover))",
                    global: "#605DEC",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                inactive: {
                    DEFAULT: "hsl(var(--inactive))",
                    foreground: "hsl(var(--inactive-foreground))",
                },
                purpleDark: "hsl(var(--purple-dark))",
                purpleDark_60: "var(--purple-dark-60)",
                purpleLight: "hsl(var(--purple-light))",
                purpleBlue: "hsl(var(--purple-blue))",
                purpleExtraLight: "hsl(var(--purple-extra-light))",
                purpleWhite: "hsl(var(--purple-white))",
                tripmaBlue: "hsl(var(--blue))",
                tripmaTurquoise: "hsl(var(--turquoise))",
                tripmaRed: "hsl(var(--red))",
                tripmaGrey: "hsla(var(--grey))",
                redLight: "hsl(var(--red-light))",
                purpleWhiteLight: "hsl(var(--purple-white-light))",
                deepGreen: "hsl(var(--deep-green))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
