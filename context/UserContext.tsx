import React, { createContext, useState, useContext } from "react";

// Tipado del usuario
interface Usuario {
  matricula: string;
  password: string;
  usuarioId: string;
}

// Tipado de la respuesta completa (que incluye el token y el usuario)
interface AuthResponse {
  token: string;
  usuario: Usuario;
}

// Contexto actualizado con el tipo Usuario
type UserContextType = {
  user: Usuario | null; // El usuario o null si no está autenticado
  setUser: (user: Usuario | null) => void; // Método para actualizar el usuario
};

// Creación del contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Proveedor del contexto
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Usuario | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};