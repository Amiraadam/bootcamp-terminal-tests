export default function (string,regnum) {
    let reg=string.split(',');
    let count=0;
        for (let i=0 ; i<reg.length ; i++) {
           if (reg[i].includes(regnum)) {
             count = count + 1;
             //count++ (its the same)
           }
        }
    return count;
  }