const beep = process.argv.slice(2)


for (let val of beep){
  if ( beep.length === 0) {
  break;
  }
  else if (beep[val] !== Number && val < 0){
    break;
  }
  setTimeout(() => {
    process.stdout.write(val+'\x07' +'\n')
  }, (val * 1000))

} 

