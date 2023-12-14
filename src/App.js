import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

// import Story from './Component/Story/Story';
// import Freelance from './Component/Freelance/Freelance';
// import Story from './Component/Story/Story';
// import Blogs from './Component/Blogs/Blogs';
// import BlogPage from './Component/Pages/BlogPage';
import Navigation from "./Component/Navbar/Navigation";
// import Banner from './Component/Banner/Banner';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing";
import Blogs from "./Component/Blogs/Blogs";
import BlogPage from "./Component/Pages/BlogPage";
import About from "./Component/Pages/About";
import Footer2 from "./Component/Footer2";
import Products from "./Component/Products/Products";
import SingleProductPage from "./Component/Products/SingleProduct";

function App() {
  const dummyProducts = [
    {
      name: "Speaker",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
      price: 56,
    },
    {
      name: "SmartWatch",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
      price: 86,
    },
    {
      name: "Cool In-ear headphones",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
      price: 76,
    },
    {
      name: "HeadPhones",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      price: 46,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb",
      price: 56,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=1z6MBkrdn_oY5XJ8RdBv7a3MMpkuJ4enE",
      price: 56,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=1MAAHsydFoaDUENIALzXffLNE6Qtn89Ae",
      price: 56,
    },
  ];
  return (
    <div className="App">
      <Router>
        <Navigation />
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product/:productName"
            element={<SingleProductPage products={dummyProducts} />}
          />
        </Routes>
        <Footer />
        {/* <Footer2/> */}
      </Router>

      {/* <Banner/>
    <Freelance/>
    <Story/>
    <BlogPage/>
    <Card/>
    <Blogs/> */}
    </div>
  );
}

export default App;
export { default as HeroBanner } from "./Component/Products/HeroBanner";
