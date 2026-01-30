import './filterstatus.css'
const FilterStatus = ({  setFilterStatus,filterStatus }) => {

  return (
    <>
      <div className='filter-container'>
        <label htmlFor="option">Apply Filter</label>
        <select
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus( prev => e.target.value);
          }}
          id="option"
        >
          <option value="" disabled>
            All
          </option>
          <option value="waiting">Waiting</option>
          <option value="serving">Serving</option>
          <option value="complete">Completed</option>
        </select>
      </div>
    </>
  );
};

export default FilterStatus;
