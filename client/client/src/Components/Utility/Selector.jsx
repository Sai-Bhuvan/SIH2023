import React, { useState } from "react";
import { Dropdown, Badge, Row, Col } from "react-bootstrap";

function Selector({
  parentAdder,
  parentRemover,
  setter,
  list,
  options,
  inputName,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const adder = (option) => {
    if (!selectedOptions.includes(option))
      setSelectedOptions([...selectedOptions, option]);
    parentAdder(setter, list, option);
  };
  const remover = (option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected !== option)
    );
    parentRemover(setter, list, option);
  };

  return (
    <Row className="mb-1 d-flex justify-content-center">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          select {inputName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item key={option} onClick={() => adder(option)}>
              {selectedOptions.includes(option) ? (
                <span>
                  &#x2713; {option}{" "}
                  <span
                    className="remove-option"
                    onClick={() => remover(option)}
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

      <Col className="mt-1">
        {list.map((option) => (
          <Badge bg="secondary mx-1">{option}</Badge>
        ))}
      </Col>
    </Row>
  );
}

export default Selector;
