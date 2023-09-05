import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

function Selector({ options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected !== option)
    );
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Options
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOptions.includes(option) ? (
                <span>
                  &#x2713; {option}{" "}
                  <span
                    className="remove-option"
                    onClick={() => handleRemoveOption(option)}
                  >
                    &#x2715;
                  </span>
                </span>
              ) : (
                option
              )}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div>
        <strong>Selected Options:</strong>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Selector;
