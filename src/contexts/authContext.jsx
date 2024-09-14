import { createContext, useState } from "react";

// Crear contexto de autenticación
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);  // Guardar los datos del usuario autenticado

  const login = (userInfo) => {
    setIsAuthenticated(true);
    setUserData(userInfo);  // Guardar los datos del usuario al iniciar sesión
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);  // Limpiar los datos del usuario al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;