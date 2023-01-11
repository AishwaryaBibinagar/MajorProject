import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/employees/Login";
import Register from "./pages/employees/Register";
import MainHome from "./pages/MainHome";
import Feedbackmain from "./pages/feedback/Feedbackmain";
import Feedbackform from "./pages/feedback/Feedbackform";
import ResultHome from "./pages/ResultHome";
import "./styles/theme.css";
import "./styles/layout.css";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import { Toaster } from "react-hot-toast";
import EmployeeHome from "./pages/employees/EmployeeHome";
import ProtectedRoute from "./components/ProtectedRoute";
import Students from "./pages/employees/Students";
import AddStudent from "./pages/employees/AddStudent";
import Sem7 from "./pages/feedback/Sem7";
import Sem6 from "./pages/feedback/Sem6";
import Sem5 from "./pages/feedback/Sem5";
import Sem4 from "./pages/feedback/Sem4";
import Sem3 from "./pages/feedback/Sem3";
import Sem2 from "./pages/feedback/Sem2";
import Sem1 from "./pages/feedback/Sem1";
import StudentHome from "./pages/StudentHome";

import EditStudent from "./pages/employees/EditStudent";
import PublicRoute from "./components/PublicRoute";
import Results from "./pages/employees/Results";
import AddResult from "./pages/employees/AddResult";
import EditResult from "./pages/employees/EditResult";
import ResultCheck from "./pages/ResultCheck";
import Analysis from "./pages/Analysis";

function App() {
  const { loading } = useSelector((state) => state.alert);

  return (
    <div className="App">
      {loading ? <Spinner /> : null}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/Feedbackmain" element={<Feedbackmain />} />
          <Route path="/Feedbackform" element={<Feedbackform />} />
          <Route path="/resulthome" element={<ResultHome />} />
          <Route path="/result/:resultId" element={<ResultCheck />} />
          <Route path="/Analysis" element={<Analysis />} />
          <Route path="/sem7" element={<Sem7 />} />
          <Route path="/sem6" element={<Sem6 />} />
          <Route path="/sem5" element={<Sem5 />} />
          <Route path="/sem4" element={<Sem4 />} />
          <Route path="/sem3" element={<Sem3 />} />
          <Route path="/sem2" element={<Sem2 />} />
          <Route path="/sem1" element={<Sem1 />} />
          <Route path="/studenthome" element={<StudentHome />} />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRoute>
                <EmployeeHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/students"
            element={
              <ProtectedRoute>
                <Students />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/students/add"
            element={
              <ProtectedRoute>
                <AddStudent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/students/edit/:rollNo"
            element={
              <ProtectedRoute>
                <EditStudent />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/results"
            element={
              <ProtectedRoute>
                <Results />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/results/add"
            element={
              <ProtectedRoute>
                <AddResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/results/edit/:resultId"
            element={
              <ProtectedRoute>
                <EditResult />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
