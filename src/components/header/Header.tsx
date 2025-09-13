import { Link } from "lucide-react";

export function Header() {
    return (
        <header className="flex justify-center text-base font-semibold gap-x-4">
            <Link href="/user/auth/login">Login</Link>
            <Link href="/user/auth/register">Cadastro</Link>
        </header>
    )
}