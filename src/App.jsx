import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './admin/dashboard/AdminDashboard';
import Signups from './admin/analytics/Signups';
import Payment from './admin/analytics/Payment';
import ImportFromDatabasePage from './admin/content/Imports/ImportFromDatabase';
import Unsubscribe from './admin/content/Imports/Unsubscribe';
import AllTests from './admin/content/personal content/AllTests';
import EditCategories from './admin/content/personal content/EditCategories';
import LiveClass from './admin/Courses & Packages/LiveClass';
import VideoCourses from './admin/Courses & Packages/VideoCourses';
import ELibrary from './admin/Courses & Packages/E-Library';
import TestSeries from './admin/Courses & Packages/TestSeries';
import ActivationKey from './admin/Activation Key/ActivationKey';
import CurrentAffairs from './admin/Customization/CurrentAffairs';
import DailyNews from './admin/Customization/DailyNews';
import ExamRecording from './admin/Customization/ExamRecording';
import AddExamImages from './admin/Customization/AddExamImages';
import HomepageOffer from './admin/Customization/HomepageOffer';
import UpdateInfo from './admin/Settings/UpdateInfo';
import SocialLogin from './admin/Settings/SocialLogin';
import Notifications from './admin/Notification/Notifications';
import Marketing from './admin/Marketing kit/Marketing';
import TestReport from './admin/Test Report/TestReport';
import Marketplace from './admin/Marketplace/Marketplace';
import Feedback from './admin/Feedback/Feedback';
import Support from './admin/Support/Support';
import AddUser from './admin/Manage User/AddUser';
import EditUser from './admin/Manage User/EditUser';
import Login from './admin/Customization/Customize Webpage/Login';
import Test from './admin/content/personal content/Add New/Test';
import Categories from './admin/content/personal content/Add New/Categories';
import ImportFromDoc from './admin/content/personal content/Add New/ImportFromDoc';

// import Payment from './admin/analytics/Payment';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      {/* Wrap all /admin routes in AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="analytics/signups" element={<Signups />} />
        <Route path="analytics/payment" element={<Payment />} />
        <Route path="content/imports/database-import" element={<ImportFromDatabasePage />} />
        <Route path="content/imports/unsubscribe" element={<Unsubscribe />} />
        <Route path="content/all-tests" element={<AllTests />} />
        <Route path="content/edit-categories" element={<EditCategories />} />
        <Route path="courses/live-class" element={<LiveClass />} />
        <Route path="courses/video-courses" element={<VideoCourses />} />
        <Route path="courses/e-library" element={<ELibrary />} />
        <Route path="courses/test-series" element={<TestSeries />} />
        <Route path="activation-keys" element={<ActivationKey />} />
        <Route path="customization/current-affairs" element={<CurrentAffairs />} />
        <Route path="customization/daily-news" element={<DailyNews />} />
        <Route path="customization/exam-reordering" element={<ExamRecording />} />
        <Route path="customization/exam-images" element={<AddExamImages />} />
        <Route path="customization/offer-ads" element={<HomepageOffer />} />
        <Route path="customization/login-signup" element={<Login />} />
        <Route path="settings/site-info" element={<UpdateInfo />} />
        <Route path="settings/social-login" element={<SocialLogin />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="test-report" element={<TestReport />} />
        <Route path="addons" element={<Marketplace />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="support" element={<Support />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/edit" element={<EditUser />} />
        <Route path="content/personal-content/test" element={<Test />} />
        <Route path="content/personal-content/categories" element={<Categories />} />
        <Route path="content/personal-content/importfromdoc" element={<ImportFromDoc />} />

        {/* <Route path="analytics/payment" element={<Payment />} /> */}
        {/* Add more child routes here */}
      </Route>
    </Routes>
  );
}

export default App;
