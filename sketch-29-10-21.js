const canvasSketch = require('canvas-sketch')
const random = require('canvas-sketch-util/random')
const math =  require('canvas-sketch-util/math')

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
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

      //Noise
      const n = random.noise2D(x + frame * 10, y, 0.001)
      const angle = n * Math.PI * 0.2 //negative -180 to 180
      const scale =  math.mapRange(n, -1, 1, 1 ,25)

      //Draw
      context.save()
      context.translate(x, y)
      context.rotate(angle)

      context.lineWidth = scale

      context.beginPath()
      context.moveTo(w * -0.5, 0)
      context.lineTo(w * 0.5, 0)
      context.stroke()

      context.restore()
    }
  };
};

canvasSketch(sketch, settings);
