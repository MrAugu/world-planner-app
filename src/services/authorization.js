import { api_base_url } from "../configuration.json";
import { encodeTimestamp } from "../utils/Time";
import axios from "axios";

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
  const encodingTimestamp = Date.now();
  const stampChecksum = encodeTimestamp(encodingTimestamp);
  let encodedAgent = navigator.userAgent
    .split("")
    .map(char => char.charCodeAt(0))
    .reverse()
    .map(code => code + stampChecksum + 13)
    .map(code => String.fromCharCode(code))
    .map(char => Buffer.from(char).toString("hex"))
    .join(":");

  const payload = await axios.put(`${api_base_url}/api/sessions/new`, {
    stamp: String(encodingTimestamp),
    test: encodedAgent
  }).catch(() => {});

  if (!payload || payload.status !== 200) return;
  else return payload.data;
};
