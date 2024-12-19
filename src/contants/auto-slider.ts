type SliderNumber = number
export const SLIDERS: SliderNumber[] = [1, 2, 3]

const src = '/images/login/slide-'

export const sliderPaths = SLIDERS.map(n => `${src}${n}.webp`);
