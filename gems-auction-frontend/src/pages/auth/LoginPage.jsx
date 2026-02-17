import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";
import { isEmail, required } from "../../utils/validators";

export default function LoginPage() {
    const { login } = useAuth();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!isEmail(form.email)) {
            return setError("Invalid email address");
        }

        if (!required(form.password)) {
            return setError("Password is required");
        }

        try {
            setLoading(true);
            await login(form.email, form.password);
        } catch (err) {
            setError(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950 p-8">
                <h2 className="text-2xl font-bold text-slate-100 text-center">
                    Login to Gems Auction
                </h2>

                {error && (
                    <div className="mt-4 rounded-xl bg-rose-900/40 px-3 py-2 text-sm text-rose-200">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <Input
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                    />

                    <Button type="submit" loading={loading} className="w-full">
                        Login
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-indigo-400 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}
