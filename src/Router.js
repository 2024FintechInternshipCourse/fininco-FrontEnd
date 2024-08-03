import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";
import MyPage from "./pages/mypage/mypage-setting";
import NoLayout from "./components/common/no-layout";
import ExchangeRatePage from "./pages/ExchangeRate/ExchangeRatePage";
import Notice from "./components/mypage/Notice";
import MyInfo from "./components/mypage/MyInfo";
import Notification from "./components/mypage/Notification";
import AccountList from "./components/mypage/AccountList";
import LogIn from "./pages/login";
import SignUp from "./pages/sign-up";
import TransactionDetail from "./components/home/TransactionDetail/TransactionDetail";
import SpendingReport from "./components/home/TransactionDetail/SpendingReport";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },

  {
    path: "",
    element: (
      <ProtectedRoute>
        <NoLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/exchange/rate",
        element: <ExchangeRatePage />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/info",
        element: <MyInfo />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/account/list",
        element: <AccountList />,
      },
      {
        path: "/transaction/detail",
        element: <TransactionDetail />,
      },
      {
        path: "/spending/report",
        element: <SpendingReport />,
      },
    ],
  },
]);
export default Router;
