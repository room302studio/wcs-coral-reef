import * as d3 from "d3";

function contrastTextColor(backgroundColor) {
  if (!backgroundColor) return "#000000";
  // turn the bg color into a d3 color so we can do color math
  const d3Color = d3.color(backgroundColor);
  const colorHsl = d3.hsl(d3Color);

  // figure out if the bg is light or dark based on our threshold
  const threshold = 0.6;

  // use d3 hsl to get the lightness
  // const lightness = colorHsl.l;
  const lightness = yiq(backgroundColor);

  // console.log('lightness', lightness, threshold)

  // if the lightness is above our threshold, return an extremely darkened version of the color
  if (lightness > threshold) {
    return "black"; //d3Color.darker(10);
  } else {
    return "white";
  }
}

class Noise {
  static lerp(t, a, b) {
    return a + t * (b - a);
  }
  static grad2d(i, x, y) {
    const v = (i & 1) === 0 ? x : y;
    return (i & 2) === 0 ? -v : v;
  }
  constructor(octaves = 1) {
    this.p = new Uint8Array(512);
    this.octaves = octaves;
    this.init();
  }
  init() {
    for (let i = 0; i < 512; ++i) {
      this.p[i] = Math.random() * 256;
    }
  }
  noise2d(x2d, y2d) {
    const X = Math.floor(x2d) & 255;
    const Y = Math.floor(y2d) & 255;
    const x = x2d - Math.floor(x2d);
    const y = y2d - Math.floor(y2d);
    const fx = (3 - 2 * x) * x * x;
    const fy = (3 - 2 * y) * y * y;
    const p0 = this.p[X] + Y;
    const p1 = this.p[X + 1] + Y;
    return Noise.lerp(
      fy,
      Noise.lerp(
        fx,
        Noise.grad2d(this.p[p0], x, y),
        Noise.grad2d(this.p[p1], x - 1, y)
      ),
      Noise.lerp(
        fx,
        Noise.grad2d(this.p[p0 + 1], x, y - 1),
        Noise.grad2d(this.p[p1 + 1], x - 1, y - 1)
      )
    );
  }
  noise(x, y) {
    let e = 1,
      k = 1,
      s = 0;
    for (let i = 0; i < this.octaves; ++i) {
      e *= 0.5;
      s += e * (1 + this.noise2d(k * x, k * y)) / 2;
      k *= 2;
    }
    return s;
  }
}

function* samples([min, max], n, k = 30) {
  if (!(max > min)) throw new Error("max > min");
  let width = max - min;
  let radius = width / (n * 1.5);
  let R = 3 * radius;
  let cellSize = radius * Math.SQRT1_2;
  let gridWidth = Math.ceil(width / cellSize);
  let grid = new Array(gridWidth);
  let queue = [];
  let queueSize = 0;
  let sampleSize = 0;

  function far(x) {
    const i = x / cellSize | 0;
    const i0 = Math.max(i - 2, 0);
    const i1 = Math.min(i + 3, gridWidth);
    for (let i = i0; i < i1; ++i) {
      const s = grid[i];
      if (s) {
        const dx = s - x;
        if (Math.abs(dx) < radius) return false;
      }
    }
    return true;
  }

  function sample(x) {
    queue.push(x);
    grid[x / cellSize | 0] = x;
    ++sampleSize;
    ++queueSize;
    return x + min;
  }

  yield sample(Math.random() * width);

  sampling: while (queueSize) {
    let i = Math.random() * queueSize | 0;
    let s = queue[i];
    for (let j = 0; j < k; ++j) {
      let r = Math.random();
      let x = s + (r < 0.5 ? -1 : +1) * (radius + Math.random() * radius);
      if (0 <= x && x < width && far(x)) {
        yield sample(x);
        continue sampling;
      }
    }
    queue[i] = queue[--queueSize];
    queue.length = queueSize;
  }
}

export { contrastTextColor, Noise, samples };
