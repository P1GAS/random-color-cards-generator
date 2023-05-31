import "./App.css";
import ColorCardsList from "./ColorCardsList";
import { useDispatch } from "react-redux";
import { deleteLastColor, generateNewColor } from "./feautres/colorsList";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="buttons-container">
        <button className="button" onClick={() => dispatch(generateNewColor())}>
          Добавить
        </button>
        <button className="button" onClick={() => dispatch(deleteLastColor())}>
          Удалить
        </button>
      </div>

      <ColorCardsList />
    </div>
  );
};

export default App;
