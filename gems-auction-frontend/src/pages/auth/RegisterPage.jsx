import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";
import { isEmail, minLen, required } from "../../utils/validators";
import { ROLES } from "../../utils/constants";

export default function RegisterPage() {
    const { register } = useAuth();

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        password: "",
        role: ROLES.BUYER,
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!required(form.full_name)) {
            return setError("Full name is required");
        }

        if (!isEmail(form.email)) {
            return setError("Invalid email");
        }

        if (!minLen(form.password, 6)) {
            return setError("Password must be at least 6 characters");
        }

        try {
            setLoading(true);
            await register(form);
        } catch (err) {
            setError(err.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950 p-8">
                <h2 className="text-2xl font-bold text-slate-100 text-center">
                    Create Account
                </h2>

                {error && (
                    <div className="mt-4 rounded-xl bg-rose-900/40 px-3 py-2 text-sm text-rose-200">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <Input
                        label="Full Name"
                        value={form.full_name}
                        onChange={(e) => handleChange("full_name", e.target.value)}
                    />

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

                    <div>
                        <label className="text-sm text-slate-200">Role</label>
                        <select
                            className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                            value={form.role}
                            onChange={(e) => handleChange("role", e.target.value)}
                        >
                            <option value={ROLES.BUYER}>Buyer</option>
                            <option value={ROLES.SELLER}>Seller</option>
                        </select>
                    </div>

                    <Button type="submit" loading={loading} className="w-full">
                        Register
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-400 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}
