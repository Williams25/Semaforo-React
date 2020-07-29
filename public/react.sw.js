const installServiceWorker = () => {
  console.log(`install serviceWorker`)
}

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', installServiceWorker)

const activateServiceWorker = () => {
  console.log(`activate serviceWorker`)
}

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', activateServiceWorker)