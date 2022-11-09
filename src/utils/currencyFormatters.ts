export function rubFormat(num: number) {
  return new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
  }).format(num)
}
