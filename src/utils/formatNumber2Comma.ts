export default function formatNumber2Comma(num: number) {
  return new Intl.NumberFormat('de-DE').format(num)
}
