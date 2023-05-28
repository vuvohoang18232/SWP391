import axios from "../utils/axios";

const getUsers = async () => {
  return await axios.get("api/v1/users");
};

export { getUsers };
