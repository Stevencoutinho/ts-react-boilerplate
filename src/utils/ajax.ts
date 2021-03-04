/* import  */
import axios from "axios";
import { process, ShopDetail, Plan } from "@/types";
/* type */
interface Config {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
};
/* ajax */
const ajax = (config: Config) => {
  const client = axios.create({
    baseURL: process.env.API_PATH,
    headers: { "Content-Type": "application/json" }
  });

  switch(config.method) {
    case "GET":
      return client.get(config.url);
    case "POST":
      return client.post(config.url, config.data);
    case "PUT":
      return;
    case "DELETE":
      return;
    default:
      return;
  }
};

export default ajax;
