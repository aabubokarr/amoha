import React from "react";
import { BookPage } from "../BookPage/BookPage";
import { UniversalFooter } from "../Footer/UniversalFooter";

export const DemoPage = () => {
  return (
    <div className="demopage">
      <BookPage />
      <UniversalFooter />
    </div>
  );
};
