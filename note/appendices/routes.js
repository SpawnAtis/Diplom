// routes.js
import React from "react";
import { DrawerNavigator } from "react-navigation";
import User from "./user";
import LoginScreen from "./User/Login";
import ForgotScreen from "./User/Forgot";
import LogoutScreen from "./User/Logout";
import SignUpScreen from "./User/SignUp";
import ProfileFbVk from "./User/ProfileFbVk";
import ProfileEdit from "./User/ProfileEdit";
import profile from "./Profile";
import ConfirmPhone from "./User/ConfirmPhone";
import Feed from "./Feed/index";
import Maps from "./Maps/index";
import Chat from "./Chat/index";
import Calls from "./Calls/index";
import SideBar from "./_components/SideBar";
import NavigatorService from "./_helpers/navigator";

const noDrawer = () => ({ drawerLockMode: "locked-closed" });
const MainRouter = DrawerNavigator(
  {
    // User-related items
    Login: { navigationOptions: noDrawer, screen: LoginScreen },
    ConfirmPhone: { navigationOptions: noDrawer, screen: ConfirmPhone },
    Forgot: { navigationOptions: noDrawer, screen: ForgotScreen },
    SignUp: { navigationOptions: noDrawer, screen: SignUpScreen },
    Logout: { navigationOptions: noDrawer, screen: LogoutScreen },
    ProfileInit: { navigationOptions: noDrawer, screen: ProfileEdit },
    ProfileFbVk: { navigationOptions: noDrawer, screen: ProfileFbVk },
    Maps: { screen: Maps },
    ProfileEdit: {
      screen: NavigatorService.stackNav({
        ProfileEditMain: { screen: ProfileEdit }
      })
    },
    MyProfile: { screen: NavigatorService.stackNav(profile("MyFooter")) },
    UserProfile: { screen: NavigatorService.stackNav(profile("User")) },
    FindFriends: {
      screen: NavigatorService.stackNav(profile("FindFriends"), "FriendsMain")
    },
    Chats: { screen: Chat },
    Calls: { screen: Calls },
    Feed: { screen: Feed("FeedMain") }
  },
  {
    drawerBackgroundColor: "rgba(0, 0, 0, .7)",
    initialRouteName: "Login",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentComponent: props =>
      !User.isLoggedIn() ? null : <SideBar {...props} />
  }
);
export default MainRouter;
