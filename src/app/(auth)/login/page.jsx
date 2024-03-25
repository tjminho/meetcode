import { signIn } from "@/lib/auth";

const LoginPage = () => {

    const handlsGithubLogin = async (e) => {
        "use server";
        await signIn("github");
    }
    return (
        <div>
            <form action={handlsGithubLogin}>
            <button>Login with Github</button>
            </form>
        </div>
    );
};

export default LoginPage;