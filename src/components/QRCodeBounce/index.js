/* eslint-disable no-bitwise */
import React, { memo, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const canvasWidth = 1000;
const canvasHeight = 1000;
const photoSize = 100;

const qrCodeImages = [
  "/images/homepage/qrcode.png",
  "/images/homepage/qrcode1.png",
  "/images/homepage/qrcode2.png",
  "/images/homepage/qrcode3.png",
  "/images/homepage/qrcode4.png",
  "/images/homepage/qrcode5.png",
  "/images/homepage/qrcode6.png",
  "/images/homepage/qrcode7.png",
  "/images/homepage/qrcode8.png",
  "/images/homepage/qrcode9.png",
  "/images/homepage/qrcode10.png",
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

  init(number) {
    this.x = initPositions[number].x;
    this.y = initPositions[number].y;
    this.dx = initPositions[number].dx;
    this.dy = initPositions[number].dy;
    this.index = number;
  },
  draw(ctx, photoImg) {
    if (photoImg) {
      // console.log('photoImg: '.)
      ctx.drawImage(photoImg, this.x, this.y, photoSize, photoSize);
      ctx.da;
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

  const canvasRef = useRef();
  const imagesRef = useRef([]);
  const raf = useRef();

  useEffect(() => {
    const photoImages = Array(qrCodeImages.length)
      .fill()
      .map(() => new Image(100, 100));
    imagesRef.current = Array(qrCodeImages.length)
      .fill()
      .map(() => false);

    photoImages.map((item, index) => {
      photoImages[index].src = qrCodeImages[index];
    });

    console.log("photoImages: ", photoImages);

    const canvasObj = canvasRef.current;
    const context = canvasObj ? canvasObj.getContext("2d") : null;

    function draw() {
      context.clearRect(0, 0, canvasObj.width, canvasObj.height);

      qrCodeList.forEach((item, index) => {
        if (imagesRef.current[index]) {
          qrCodeList[index].draw(context, photoImages[index]);
          qrCodeList[index].move(canvasObj.width, canvasObj.height);
        }
      });
      raf.current = window.requestAnimationFrame(draw);
    }

    function init() {
      qrCodeList.forEach((item, index) => qrCodeList[index].init(index));
      window.cancelAnimationFrame(raf.current);
      raf.current = window.requestAnimationFrame(draw);
    }

    if (context) {
      photoImages.map((image, index) => {
        image.onload = function () {
          imagesRef.current[index] = true;
        };
      });
      init();
    }
    return () => {
      window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef} />
    </div>
  );
};

export default memo(QRCodeBounce);
