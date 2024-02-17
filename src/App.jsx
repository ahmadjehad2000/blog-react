import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import Nopage from "./pages/Nopage/Nopage";
import BlogInfo from "./pages/BlogInfo/BlogInfo";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import MState from "./contexts/data/MState";
import CreateBlog from "./pages/Admin/CreateBlog/CreateBlog";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <MState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <Toaster/>
      </Router>
    </MState>
  )
}

export default App