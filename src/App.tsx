import Navbar from "./Components/Navbar/Navbar.tsx"
import WelcomeNote from "./Components/WelcomeNote/WelcomeNote.tsx"

const App = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
    <WelcomeNote />
</div>
    
    </>
  )
}

export default App
