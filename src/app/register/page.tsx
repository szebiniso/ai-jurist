import React from "react";
import Link from "next/link";
import Image from "next/image";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

const fields = [
  { name: "name", label: "Имя", placeholder: "Name" },
  { name: "last_name", label: "Фамилия", placeholder: "Surname" },
  { name: "phone", label: "Номер телефона", placeholder: "(+996)" },
  { name: "email", label: "Почта", placeholder: "exemple@gmail.com" },
  { name: "region", label: "Регион КР", placeholder: "" },
  { name: "password", label: "Пароль", placeholder: "*******" },
];

const Register = () => {
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

      <div className="bg-[#202123] rounded-3xl w-1/3 m-auto flex flex-col items-center py-6 px-12">
        <form className="w-full">
          <p className="text-2xl text-c-white text-center mb-6">Регистрация</p>
          <div className="flex flex-col gap-2 mb-6">
            {fields.map(({ name, label, placeholder }) => (
              <Input
                key={name}
                label={label}
                name={name}
                placeholder={placeholder}
              />
            ))}
          </div>
          <Button text="Зарегистрироваться" />
          <div className="flex justify-between text-c-gray text-sm mt-12 font-light">
            <Link href="/register">Забыли пароль ?</Link>
            <Link href="/login">Войти в аккаунт</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
