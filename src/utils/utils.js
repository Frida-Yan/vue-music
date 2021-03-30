export const splitStr = ({ str = "", num }) => {
  if (!str) return str
  let curStr = str.substr(0, num)
  console.log(curStr)
  return curStr
}
