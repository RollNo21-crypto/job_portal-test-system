import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLoyout from '@/layout/app-layout'
import Landing from '@/pages/landing'
import Onboarding from './pages/onboarding'
import JobPage from './pages/job'
import JobListing from './pages/job-listing'
import PostJob from './pages/post-job'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-job'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLoyout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/onboarding',
        element: <Onboarding/>,
      },
      {
        path: '/job/:id',//as we dont know the id of the job we are going to use :id
        element: <JobPage />,
      },
      {
        path: '/jobs',
        element: <JobListing />,
      },
      {
        path: '/post-job',
        element: <PostJob />,
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />,
      },
      {
        path: '/my-jobs',
        element: <MyJobs />,
      },
    ],
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
