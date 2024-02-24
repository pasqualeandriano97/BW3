import React, { useEffect, useRef, useState } from "react";
import "../components/style/Dino.css";

function Dino() {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const jump = () => {
    if (!isGameOver && dinoRef.current) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        dinoRef.current.classList.remove("jump");
      }, 300);
    }
  };

  useEffect(() => {
    if (!isGameOver) {
      const handleCollision = setInterval(() => {
        if (dinoRef.current && cactusRef.current) {
          const dinoTop = parseInt(
            window.getComputedStyle(dinoRef.current).getPropertyValue("top")
          );
          const cactusLeft = parseInt(
            window.getComputedStyle(cactusRef.current).getPropertyValue("left")
          );

          if (cactusLeft < 70 && cactusLeft > -5 && dinoTop >= 50) {
            setIsGameOver(true);
            clearInterval(handleCollision);
          } else {
            setScore((prevScore) => prevScore + 1);
          }
        }
      }, 150);

      return () => clearInterval(handleCollision);
    }
  }, [isGameOver]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 32 || event.key === "ArrowUp") {
        jump();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isGameOver) {
      alert("Game Over! Your Score: " + score);
      setScore(0);
      setIsGameOver(false);
    }
  }, [isGameOver, score]);

  return (
    <div className="game bg-light">
      <div>Score: {score}</div>
      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
    </div>
  );
}

export default Dino;
