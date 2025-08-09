import { Navigate, Outlet, useLocation } from "react-router-dom";

function isExpired(token) {
  try {
    const [, payload] = token.split(".");
    const { exp } = JSON.parse(atob(payload));
    return Date.now() >= exp * 1000;
  } catch { return true; }
}

export default function ProtectedRoute() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token || isExpired(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}
