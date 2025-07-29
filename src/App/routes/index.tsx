import { SignUp } from '@pages/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const Router = () => {
  const isAuth = false; // замените на проверку авторизации из Zustand или др.

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/signin" element={<SignInPage />} /> */}
        <Route path="/signup" element={<SignUp />} />
        {/* <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/signin" replace />}
        /> */}
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
