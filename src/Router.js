import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";
import MyPage from "./pages/mypage/mypage-setting";
import NoLayout from "./components/common/no-layout";
import Notice from "./components/mypage/Notice";
import MyInfo from "./components/mypage/MyInfo";
import Notification from "./components/mypage/Notification";
import AccountList from "./components/mypage/AccountList";
import LogIn from "./pages/login";
import SignUp from "./pages/sign-up";
import TransactionDetail from "./components/home/TransactionDetail/TransactionDetail";
import SpendingReport from "./components/home/TransactionDetail/SpendingReport";
import Category from "./components/home/Category/Category";
import KrwDetail from "./components/home/BalanceDetail/KrwDetail";
import Unsubscribe from "./components/mypage/Unsubscribe";
import JpyDetail from "./components/home/BalanceDetail/JpyDetail";
import UsdDetail from "./components/home/BalanceDetail/UsdDetail";
import USD_ExchangeRate from "./components/ExchangeRate/USD_ExchangeRate";
import JPY_ExchangeRate from "./components/ExchangeRate/JPY_ExchangeRate";
import LoadingScreen from "./components/common/loading-screen";
import LandingScreen from "./components/common/loading-screen";

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
        path: "/usd/exchange/rate",
        element: <USD_ExchangeRate />,
      },
      {
        path: "/jpy/exchange/rate",
        element: <JPY_ExchangeRate />,
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
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/krw/detail",
        element: <KrwDetail />,
      },
      {
        path: "/jpy/detail",
        element: <JpyDetail />,
      },
      {
        path: "/usd/detail",
        element: <UsdDetail />,
      },
      {
        path: "/unsubscribe",
        element: <Unsubscribe />,
      },
      {
        path: "/landing",
        element: <LandingScreen />,
      },
    ],
  },
]);
export default Router;
