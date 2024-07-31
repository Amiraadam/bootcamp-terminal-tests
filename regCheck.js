export default function regCheck(number, province) {
    if (number.endsWith(province)) {
      return true;
    } else { 
      return false;
    }
  }