import React, { useState } from 'react';

function Filters({ onApplyFilters, onResetFilters }) {
  const [status, setStatus] = useState([]);
  const [owners, setOwners] = useState([]);
  const [attorneys, setAttorneys] = useState([]);
  const [lawFirms, setLawFirms] = useState([]);
  const [markDescription, setMarkDescription] = useState([]);
  const [classes, setClasses] = useState([]);
  const [states, setStates] = useState([]);
  const [counties, setCounties] = useState([]);

  const handleStatusChange = (e) => {
    const { value, checked } = e.target;
    setStatus(prev => checked ? [...prev, value] : prev.filter(item => item !== value));
  };

  const handleSelectChange = (e, setter) => {
    const { options } = e.target;
    const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
    setter(selectedOptions);
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      status,
      owners,
      attorneys,
      law_firms: lawFirms,
      mark_description: markDescription,
      classes,
      states,
      counties
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Filters</h3>
      
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Status:</label>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input type="checkbox" value="active" onChange={handleStatusChange} className="form-checkbox" />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input type="checkbox" value="inactive" onChange={handleStatusChange} className="form-checkbox" />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Owners:</label>
        <select multiple onChange={(e) => handleSelectChange(e, setOwners)} className="form-select">
          <option value="owner1">Owner 1</option>
          <option value="owner2">Owner 2</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Attorneys:</label>
        <select multiple onChange={(e) => handleSelectChange(e, setAttorneys)} className="form-select">
          <option value="attorney1">Attorney 1</option>
          <option value="attorney2">Attorney 2</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Law Firms:</label>
        <select multiple onChange={(e) => handleSelectChange(e, setLawFirms)} className="form-select">
          <option value="lawfirm1">Law Firm 1</option>
          <option value="lawfirm2">Law Firm 2</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Mark Description:</label>
        <select multiple onChange={(e) => handleSelectChange(e, setMarkDescription)} className="form-select">
          <option value="description1">Description 1</option>
          <option value="description2">Description 2</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Classes:</label>
        <select multiple onChange={(e) => handleSelectChange(e, setClasses)} className="form-select">
          <option value="class1">Class 1</option>
          <option value="class2">Class 2</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">States:</label>
        <select multiple onChange={(e) => handleSelectChange(e, setStates)} className="form-select">
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Counties:</label>
        <select multiple onChange={(e) => handleSelectChange(e, setCounties)} className="form-select">
          <option value="county1">County 1</option>
          <option value="county2">County 2</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleApplyFilters}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300"
        >
          Apply Filters
        </button>
        <button
          onClick={() => {
            setStatus([]);
            setOwners([]);
            setAttorneys([]);
            setLawFirms([]);
            setMarkDescription([]);
            setClasses([]);
            setStates([]);
            setCounties([]);
            onResetFilters();
          }}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
