export default function yearsAgo(year) {
    var cYear= new Date();
    return (cYear.getFullYear()-year);
  }