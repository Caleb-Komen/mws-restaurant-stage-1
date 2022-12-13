if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(() => {
        console.log('Registration successful!')
    }).catch(() => {
        console.log('Registration failed!')
    })
}