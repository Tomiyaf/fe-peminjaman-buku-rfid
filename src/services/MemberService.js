import api from "../lib/axios";

const base = "/members";

class MemberService {
  async createMember({
    name,
    memberId,
    rfidTagId 
  }) {
    try {
      const res = api.post(
        `${base}`,
        { 
          name: name, 
          memberId: memberId, 
          rfidTagId: rfidTagId 
        }
      );
      return (await res).data;
    } catch (e) {
      console.error(e);
    }
  }

  async updateMember({
    id,
    name,
    memberId
  }) {
    try {
      const res = api.put(
        `${base}/${id}`,
        {
          ...(name != null && { name: name }),
          ...(memberId != null && { memberId: memberId })
        }
      );
      return (await res).data;
    } catch (e) {
      console.error(e);
    }
  }

  async getMembers() {
    try {
      return (await api.get(`${base}`)).data;
    } catch (e) {
      console.error(e);
    }
  }

  async getMemberById(id) {
    try {
      return (await api.get(`${base}/${id}`)).data;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteMember(id) {
    try {
      return (await api.delete(`${base}/${id}`)).data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new MemberService();