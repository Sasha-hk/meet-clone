export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const randomBoolean = () => {
  return !Math.round(Math.random())
}
