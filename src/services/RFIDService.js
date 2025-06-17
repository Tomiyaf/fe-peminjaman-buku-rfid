import api from "../lib/axios";

const base = "/rfids";

class RFIDService {
  async getRFIDs() {
    try {
      return (await api.get(`${base}`)).data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAvailableRFIDs() {
    try {
      return (await api.get(`${base}/available`)).data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new RFIDService();
