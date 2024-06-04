"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header/page";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { getUser } from "@/redux/features/users/reducer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addConsultation } from "@/redux/features/consultation/reducer";

const Expert = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.user.currentUser.currentUser,
  );
  const [description, setDescription] = useState<string>("");

  const handleAddAppointmentToExpert = () => {
    const data = {
      lawyer: +id,
      description,
    };
    description.length && dispatch(addConsultation(data));
  };

  useEffect(() => {
    if (typeof id === "string") {
      dispatch(getUser(id));
    }
  }, []);

  return (
    <div className="bg-black h-screen">
      <Header />

      <div className="w-full flex flex-col items-center">
        <div className="flex gap-6 w-8/12">
          <div className="flex flex-col gap-4">
            <img
              className="w-[350px] h-[200] rounded-3xl"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="/"
            />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
            <button
              onClick={handleAddAppointmentToExpert}
              className="border-gray-400 p-4 bg-gray-400 rounded-xl"
            >
              Appointment
            </button>
          </div>

          <div className="text-gray-500 flex flex-col gap-2">
            <h3 className="text-white text-3xl">{currentUser?.first_name}</h3>
            <p className="text-gray-300 text-xl">
              {currentUser?.specialization}
            </p>
            <p className="text-gray-500">{currentUser?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
