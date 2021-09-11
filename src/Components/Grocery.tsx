import React from 'react'

type productsPropsType = {
    id: number
    title: string
    isBought: boolean
}

type PropsType = {
    product: Array<productsPropsType>
    name: string
    deleteProduct: (productId: number) => void
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
                            <input type="checkbox" checked={p.isBought}/>
                            <span>{p.title}</span>
                        </li>
                    )
                })}
            </ul>

                    <button>All</button>
                    <button>Vegetables</button>
                    <button>Fruits</button>
                </div>
                )
                }