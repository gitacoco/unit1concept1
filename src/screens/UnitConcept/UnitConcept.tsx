import React from "react";
import { MainContentByAnima } from "./sections/MainContentByAnima/MainContentByAnima";
import { TopAreaByAnima } from "./sections/TopAreaByAnima";

export const UnitConcept = (): JSX.Element => {
  return (
    <div className="w-full mx-auto min-w-0 overflow-x-hidden flex flex-col h-screen items-start gap-2 px-4 py-2 pb-4 bg-[#f7f9fb]">
      <TopAreaByAnima />
      <MainContentByAnima />
    </div>
  );
};