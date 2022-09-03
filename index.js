let test = { 
    key4: 5,
    key1: false,
    key2: 0, 
    key3: true,
    key5: 12
}

const convert = object => {
  let final = []
  const toArr = Object.entries(object).sort()
  const keys = toArr.map(key => key[0])
  const values = toArr.map(value => value[1])
  
  final = [keys, values]
  console.log(final)
} 

convert(test)