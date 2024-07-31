export default function transportFee(shift) {
    if (shift.includes('morning')) {
      return 'R20';
    } else if (shift.includes('afternoon')) {
      return 'R10';
    } else {
      return 'free';}
  }