/* eslint-disable no-bitwise */
import React, { memo, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const photoSize = 100;

const qrCodeImages = [
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
  "/video/dez.mp4",
];

const initPositions = [
  { x: 1, y: 1, dx: 1, dy: -1 },
  { x: 700, y: 200, dx: -1, dy: 1 },
  { x: 300, y: 100, dx: -1, dy: -1 },
  { x: 200, y: 650, dx: 1, dy: 1 },
  { x: 400, y: 200, dx: 1, dy: 1 },
  { x: 12, y: 450, dx: 1, dy: 1 },
  { x: 400, y: 200, dx: -1, dy: 1 },
  { x: 12, y: 450, dx: 1, dy: -1 },
  { x: 600, y: 50, dx: 1, dy: -1 },
  { x: 330, y: 330, dx: 1, dy: -1 },
  { x: 100, y: 100, dx: 1, dy: 1 },
];

const qrCode = {
  index: 0,
  x: 0,
  y: 0,
  dx: 1,
  dy: 1,
  vx: 1.5,
  vy: 1,

  init(image, number) {
    this.x = initPositions[number].x;
    this.y = initPositions[number].y;
    this.dx = initPositions[number].dx;
    this.dy = initPositions[number].dy;
    const board = document.getElementById("drawboard");
    image.style.top = this.x;
    image.style.left = this.y;
    image.style.position = "absolute";
    board.appendChild(image);
    this.index = number;
  },
  draw(photoImg) {
    if (photoImg) {
      photoImg.style.top = `${this.x}px`;
      photoImg.style.left = `${this.y}px`;
    }
  },

  move(width, height) {
    this.x += this.vx * this.dx;
    this.y += this.vy * this.dy;
    if (this.x <= 0 || this.x + photoSize >= width) {
      this.dx *= -1;
    }

    if (this.y <= 0 || this.y + photoSize >= height) {
      this.dy *= -1;
    }
  },
};

const QRCodeBounce = () => {
  const qrCodeList = Array(qrCodeImages.length)
    .fill()
    .map(() => ({ ...qrCode }));

  const raf = useRef();
  const boradRef = useRef();

  useEffect(() => {
    const photoImages = Array(qrCodeImages.length)
      .fill()
      .map((item, index) => document.getElementById(`video-${index}`));

    function draw() {
      qrCodeList.forEach((item, index) => {
        qrCodeList[index].draw(photoImages[index]);
        qrCodeList[index].move(
          boradRef.current.clientWidth,
          boradRef.current.clientHeight
        );
      });
      raf.current = window.requestAnimationFrame(draw);
    }

    function init() {
      qrCodeList.forEach((item, index) =>
        qrCodeList[index].init(photoImages[index], index)
      );
      window.cancelAnimationFrame(raf.current);
      raf.current = window.requestAnimationFrame(draw);
    }

    init();
    return () => {
      window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div id="drawboard" ref={boradRef} className={styles.innerWrapper}>
        {qrCodeImages.map((video, index) => (
          <video
            autoPlay
            loop
            muted
            id={`video-${index}`}
            className={styles.video}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
};

export default memo(QRCodeBounce);
