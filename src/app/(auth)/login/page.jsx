import { handleGithubLogin, handleGoogleLogin, handleKakaoLogin } from "@/lib/action";

const LoginPage = async () => {

    return (
        <div>
            <form action={handleGoogleLogin}>
            <button><img src="/login/google.svg" width={30} height={30} />Login with Google</button>
            </form>

            <form action={handleKakaoLogin}>
            <button><img src="/login/kakao.svg" width={30} height={30} />Login with Kakao</button>
            </form>

            <form action={handleGithubLogin}>
            <button><img src="/login/github.svg" width={30} height={30} />Login with Github</button>
            </form>
        </div>
    );
};

export default LoginPage;