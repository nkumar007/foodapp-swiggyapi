import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Naveen",
    email: "Naveenk@gmail.com",
  },
});

userContext.displayName = "userContext";

export default userContext;
