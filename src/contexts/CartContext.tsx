import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";

interface CartContextProps {
    produtos: Produto[];
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
  }

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: CartProviderProps) => {

    const [produtos, setProdutos] = useState<Produto[]>([] as Array<Produto>)
    return (<CartContext.Provider value={{ produtos, setProdutos }}>{children}</CartContext.Provider>)
}