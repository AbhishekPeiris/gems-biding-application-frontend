import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import SellerDashboard from "../pages/dashboard/SellerDashboard";
import BuyerDashboard from "../pages/dashboard/BuyerDashboard";
import AuctionRoomPage from "../pages/auction/AuctionRoomPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/seller" element={<SellerDashboard />} />
                <Route path="/buyer" element={<BuyerDashboard />} />
                <Route path="/auction/:id" element={<AuctionRoomPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}