import ScrollToTop from '@/components/ui/ScrollToTop'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/routes/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  )
}

export default App
