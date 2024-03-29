import { Link, useLoaderData } from "react-router-dom";
const CategoryFood = () => {
  const foods = useLoaderData();

  return (
    <div className="py-24 w-11/12 mx-auto min-h-screen">
      {foods.length > 0 && (
        <div>
          <div>
            <h2 className="capitalize text-4xl  font-bold mb-12  text-center">
              All the available foods are here
            </h2>
          </div>

          <div className="flex justify-end  mb-8 "></div>
          <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 min-h-screen  ">
            {foods &&
              foods.map((food) => (
                <div className=" w-full  bg-base-100 shadow-xl h-full flex flex-col justify-between ">
                  <figure>
                    <img
                      className="w-full h-[300px]"
                      src={food.food_photo}
                      alt={food.food_name}
                    />
                  </figure>

                  <div className="card-body space-y-1">
                    <div>
                      <p className="font-medium text-lg">Donated By:</p>

                      <div className="flex items-center flex-col justify-center gap-1 ">
                        <img
                          className="w-[40px] h-[40px] rounded-full"
                          src={food.user_photo}
                          alt={food.user_name}
                        />
                        <h3 className="capitalize">{food.user_name}</h3>
                      </div>
                    </div>
                    <h2 className="text-2xl text-center mb-2 font-bold">
                      {food.food_name}
                    </h2>

                    <p>
                      <span className="font-bold">Location:</span>
                      {food.location}
                    </p>
                    <p>
                      <span className="font-bold">Expire Date:</span> In{" "}
                      {food.expire_date} days
                    </p>
                    <p>
                      <span className="font-bold">Quantity: </span> For{" "}
                      {food.quantity} people
                    </p>

                    <p>
                      <span className="font-bold">Additional Notes: </span>
                      {food.additional_notes}
                    </p>
                    <div className="card-actions justify-center mt-4">
                      {food?.new_status == "Delivered" ? (
                        <button
                          onClick={handleDelivered}
                          className="btn  bg-gray-500 hover:bg-gray-400 text-white"
                        >
                          Deliverd
                        </button>
                      ) : (
                        <Link to={`/details/${food._id}`}>
                          <button className="btn btn-accent mt-4 text-white">
                            View Details
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFood;
