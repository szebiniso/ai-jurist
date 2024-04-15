import React from "react";
import Link from "next/link";
import Image from "next/image";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

const Login = () => {
  return (
    <main className="bg-black h-screen flex justify-center">
      <Link href="/">
        <Image
          className="absolute top-8 left-8"
          src={"/images/Logo.svg"}
          alt="/"
          width={140}
          height={20}
        />
      </Link>

      <div className="bg-[#202123] rounded-3xl w-1/3 m-auto flex flex-col items-center py-8 px-12">
        <form className="w-full">
          <p className="text-2xl text-c-white text-center mb-6">Войти</p>
          <div className="flex flex-col gap-2 mb-6">
            <Input label="Почта" name="email" placeholder="exemple@gmail.com" />
            <Input label="Пароль" name="password" placeholder="*******" />
          </div>
          <Button text="Войти" />
          <div className="flex justify-between text-c-gray text-sm mt-12 font-light">
            <Link href="/login">Забыли пароль ?</Link>
            <Link href="/register">Регистрация</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
