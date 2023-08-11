import satData from "./satData";

//const Buttons = (filterByType, setSat, displaySats = ["low","medium","high"]) => {
//const Buttons = ({filterByType, setSat, displaySats}) => {
  const Buttons = props => {
    const displaySats = props.displaySats;
    const filterByType = props.filterByType;
    const setSat = props.setSat;
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>  
  );
};

export default Buttons;