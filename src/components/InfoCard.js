import Image from 'next/image';
import { useState } from 'react';
function InfoCard({ recipeObj }) {
  const [ingredientsModal, setIngredientsModal] = useState(false);
  return (
    // <div className="flex flex-col gap-5 p-10 transition duration-200 ease-out rounded-lg shadow-lg w-80 hover:shadow-lg ">
    <div className="flex flex-col p-3 shadow-lg w-80">
      <div className="relative flex-shrink-0 h-52">
        <Image
          src={recipeObj.image}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <span className="text-lg font-bold my-2.5 text-center">
        {recipeObj.label}
      </span>
      <button
        onClick={() => setIngredientsModal(true)}
        className="text-lg mb-3 py-2.5 px-4 rounded text-green-600 border-green-600 border"
      >
        Indgrendients
      </button>
      <button
        onClick={() => window.open(recipeObj.url)}
        className="text-lg  py-2.5 px-4 rounded text-red-600 border-red-600 border"
      >
        See complete recipie
      </button>
      {ingredientsModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-2xl font-semibold">{recipeObj.label}</h3>
                </div>
                <div className="relative flex-auto p-4 overflow-y-scroll h-80 scrollbar-hide">
                  <table className="mx-4">
                    <thead>
                      <th>Ingredients</th>
                      <th>Weight</th>
                    </thead>
                    <tbody>
                      {recipeObj.ingredients.map((item) => (
                        <tr>
                          <td>{item.text}</td>
                          <td className="text-right">
                            {parseFloat(item.weight).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="p-3 m-1 text-sm font-bold text-green-600 uppercase transition-all duration-150 ease-linear border border-green-600 rounded-md outline-none background-transparent focus:outline-none hover:bg-green-200"
                    type="button"
                    onClick={() => window.open(recipeObj.url)}
                  >
                    Recipe
                  </button>
                  <button
                    className="p-3 m-1 text-sm font-bold text-red-600 uppercase transition-all duration-150 ease-linear border border-red-600 rounded-md outline-none background-transparent focus:outline-none hover:bg-red-200"
                    type="button"
                    onClick={() => setIngredientsModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      )}
    </div>
  );
}

export default InfoCard;
