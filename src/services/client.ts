import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://127.0.0.1:8080/api/v1";
} else {
  baseURL = "http://cashup.iptime.org:8080/api/v1";
}

const client = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6Im1pc3NvaCIsImlhdCI6MTY5OTQ1MjgzNiwiZXhwIjoxNzg1ODUyODM2fQ.FLw5kG5Byopucfil9IIBvpIHxPZn4ozaETI_aY_W0Pb2VwqwjLuzW8cqeYlwPdVV2tUp4FYQ6o3egTWWTuBDsw",
  },
});

export default client;
