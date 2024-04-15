import React from "react";
import Lottie from "lottie-react";
import Donation from "../../assets/donation.json";
import useAxios from "../../hooks/useAxios";
const AddFood = () => {
  const axios = useAxios();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const email = users?.email;
    // const user_photo = users?.photoURL;
    // const user_name = users?.displayName;
    const email = "likhon@gmail.com";
    const user_photo = "dklsafjdsf";
    const user_name = "Likhon";
    const status = form.status.value;
    const category = form.food_category.value;
    const additional_notes = form.notes.value;
    const expire_date = form.expire.value;
    const location = form.location.value;
    const quantity = form.quantity.value;
    const food_name = form.food_name.value;
    const food_photo = form.food_photo.value;
    const submitInfo = {
      user_name,
      user_photo,
      status,
      additional_notes,
      expire_date,
      location,
      quantity,
      name: food_name,
      image: food_photo,
      category,
    };
    axios.post("/food", submitInfo).then((data) => {
      if (data.data.affectedRows) {
        console.log(data.data);
        form.reset();
      }
    });
  };
  return (
    <div className=" my-24 min-h-screen flex flex-col lg:flex-row justify-between items-center gap-20 mx-20">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500  w-1/2 mx-auto py-20 rounded-lg">
        <h2 className="text-center text-white text-4xl font-bold mb-4">
          {" "}
          Add Your Food
        </h2>
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto  ">
          <div className="form-control">
            <label className="label">
              <span className="text-white">Food Name</span>
            </label>
            <input
              type="text"
              placeholder=" Food Name"
              name="food_name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Food Photo</span>
            </label>
            <input
              type="text"
              placeholder="Food Photo"
              name="food_photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Food Category</span>
            </label>
            <input
              type="text"
              placeholder="Food Category"
              name="food_category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Food Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Food Quantity"
              name="quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Pickup Location</span>
            </label>
            <input
              type="text"
              placeholder="Pickup Location"
              name="location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Expire Date</span>
            </label>
            <input
              type="text"
              placeholder="Expire Date"
              name="expire"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Additional Notes</span>
            </label>
            <input
              type="text"
              placeholder="Additional Notes"
              className="input input-bordered"
              name="notes"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Status</span>
            </label>
            <input
              type="text"
              placeholder="Status"
              name="status"
              defaultValue="Available"
              className="input input-bordered"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Your Photo</span>
            </label>
            <input
              type="text"
              placeholder="Your Photo"
              name="user_photo"
              className="input input-bordered"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Your Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              readOnly
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-none"
            >
              Add Food
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <Lottie animationData={Donation} loop={false}></Lottie>
      </div>
    </div>
  );
};

export default AddFood;
