import Auth from "@/redux/service/api/auth";
import Users from "@/redux/service/api/users";
import Consultation from "@/redux/service/api/consultation";

class ApiService {
  public auth = new Auth();
  public users = new Users();
  public consultation = new Consultation();
}

export default new ApiService();
