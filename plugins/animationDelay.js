const plugin = require("tailwindcss/plugin")

const animationDelay = plugin(function ({matchUtilities, theme}){
    matchUtilities(
        {
            "animation-delay": (value) => {
                return {
                    animationDelay: value
                }
            }
        }, {
            values: theme("animationDelay"),
        })
}, {
    theme: {
        animationDelay: {
            100: "100ms",
            200: "200ms",
            300: "300ms",
            400: "400ms",
            500: "500ms",
            700: "700ms",
            1000: "1000ms",
            1500: "1500ms",
            2000: "2000ms",
            3000: "3000ms",
        }
    }
})

module.exports = animationDelay;