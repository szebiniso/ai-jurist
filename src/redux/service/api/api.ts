import Auth from "@/redux/service/api/auth";

class ApiService {
  public auth = new Auth();
}

export default new ApiService();
