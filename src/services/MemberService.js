import api from "../lib/axios";

const base = "/members";

class MemberService {
  async createMember({
    name,
    memberId,
    rfidTagId 
  }) {
    return api.post(
      `${base}`,
      { 
        name: name, 
        memberId: memberId, 
        rfidTagId: rfidTagId 
      }
    );
  }

  async updateMember({
    id,
    name,
    memberId
  }) {
    return api.put(
      `${base}/${id}`,
      {
        ...(name != null && { name: name }),
        ...(memberId != null && { memberId: memberId })
      }
    );
  }

  async getMembers() {
    return api.get(`${base}`);
  }

  async getMemberById(id) {
    return api.get(`${base}/${id}`);
  }
}