import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Router as RouterHistory } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./components/ErrorPage";
import AuthLayout from "./components/AuthLayout";
import history from "@/utils/history";
import store from "@/redux/store";

import { Button, Result } from "antd";

import useNetwork from "@/hooks/useNetwork";

function App() {
  const { isOnline: isNetwork } = useNetwork();

  if (!isNetwork)
    return (
      <Router>
        <Route
          path="/404"
          element={
            <AuthLayout>
              <ErrorPage
                errorCode="404"
                message="Trang bạn tìm không tồn tại!"
                buttonText="Trở về trang chủ"
                buttonLink="/"
              />
            </AuthLayout>
          }
        />
      </Router>
    );
  else {
    return (
      <RouterHistory history={history}>
        <Provider store={store}>
          <Router />
        </Provider>
      </RouterHistory>
    );
  }
}

export default App;
