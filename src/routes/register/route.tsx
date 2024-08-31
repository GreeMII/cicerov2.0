import {createFileRoute} from "@tanstack/react-router";

const Page: React.FC = () => {
    return (
        <div id="wrapper" className="md:flex md:justify-center md:items-center min-h-screen bg-[#8C7456]">

            <form action=""
                  className="w-[420px] bg-transparent border-solid border-2 border-[#ffffff33] backdrop-blur-[20px] text-[#EEEEEE] rounded-[10px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]">
                <h1 className="text-center text-[36px] font-bold">Регистрация</h1>
                <div className="w-full h-[50px] mt-[30px] mb-0 relative">
                    <input id="input-box"
                           className="w-full h-full bg-transparent outline-none border-solid border-2 border-[#ffffff33] rounded-[40px] placeholder-[#EEEEEE] text-[18px] pb-[20px] pr-[45px] pt-[20px] pl-[20px]"
                           type="text" placeholder="Имя" required></input>
                    <i className="bx bx-user absolute right-[20px] text-[20px] top-[50%] -translate-y-1/2"></i>
                </div>
                <div className="w-full h-[50px] mt-[30px] mb-0 relative">
                    <input id="input-box"
                           className="w-full h-full bg-transparent outline-none border-solid border-2 border-[#ffffff33] rounded-[40px] placeholder-[#EEEEEE] text-[18px] pb-[20px] pr-[45px] pt-[20px] pl-[20px]"
                           type="text" placeholder="Фамилия" required></input>
                    <i className="bx bx-user absolute right-[20px] text-[20px] top-[50%] -translate-y-1/2"></i>
                </div>
                <div className="w-full h-[50px] mt-[30px] mb-0 relative">
                    <input id="input-box"
                           className="w-full h-full bg-transparent outline-none border-solid border-2 border-[#ffffff33] rounded-[40px] placeholder-[#EEEEEE] text-[18px] pb-[20px] pr-[45px] pt-[20px] pl-[20px]"
                           type="text" placeholder="Логин" required></input>
                    <i className="bx bx-user absolute right-[20px] text-[20px] top-[50%] -translate-y-1/2"></i>
                </div>
                <div className="w-full h-[50px] mt-[30px] mb-0 relative">
                    <input id="input-box"
                           className="w-full h-full bg-transparent outline-none border-solid border-2 border-[#ffffff33] rounded-[40px] placeholder-[#EEEEEE] text-[18px] pb-[20px] pr-[45px] pt-[20px] pl-[20px]"
                           type="email" placeholder="E-mail" required></input>
                    <i className="bx bx-user absolute right-[20px] text-[20px] top-[50%] -translate-y-1/2"></i>
                </div>
                <div className="w-full h-[50px] mt-[30px] mb-0 relative">
                    <input id="input-box"
                           className="w-full h-full bg-transparent outline-none border-solid border-2 border-[#ffffff33] rounded-[40px] placeholder-[#EEEEEE] text-[18px] pb-[20px] pr-[45px] pt-[20px] pl-[20px] "
                           type="password" placeholder="Пароль" required></input>
                    <i className="bx bxs-lock-alt absolute right-[20px] text-[20px] top-[50%] -translate-y-1/2"></i>
                </div>
                <div id="remember-forgot" className="md:flex justify-end text-[15px] mt-[15px] mb-[15px] mr-0 ml-0 ">
                    <a href="#" className="hover:underline">Забыли пароль?</a>
                </div>
                <button id="but_login"
                        className="w-full h-[45px] bg-[#EEEEEE] border-none rounded-[40px] outline-none shadow-[0_0_10px_rgba(0,0,0,0.1) text-[16px] text-[#333] font-bold"
                        type="submit">Login
                </button>
                <div id="Register_link" className="text-[15px] text-center mt-[15px]">
                    <p>Есть аккаунт?<a href="Login" className="font-semibold hover:underline ml-[5px]">Войти</a></p>
                </div>
            </form>
        </div>
    )
}
export const Route = createFileRoute("/register")({
    component: Page,
});