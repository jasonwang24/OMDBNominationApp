import { AxiosInstance } from "axios";
import { ENDPOINTS } from "./constants";
import { serializeNomination } from "./serializers";

import { Movie, NominationInterface } from "./types";

export class NominationService implements NominationInterface {
  private apiInstance: AxiosInstance;

  constructor({ apiInstance }: { apiInstance: AxiosInstance }) {
    this.apiInstance = apiInstance;
  }

  async submitNomination(movie: Movie): Promise<any> {
    const data = serializeNomination(movie);
    const endpoint = `${ENDPOINTS.NOMINATIONSUBMISSION}`;
    const resp = await this.apiInstance.post(endpoint, data);
    return resp.data;
  }

  async checkUserExists(email: string): Promise<any> {
    const endpoint = `${ENDPOINTS.CHECKUSER}`;
    const resp = await this.apiInstance.post(endpoint, { email: email });
    return resp;
  }

  async storeUser(email: string): Promise<any> {
    const endpoint = `${ENDPOINTS.USERSTORE}`;
    const resp = await this.apiInstance.post(endpoint, { email: email });
    return resp.data;
  }

  async getRankings(): Promise<any> {
    const endpoint = `${ENDPOINTS.RANKINGS}`;
    const resp = await this.apiInstance.get(endpoint);
    return resp.data;
  }
}
