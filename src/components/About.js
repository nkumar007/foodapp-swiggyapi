import { useContext } from "react";
import userContext from "../utils/userContext";
import ProfileClass from "./ProfileClass"
const About = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <h3>About the Namaste React Bootcamp.</h3>
      <h1>{user.name}</h1>
      <ProfileClass name={"Naveen Kumar"}/>
    </>
  );
};

export default About;
