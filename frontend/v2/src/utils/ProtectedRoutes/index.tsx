/**
 * TODO Mudar para esse import depois de aprovar o PR #213
 * import { useAuth } from "@/contexts/useAuth";
 */

import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const { isAuthenticated, isLoading } = useAuth();

	if (isLoading) {
		return (
			<div
				className="spinner-border spinner-border-sm"
				role="status"
			/>
		);
	}

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
