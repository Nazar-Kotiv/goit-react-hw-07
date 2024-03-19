import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selector";

export default function SearchBox() {
  const dispatch = useDispatch();

  const serchForName = useSelector(selectNameFilter);

  const handleselectNameFilter = (evt) => {
    const newText = evt.target.value;
    dispatch(changeFilter(newText));
  };

  return (
    <div className={css.containerInput}>
      <p className={css.textInput}> Find contact by name</p>
      <input
        className={css.findInput}
        type="text"
        value={serchForName}
        onChange={handleselectNameFilter}
        placeholder="Find contact by name"
      />
    </div>
  );
}
