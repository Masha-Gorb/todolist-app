import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type AddItemFormPropsType = {
    addItem: (title: string) => void
}

//обернули компоненту ХОКом Реакт.мемо
//обращаем внимание на то что приходит в пропсах. в нашем случае это коллбек
//используем хук useCallback который запоминает функцию - если приходит одна и та же не запускает перерисовку
//идем в то место, где эта функция находится и оборачиваем в useCallback
//массив зависимостей в useCallback зависит от пропсов иил dispatch
export const AddItemForm = React.memo ((props: AddItemFormPropsType) =>  {
    console.log('Add Item form component')

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    //избегаем перерисовок начало 11 урока
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(error !== null) {
            setError(null)
        }
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        />
        <button onClick={addItem}>+</button>

        {error && <div className="error-message">{error}</div>}
    </div>
} )
