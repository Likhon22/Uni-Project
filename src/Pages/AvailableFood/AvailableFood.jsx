import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [];
        const uniqueFoods = data.filter((food) => {
          if (!uniqueCategories.includes(food.category)) {
            return uniqueCategories.push(food.category);
          }
        });
        setFoods(uniqueFoods);
      });
  }, []);
  return (
    <div className="w-1/2 mx-auto my-24 grid grid-cols-2 gap-12">
      {foods.map((food) => (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[300px] w-full"
                src={food.categoryImg}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-2xl font-bold text-black mb-4 uppercase text-center">
                {food.category}
              </h2>

              <div className="card-actions justify-end">
                <Link to={`/categoryFood/${food.category}`}>
                  <button className="btn btn-primary">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableFood;
