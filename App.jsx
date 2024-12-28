// Imports (chakra ui, react router, other pages in folder)
import { Box, Button } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Navbar from "./components/ui/Navbar"
// Function to make app
function App() {
// Main app page is a box with navbar and routes to home and create pages
  return (
    <Box minH={"100vh"} bg={"gray.900"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Box>
  );
}
// Export app
export default App
