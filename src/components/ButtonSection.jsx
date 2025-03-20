
import { useState } from "react";
import Button from "./Button/Button";
import { differences } from "../data";
export default function ButtonSection() {
    const [ContentTyape, setContentType] = useState(null)
    function handlCliclk(type) {
        setContentType(type)
    }
    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>
            <Button isActive={ContentTyape === 'way'} onClick={() => handlCliclk('way')}>Подход</Button>
            <Button isActive={ContentTyape === 'easy'} onClick={() => handlCliclk('easy')}>Доступность</Button>
            <Button isActive={ContentTyape === 'program'} onClick={() => handlCliclk('program')}>Концентрация</Button>
            {!ContentTyape && <p>Нажми на кнопку</p>}
            {ContentTyape && <p>{differences[ContentTyape]}</p>}
        </section>
    )
}