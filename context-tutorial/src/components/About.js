import { useContext } from "react";
import { context } from "../store/user"

export default function About(){
  const userinfo = useContext(context);
  return (
    <div>
      <h2>About {userinfo.name}</h2>
    </div>
  )
}