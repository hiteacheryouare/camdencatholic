export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                has: 'has.html',
                description: 'desc.html',
                student: 'student.html',
                teacher: 'teacher.html',
                uniform: 'uniform.html',
            },
            output: {
                dir: 'docs',
            }
        }
    }
}