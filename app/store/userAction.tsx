import { Dispatch } from "redux";
import { setUser } from "./userSlice";
import { toast } from "react-toastify";

export const fetchUser = (userID: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(
      `https://lobster-app-9ufhi.ondigitalocean.app/accounts/users/${userID}/`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData = await response.json();
    dispatch(setUser(userData));
  } catch (error) {
    console.error("Error fetching user:", error);
    toast.error("Error fetching user data");
    throw error;
  } finally {
    console.log("User data fetched successfully");
  }
};
