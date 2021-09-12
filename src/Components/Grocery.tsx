import React from 'react'
import {filterForProductsType} from "../App";

type productsPropsType = {
    id: number
    title: string
    isVegetable: boolean
}

type PropsType = {
    product: Array<productsPropsType>
    name: string
    deleteProduct: (productId: number) => void
    changeProductFilter: (filterProductsValue: filterForProductsType) => void
}


export const Grosery = (props: PropsType) => {
    return (
        <div>
            <h2>{props.name}</h2>

            <ul>
                {props.product.map(p => {
                    return (
                        <li key={p.id}>
                            <button onClick={() => props.deleteProduct(p.id)}>x</button>
                            <input type="checkbox" checked={p.isVegetable}/>
                            <span>{p.title}</span>
                        </li>
                    )
                })}
            </ul>



                    <button onClick={() => props.changeProductFilter('All')}>All</button>
                    <button onClick={() => props.changeProductFilter('Vegetables')}>Vegetables</button>
                    <button onClick={() => props.changeProductFilter('Fruits')}>Fruits</button>
                </div>
                )
                }