import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import axios from "axios";
function StepsRegister() {
  const steps = [StepOne, StepTwo, StepThree];
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    user_handle: "",
    email_address: "",
    first_name: "",
    last_name: "",
    phonenumber: "",
    password_hash: "",
    birth_day: "",
  });
  const navigate = useNavigate();
  const registerUser = (updatedData) => {
    axios
      .post("http://localhost:3000/api/users", updatedData)
      .then((response) => {
        console.log("Usuario registrado:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al registrar usuario:", error);
      });
  };

  const StepComponent = steps[step];

  const nexStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="bg-autform">
      <div className="container-autform">
        <form
          action=""
          className="form-autform"
          onSubmit={(e) => e.preventDefault()}
        >
          <img src="../../public/img/Logo _ ART BYTE_White.png" alt="" />
          <p>Crea una cuenta</p>
          <StepComponent
            formData={formData}
            setFormData={setFormData}
            nexStep={nexStep}
            prevStep={prevStep}
            registerUser={registerUser}
          />
        </form>
        <div className="btn-register-authform">
          <p>
            Ya tienes cuenta <Link to="/login">Inicia sesion</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepsRegister;
