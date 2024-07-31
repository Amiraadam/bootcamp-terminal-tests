export default function countAllPaarl(string) {
    let reg=string.split(',');
    let arr=[];
    for (let i=0 ; i<reg.length ; i++) {
               if (reg[i].includes('CJ')) {
                arr.push(reg[i]);
                }
    }
    return arr.length;
  }