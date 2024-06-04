import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/redux/service/api/api";
import { Consultation } from "@/shared/types/aijusrist";

export const getConsultationList = createAsyncThunk(
  "consultation/getConsultationList",
  async () => {
    try {
      const response = await api.consultation.getConsultationsList();
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addConsultation = createAsyncThunk(
  "consultation/addConsultation",
  async (data: Pick<Consultation, "lawyer" | "description">) => {
    try {
      const response = await api.consultation.addConsultation(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
