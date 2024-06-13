import React from "react";

import { housesData } from "../data";
import { Link, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex lg:flex-row flex-col gap-5 my-5 lg:justify-between items-start lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold ">{house.name}</h2>
            <h3>{house.address}</h3>
          </div>
          <div className="flex gap-5 items-center text-sm">
            <div className="bg-green-500 rounded-full text-white px-3 py-1">
              {house.type}
            </div>
            <div className="bg-violet-700 rounded-full text-white px-3 py-1">
              {house.country}
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-violet-700">
              ${house.price}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="flex-[2.3] flex flex-col justify-start items-start gap-y-5 lg:gap-y-7 w-full">
            <div className="w-full">
              <img className="w-full" src={house.imageLg} alt="" />
            </div>
            <div className="text-violet-800 text-lg flex gap-3 items-center">
              <div className="flex items-center gap-1"><BiBed size={21}/>{house.bedrooms}</div>
              <div className="flex items-center gap-1"><BiBath size={21}/>{house.bathrooms}</div>
              <div className="flex items-center gap-1"><BiArea size={21}/>{house.surface}</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odio consequatur blanditiis magnam earum officia praesentium minus
              inventore dignissimos dicta sint impedit esse nobis magni nisi,
              saepe culpa voluptate quod perferendis quaerat ipsum eius ad
              soluta. Sequi et quae tempora saepe temporibus. Laborum eaque,
              exercitem ex suscipit hic pariatur qui ut vitae
            </div>
          </div>
          <div className="flex-1 border rounded-lg w-full ">
            <div className="mx-5 my-7 flex flex-col gap-y-5">
              {/* agent */}
              <div className="flex items-center gap-4 mb-2">
                <img className="w-20 p-1 border rounded-full" src={house.agent.image} alt="" />
                <div>
                  <h6 className="text-lg font-semibold">{house.agent.name}</h6>
                  <Link to='' className="text-sm text-violet-700">View listings</Link>
                </div>
              </div>
              {/* form */}
              <form action="" className="flex flex-col gap-y-4">
                <input className="border rounded-md border-gray-200 p-3" type="text" name="name" placeholder="Name*" />
                <input className="border rounded-md border-gray-200 p-3 " type="text" name="email" placeholder="Email*" />
                <input className="border rounded-md border-gray-200 p-3 " type="text" name="Phone" placeholder="Phone*" />
                <textarea className="border rounded-md border-gray-200 p-3" name="description" id="descrition" placeholder="Message*" cols='5' rows={6} ></textarea>
              </form>
              {/* button */}
              <div className="flex justify-between items-center gap-3 text-sm">
                <button className="bg-violet-700 rounded-md py-4 text-white w-full">Send Message</button>
                <button className="rounded-md border border-black/30 w-full py-4">Call</button>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default PropertyDetails;
