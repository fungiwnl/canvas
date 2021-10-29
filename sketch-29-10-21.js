const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 10;
    const numCells = cols * rows

    const gridw = width * 0.8
    const gridh = height * 0.8
    const cellw = gridw / cols
    const cellh = gridh / rows 
    const margx = (width - gridw) * 0.5
    const margy = (height - gridh) * 0.5

    for (let i = 0; i < numCells; i++) {
      const col =  i % cols
      const row = Math.floor(i / cols)

      const x = (col * cellw) + (margx) + (cellw * 0.5)
      const y = (row * cellh) + (margy) + (cellh * 0.5)
      const w = cellw * 0.8
      const h = cellh * 0.8 

      //Draw
      context.save()
      context.translate(x, y)

      context.lineWidth = 4

      context.beginPath()
      context.moveTo(w * -0.5, 0)
      context.lineTo(w * 0.5, 0)
      context.stroke()

      context.restore()
    }
  };
};

canvasSketch(sketch, settings);
