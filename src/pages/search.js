import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

function search() {
  const router = useRouter();
  const { query } = router.query;

  const [recipeList, setRecipeList] = useState([]);

  const searchRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    );
    setRecipeList(response.data.hits);
  };

  useEffect(() => {
    if (query != '') {
      searchRecipe();
    }
  }, [query]);
  return (
    <div>
      <Header placeholder={`${query}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <div className="flex flex-wrap gap-5 p-8 justify-evenly">
            {recipeList.length &&
              recipeList.map((recipeObj) => (
                <InfoCard recipeObj={recipeObj.recipe} />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default search;
