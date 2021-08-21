const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortedHouse = houses[Math.floor(Math.random() * houses.length)];
  return sortedHouse;
};

export default sortingHat;
