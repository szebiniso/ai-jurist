import { TAccount } from "@/shared/types/customTypes";

export const useAuthRedirect = ({ pathname }: Location) => {
  const storedAccount = localStorage.getItem("account");
  const profile = storedAccount
    ? (JSON.parse(storedAccount) as TAccount)
    : null;

  const pagesWithoutAuth = ["/login", "/register"];

  if (profile == null) {
    if (pagesWithoutAuth.includes(pathname)) return;

    return "/login";
  } else if (pathname === "/login") {
    if (profile.user_role === "client") {
      return "/chat";
    }
    return "/experts";
  }
};
