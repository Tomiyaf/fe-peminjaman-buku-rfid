import api from "../lib/axios";

const base = "/transactions";

class TransactionService {
  async getTransactions() {
    try {
      return (await api.get(`${base}`)).data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new TransactionService();