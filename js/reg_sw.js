navigator.serviceWorker.register('js/sw.js').then(() => {
    console.log('Registration successful!')
}).catch(() => {
    console.log('Registration failed!')
})