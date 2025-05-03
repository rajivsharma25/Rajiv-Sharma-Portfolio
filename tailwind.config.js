tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10deg)' },
                    '60%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(0deg)' }
                }
            },
            animation: {
                wave: 'wave 2s infinite',
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
            },
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        }
    }
}
