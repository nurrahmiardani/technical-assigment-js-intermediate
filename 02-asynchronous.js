const isR18Plus = ( age ) => { 
    return new Promise((resolve, reject) => {
      if (age > 18){
        resolve ("anda sudah dewasa")
      } else{
        reject ("anda belum dewasa")
      }
    })
 }
const printR18Plus = async () => {
  try {
    const underAge = await isR18Plus(10);
    const properAge = await isR18Plus(19);

    console.log(underage);
    console.log(properAge);
  } catch (e) {
      console.log(e)
  }
  
}

printR18Plus();
