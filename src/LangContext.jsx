import React from "react";

const LangContext = React.createContext("pl");
export const LangProvider = LangContext.Provider;
export default LangContext;
