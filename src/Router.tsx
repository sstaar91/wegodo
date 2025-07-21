import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "@_components/Layouts";
import Home from "@_pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default Router;
