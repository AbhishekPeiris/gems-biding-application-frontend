import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import SellerDashboard from "../pages/dashboard/SellerDashboard";
import BuyerDashboard from "../pages/dashboard/BuyerDashboard";

import CreateGemPage from "../pages/gems/CreateGemPage";
import GemDetailsPage from "../pages/gems/GemDetailsPage";

import AuctionRoomPage from "../pages/auction/AuctionRoomPage";
import CreateAuctionPage from "../pages/auction/CreateAuctionPage";
import AuctionListPage from "../pages/auction/AuctionListPage";

import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected */}
            <Route element={<ProtectedRoute />}>

                {/* Dashboards */}
                <Route path="/seller" element={<SellerDashboard />} />
                <Route path="/buyer" element={<BuyerDashboard />} />

                {/* Seller Routes */}
                <Route path="/seller/create-gem" element={<CreateGemPage />} />
                <Route path="/seller/auctions" element={<AuctionListPage />} />
                <Route path="/seller/create-auction" element={<CreateAuctionPage />} />

                {/* Buyer Routes */}
                <Route path="/buyer/auctions" element={<AuctionListPage />} />
                <Route path="/buyer/bids" element={<AuctionListPage />} />

                {/* Common */}
                <Route path="/auction/:id" element={<AuctionRoomPage />} />
                <Route path="/gems/:id" element={<GemDetailsPage />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
