import React from 'react'

const NotFound = () => {
  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <div class="px-4 lg:py-12">
        <div class="lg:gap-4 lg:flex">
          <div
            class="flex flex-col items-center justify-center md:py-24 lg:py-32"
          >
            <h1 class="font-bold text-yellow-500 text-9xl">404</h1>
            <p
              class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
            >
              <span>Oops!</span> Page not found
            </p>
            <p class="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <a
              href="/"
              class="px-6 py-2 text-sm font-semibold text-yellow-800 bg-yellow-200"
              >Back To Homepage</a
            >
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound