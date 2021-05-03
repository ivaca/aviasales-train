import "./filter.styles.scss";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/filter/filter.actions";

function Filter({ changeFilter }) {
  const filters = [
    { filter: "all", text: "Все" },
    { filter: "none", text: "Без пересадок" },
    { filter: "one", text: "1 пересадка" },
    { filter: "two", text: "2 пересадки" },
    { filter: "three", text: "3 пересадки" },
  ];
  const handleClick = (e) => {
    changeFilter(e.target.getAttribute("data-filter"));
  };
  return (
    <div className="filter">
      <span>Количество пересадок</span>
      <ul>
        {filters.map((filter, i) => (
          <li key={i + i * 5}>
            <label>
              <input
                type="checkbox"
                data-filter={filter.filter}
                onClick={handleClick}
              />
              {filter.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(null, mapDispatchToProps)(Filter);
