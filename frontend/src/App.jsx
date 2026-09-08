import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import GlobalLayout from './layouts/GlobalLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Recipes from './pages/Recipes';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import VerifyEmail from './pages/Authentication/VerifyEmail';
import VerifyOtp from './pages/Authentication/VerifyOtp';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword';

// User Dashboard Layout & Pages
import UserDashboardLayout from './layouts/UserDashboardLayout';
import DashboardHome from './pages/Dashboard/User/DashboardHome';
import Profile from './pages/Dashboard/User/Profile';
import Appointments from './pages/Dashboard/User/Appointments';
import ProgressTracking from './pages/Dashboard/User/ProgressTracking';
import DietPlans from './pages/Dashboard/User/DietPlans';
import Reports from './pages/Dashboard/User/Reports';
import AiChat from './pages/Dashboard/User/AiChat';
import AiDietGenerator from './pages/Dashboard/User/AiDietGenerator';
import AiImageAnalyzer from './pages/Dashboard/User/AiImageAnalyzer';

// Dietitian Dashboard Layout & Pages
import DietitianDashboardLayout from './layouts/DietitianDashboardLayout';
import DietitianHome from './pages/Dashboard/Dietitian/DietitianHome';
import ClientManagement from './pages/Dashboard/Dietitian/ClientManagement';
import DietPlanBuilder from './pages/Dashboard/Dietitian/DietPlanBuilder';
import AppointmentManagement from './pages/Dashboard/Dietitian/AppointmentManagement';
import DietitianReports from './pages/Dashboard/Dietitian/DietitianReports';

// Admin Dashboard Layout & Pages
import AdminDashboardLayout from './layouts/AdminDashboardLayout';
import AdminHome from './pages/Dashboard/Admin/AdminHome';
import UserManagement from './pages/Dashboard/Admin/UserManagement';
import DietitianManagement from './pages/Dashboard/Admin/DietitianManagement';
import BlogManagement from './pages/Dashboard/Admin/BlogManagement';
import RecipeManagement from './pages/Dashboard/Admin/RecipeManagement';
import PaymentManagement from './pages/Dashboard/Admin/PaymentManagement';
import AdminAnalytics from './pages/Dashboard/Admin/AdminAnalytics';

const queryClient = new QueryClient();

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <HelmetProvider>
      <GoogleOAuthProvider clientId={googleClientId}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Router>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="blog" element={<Blog />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* User Dashboard Routes */}
            <Route path="/dashboard/user" element={<UserDashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="progress" element={<ProgressTracking />} />
              <Route path="diet-plans" element={<DietPlans />} />
              <Route path="reports" element={<Reports />} />
              <Route path="ai-chat" element={<AiChat />} />
              <Route path="ai-diet" element={<AiDietGenerator />} />
              <Route path="ai-image" element={<AiImageAnalyzer />} />
            </Route>

            {/* Dietitian Dashboard Routes */}
            <Route path="/dashboard/dietitian" element={<DietitianDashboardLayout />}>
              <Route index element={<DietitianHome />} />
              <Route path="clients" element={<ClientManagement />} />
              <Route path="builder" element={<DietPlanBuilder />} />
              <Route path="schedule" element={<AppointmentManagement />} />
              <Route path="reports" element={<DietitianReports />} />
            </Route>

            {/* Admin Dashboard Routes */}
            <Route path="/dashboard/admin" element={<AdminDashboardLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="dietitians" element={<DietitianManagement />} />
              <Route path="blogs" element={<BlogManagement />} />
              <Route path="recipes" element={<RecipeManagement />} />
              <Route path="payments" element={<PaymentManagement />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
    </GoogleOAuthProvider>
    </HelmetProvider>
  );
}

export default App;
