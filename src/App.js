import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/common/colors.css";
import "./styles/common/titles.css";
import "./assets/fontAwesome/css/font-awesome.min.css";
import Home from "./components/views/home";
import AboutPage from "./components/views/aboutPage";
import Reports from "./components/views/reports";
import Contact from "./components/views/contact";
import PricingPage from "./components/views/pricingPage";
import TryUsPage from "./components/views/tryUsPage";
import TermsOfUsePage from "./components/views/termsOfUsePage";
import PrivacyPolicyPage from "./components/views/privacyPolicyPage";
import SubscriptionAgreement from "./components/views/subscriptionAgreement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/try-us" element={<TryUsPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/master-subscription-agreement"
          element={<SubscriptionAgreement />}
        />
        
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
