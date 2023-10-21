function AddComma(numberAddComma: number,array: string[],decimalValue:number){
    function GetDotAndElementAfterDot(arr: any[]){
      const arrayLength = arr.length;
      const index = arr.indexOf(".");
      if (index !== -1) {
          let targetArray = arr.slice(index, arrayLength);
          if((decimalValue + 1) > targetArray.length){
              const numberLacks = (decimalValue + 1) - targetArray.length;
              for(let i=0 ;i<numberLacks; i++){
                targetArray.push("0");
              }
          }
          return targetArray;
      }
      let injectArray = ["."];
      for(let i=0 ;i<(decimalValue); i++){
          injectArray.push("0")
      }
      return injectArray;
    };
  
    const dotAndElementAfterDot:any[] = GetDotAndElementAfterDot(array);
    // console.log('dotAndElementAfterDot',dotAndElementAfterDot);
    function AddCommaForInteger(numberInteger: number){
      const integer = Math.floor( numberInteger) ;
      const integerPartString = integer.toString();
      const integerPartArray = integerPartString.split('');
    
      const newArray = [];
      const reverseArray = integerPartArray.reverse();
      for (let i = 0; i < integerPartArray.length; i++) {
        if (i > 0 && i % 3 === 0) {
          newArray.push(',');
        }
        newArray.push(Number(reverseArray[i]));
      }
      return newArray.reverse();
    }
    const arrayInteger: any[] = AddCommaForInteger(numberAddComma);
    const newArray = [...arrayInteger,...dotAndElementAfterDot]
    // console.log('newArray',newArray);
    return newArray;
  }

export default AddComma;