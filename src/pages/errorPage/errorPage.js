import "./errorPage.css";
import { errorImg } from "../../assets";
import {useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate=useNavigate();
  return (
    <div className="error-page-container">
      <div className="card-grid">
        <img className="error-img" src={errorImg} alt="404-img" />
      </div>
      <div className="card-grid align-md text-center">
        <div>
        <h3>Page not Found</h3>
        <button className="button-md cursor-pointer"
          onClick={()=>navigate(-1)}
          >Go Back </button>
        </div>
      </div>
    </div>
  );
};
export { ErrorPage };
