import api from "../lib/axios";

const base = "/pengunjung";

class PengunjungService {
  async getPengunjung() {
    try {
      return (await api.get(`${base}`)).data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new PengunjungService();