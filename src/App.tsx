import React, { Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainMenuPage from "./pages/MainMenuPage";
import CleanLayout from "./layouts/CleanLayout";
import NotFoundPage from "./pages/NotFoundPage";
import { shopsFullPaths, shopsPaths } from "./shops/routing/paths";

const ShopsListPage = React.lazy(() => import("./shops/pages/ShopsListPage"));

const App = (): React.ReactElement => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to={shopsFullPaths.list} />} />
            <Route path="menu" element={<MainMenuPage />} />
          </Route>
          <Route path={shopsPaths.root} element={<MainLayout />}>
            <Route path={shopsPaths.list} element={<ShopsListPage />} />
          </Route>
          <Route path="*" element={<CleanLayout />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
