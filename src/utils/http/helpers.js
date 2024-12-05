export function resErrorPreHandle(code, message) {
  code = String(code);
  message = String(message);
  const router = useRouter();

  switch (true) {
    case code === "401":
      window.alert("登录过期");
      router.replace({ name: "login" });
      break;
  }
}
