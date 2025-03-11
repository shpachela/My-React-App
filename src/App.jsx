import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import {ways, differences} from "./data";
import Button from "./components/Button/Button";
import {useState} from "react";



export default function App() {
  const [ContentTyape, setContentType ] = useState(null)
  function handlCliclk (type) {
    setContentType(type)
}

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению </h3>
          <ul>
            <WayToTeach {...ways[0]}/>
            <WayToTeach {...ways[1]}/>
            <WayToTeach {...ways[2]}/>
            <WayToTeach {...ways[3]}/>
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button isActive={ContentTyape === 'way'} onClick={() => handlCliclk('way')}>Подход</Button>
          <Button isActive={ContentTyape === 'easy'} onClick={() => handlCliclk('easy')}>Доступность</Button>
          <Button isActive={ContentTyape === 'program'} onClick={() => handlCliclk('program')}>Концентрация</Button>

          {/* {!ContentTyape ? <p>Нажми на кнопку</p> : null}
          {ContentTyape ? <p>{differences[ContentTyape]}</p> : null} */}

          {!ContentTyape && <p>Нажми на кнопку</p>}
          {ContentTyape && <p>{differences[ContentTyape]}</p>}

          
        </section>
      </main>
    </div>
  );
}
