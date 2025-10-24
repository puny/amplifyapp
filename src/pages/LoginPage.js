import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // 여기에 로그인 로직 추가
        console.log("Logging in with", { email, password });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-2xl shadow-md w-80"
            >
                <h1 className="text-2xl font-semibold text-center mb-6">로그인</h1>
                <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-3 p-2 border rounded"
                required
                />
                <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-5 p-2 border rounded"
                required
                />
                <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                로그인
                </button>
            </form>
        </div>
    );



}