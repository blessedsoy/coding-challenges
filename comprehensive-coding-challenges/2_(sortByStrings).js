const sortByStrings = (s, t) => {
  return s.split('').sort((a, b) => t.indexOf(a) - t.indexOf(b)).join('');
}
