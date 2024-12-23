import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout";
import MainPage from "./pages";
import AboutUs from "./pages/about_us";
import ScrollToTop from "./components/scroll/scrollToTop";
import Services from "./pages/services";

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </ScrollToTop>
  );
}