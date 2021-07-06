import airtable from "airtable";

class AirTableApi {
  BASE_URL: string = "https://api.airtable.com";
  API_KEY: string = "keyQlx3ioPDZRaY3f";
  base: any;

  constructor(baseName: string) {
    airtable.configure({
      apiKey: this.API_KEY,
      endpointUrl: this.BASE_URL,
    });
    this.base = airtable.base(baseName);
  }

  createUser = async (user: any) => {
    return await this.base("users").create(user);
  };
  minifyRecord(rawRecord: any) {
    return {
      id: rawRecord.id,
      ...rawRecord.fields,
    };
  }
}

export const airTableApi = new AirTableApi("appq9ZBcHyssN1tCO");
