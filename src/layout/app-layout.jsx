import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-bg"> </div>
      <main className="min-h-screen container">
          <Header /> 
          <Outlet />
      </main>
      <div className="w-full bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto">
          <div className="py-10 text-center mt-10">
            <p className="text-white">
              © 2025 Posspole . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
