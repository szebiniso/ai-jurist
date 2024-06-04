import { client } from "@/redux/service/axios";
import { Consultation } from "@/shared/types/aijusrist";

const CONSULTATIONS = "consultations/consultations/";

class Consultations {
  getConsultationsList() {
    return client.get<Consultation[]>(CONSULTATIONS);
  }
  addConsultation(data: Pick<Consultation, "lawyer" | "description">) {
    return client.post<Consultation>(CONSULTATIONS, data);
  }
}

export default Consultations;
