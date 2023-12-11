import React, { useState, useEffect } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { Container } from "./styles";

export function EvaluationField({ children, onlyView, data }) {
  const [dataHover, setDataHover] = useState(0);
  const [dataClick, setDataClick] = useState(0);

  function handleOnClick(data) {
    if (data === dataClick) {
      setDataClick(0);
    } else {
      setDataClick(data);
    }
  }

  function handleOnMouseEnter(data) {
    setDataHover(data);
  }

  function handleOnMouseLeave() {
    setDataHover(0);
  }

  useEffect(() => {
    data && setDataClick(data)
  }, [])

  return (
    <Container>
      {children.map((star, index) => (
        <li
          key={index}
          onClick={!onlyView ? () => handleOnClick(star.props.data) : null}
          onMouseEnter={!onlyView ? () => handleOnMouseEnter(star.props.data) : null}
          onMouseLeave={!onlyView ? handleOnMouseLeave : null}
        >
          {star.props.data <= dataHover || (star.props.data <= dataClick && star.props.data > 0) ? (
            <IoStar />
          ) : (
            <IoStarOutline />
          )}
        </li>
      ))}
    </Container>
  );
}
