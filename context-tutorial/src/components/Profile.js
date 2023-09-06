import { useContext } from "react";
import { context } from "../store/user"
export default function Profile(){
  const userinfo = useContext(context);
  return(
    <div>
      <h2>
        Profile {userinfo.job}
      </h2>
    </div>
  )
}