import { request } from "@/utils/index.js";

export function login(data) {
  return request.post("/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
