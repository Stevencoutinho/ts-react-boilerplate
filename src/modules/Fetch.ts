import axios from 'axios';

interface Config {
  url: string;
  method: string;
}

const Fetch = (config: Config) => {
  const cliet = axios.create({
    baseURL: "/",
    headers: { "Content-Type": "application/json" }
  });
  switch(config.method) {
    case 'GET':
      cliet.get<History>(config.url)
        .then(res => console.log(res))
        .catch(err => console.error(err));
      return;
    case 'POST':
      cliet.post<History>(config.url)
        .then(res => console.log(res))
        .catch(err => console.error(err));
      return;
    default:
      return;
  };
};

export default Fetch;