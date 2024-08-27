import axiosInstance from "@/services/common/AxiosSingleton";
import { Colaborador } from "@/types/Colaborador";
import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

interface AuthContextProps {
	token: string | null;
	login: (token: string, refreshToken: string) => void;
	logout: () => void;
	isAuthenticated: boolean;
	isLoading: boolean;
	user?: Colaborador;
}

export const AuthContext = createContext<AuthContextProps>({
	token: null,
	login: (token: string, refreshToken: string) => {
		token;
		refreshToken;
	},
	logout: () => {},
	isAuthenticated: false,
	isLoading: true,
	user: null,
});

interface AuthProviderProps {
	children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [token, setToken] = useState<string | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<Colaborador>();

	useEffect(() => {
		const getUser = async () => {
			try {
				const response = await axiosInstance.get(
					"/colaborador/logado/"
				);
				setUser(response.data);
			} catch (error) {
				console.error("Erro ao obter o usuário:", error);
				toast.error("Erro ao obter o usuário.");
			}
		};

		if (token) {
			getUser();
		}
	}, [token]);

	useEffect(() => {
		const refreshToken = async () => {
			try {
				const refreshToken = localStorage.getItem("refreshToken");
				if (refreshToken) {
					const response = await axiosInstance.post(
						"/token/refresh/",
						{
							refresh: refreshToken,
						}
					);
					const newToken = response.data.access;
					setToken(newToken);
					localStorage.setItem("token", newToken);
					setIsAuthenticated(true);
				}
			} catch (error) {
				console.error("Erro ao atualizar o token:", error);
				toast.error("Sessão expirada!");

				setIsAuthenticated(false);
				logout();
			} finally {
				setIsLoading(false);
			}
		};

		refreshToken();
	}, []);

	const login = (newToken: string, refreshToken: string) => {
		setIsAuthenticated(true);
		localStorage.setItem("token", newToken);
		localStorage.setItem("refreshToken", refreshToken);
		setToken(newToken);
	};

	const logout = () => {
		setIsAuthenticated(false);
		localStorage.removeItem("token");
		localStorage.removeItem("refreshToken");
		setToken(null);
	};

	return (
		<AuthContext.Provider
			value={{ token, isAuthenticated, login, logout, isLoading, user }}
		>
			{children}
		</AuthContext.Provider>
	);
}
