import React, { createContext } from "react";
import { Dimensions } from "react-native";

export const MainContext = createContext({});

export const sharedState = {
  screen: Dimensions.get('screen')
};