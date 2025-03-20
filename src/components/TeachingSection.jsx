import {ways} from "../data";
import WayToTeach from "./WayToTeach";
export default function TeacingSection() {
    return (
        <section>
            <h3>Наш подход к обучению </h3>
            <ul>
                {ways.map((item, index) => <WayToTeach key={index} {...item} />)}
            </ul>
        </section>
    )
}