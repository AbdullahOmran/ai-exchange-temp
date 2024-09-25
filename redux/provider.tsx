"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import CustomTheme from "@/components/CustomTheme";

export default function Providers({children, ...Props}:{children: React.ReactNode}){
    return(
        <Provider store={store}>
            <CustomTheme>
            {children}
            </CustomTheme>
        </Provider>
    );
}