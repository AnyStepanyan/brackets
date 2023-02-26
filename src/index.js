module.exports = function check(str, bracketsConfig) {
let result = true
  let newBracketsConfig = bracketsConfig.map((val) => {
    return `${val[0]}${val[1]}`
  });

  let initialStrLength = str.length

  while (str.length) {
    newBracketsConfig.forEach((val) => {
      str = str.replaceAll(val, "")
    })
    
    if (str.length === initialStrLength) {
    return result = false
    }
  }
  return result
}
