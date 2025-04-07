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
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container">
          <div className="py-10 text-center mt-10">
            <p className="text-white">
              © 2025 Posspole . All rights reserved.
            </p>
          </div>
        </div >
      </div>
    </div>
  )
}

export default AppLayout
