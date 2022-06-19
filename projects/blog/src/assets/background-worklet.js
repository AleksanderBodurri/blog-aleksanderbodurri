class Dots {
  paint(ctx, size, properties) {
    const width = size.width;
    const height = size.height;

    for (let i = 0; i < 10; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);

      this._drawDot(ctx, x, y);
    }
  }

  generateRandomColor() {
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  _drawDot(ctx, x, y) {
    const radiusCircle = 0.75;
    ctx.beginPath();
    ctx.arc(x, y, radiusCircle, 0, 2 * Math.PI);
    ctx.fillStyle = "#232323";
    ctx.fill();
  }
}

registerPaint("dots", Dots);
