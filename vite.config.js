export default {
    server: {
        port: 5000,
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['./public/']
        },
    },
};