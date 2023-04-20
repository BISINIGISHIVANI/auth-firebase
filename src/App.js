import './App.css';
import {Routes,Route} from "react-router-dom"
import {Login,Signup,ResetPassword,MyDashboard} from "./components/index"
import { ErrorPage } from './pages/errorPage/errorPage';
function App() {
  return (
    <div>
    <Routes>
      <Route path="/"element={<Login/>}/>
      <Route path="/signup"element={<Signup/>}/>
      <Route path="/reset"element={<ResetPassword/>}/>
      <Route path="/mydashboard"element={<MyDashboard/>}/>
      <Route path="*"element={<ErrorPage/>}/>
    </Routes>
    {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}

export default App;
