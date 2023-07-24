// All your functions must be exported
export function taskFirst() {
  // function taskFirst to instantiate variables using const
  const task = 'I prefer const when I can.';
  return task;
}

// Exporting function getLast
export function getLast() {
  return ' is okay';
}

// All your functions must be exported
export function taskNext() {
  // function taskNext to instantiate variables using let
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}


