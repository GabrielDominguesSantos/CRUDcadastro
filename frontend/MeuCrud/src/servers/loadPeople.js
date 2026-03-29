import { getPeople } from "./peopleCrud";


async function loadPeople(setPeople, setList){
    try {
      const data = await getPeople();
      const validData = data || [];
      setPeople(validData);
      setList(validData); 
    } catch (error) {
      console.error("Erro ao carregar pessoas:", error);
    }
}

export default loadPeople;