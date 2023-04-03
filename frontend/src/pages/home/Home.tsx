import { Calendar } from "../../components/calendar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Calendar />
      <button className="add-movie">Adicionar</button>
    </div>
  )
}