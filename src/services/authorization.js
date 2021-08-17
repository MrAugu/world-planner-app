import { api_base_url } from "../configuration.json";
import { randomString } from "../utils/Text";
import axios from "axios";
import path from "path";

export const getCache = () => {
  return new Promise((resolve, reject) => {
    try {
      let authorization = localStorage.getItem("key");
      if (!authorization) return reject();
      authorization = Buffer.from(authorization, "hex").toString();
      let id = localStorage.getItem("key-id");
      if (!id) return reject();
      id = Buffer.from(id, "hex").toString();
      let expires = localStorage.getItem("key-date");
      if (!expires) return reject();
      expires = Buffer.from(authorization, "hex").toString();
      resolve({
        authorization,
        id,
        expires
      });
    } catch (err) {
      return reject(err);
    }
  });
};

export const getAuthorization = async () => {
  const randomAgent = randomString(Math.random() * 40 + 15);
  const payload = await axios.put(path.resolve(api_base_url, "/sessions/new"), {
    
  })
};
