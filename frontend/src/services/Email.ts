import { AxiosInstance } from "axios";
import { ENDPOINTS } from "./constants";
import { Email, EmailInterface } from "./types";

export class EmailService implements EmailInterface {
  private apiInstance: AxiosInstance;

  constructor({ apiInstance }: { apiInstance: AxiosInstance }) {
    this.apiInstance = apiInstance;
  }

  async sendEmail(email: Email): Promise<any> {
    const endpoint = `${ENDPOINTS.EMAIL}`;
    const resp = await this.apiInstance.post(endpoint, {
      body: email.body,
      recipient: email.recipient,
    });
    return resp.data;
  }
}
