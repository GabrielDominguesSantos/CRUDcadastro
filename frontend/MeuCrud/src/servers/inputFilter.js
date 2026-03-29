export default function inputFilter(people, searchText, setList) {
    
  const search = searchText || ''; 

  if (search.trim() === '') {
    setList(people);
  } else {
    const textLower = search.toLowerCase();

    const filtered = people.filter(item => {
      const fName = (item.firstName ?? '').toLowerCase();
      const lName = (item.lastName ?? '').toLowerCase();
      return fName.includes(textLower) || lName.includes(textLower);
    });

    setList(filtered);
  }
}