import React, { Suspense } from "react";
import Appointment from "@/container/Appointment";

export default function Appointments() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Appointment />
    </Suspense>
  );
}
