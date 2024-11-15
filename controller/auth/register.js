import {
  getUserByUsername,
  getUserByEmail,
  createUser,
} from "../../database/models/users.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const userAlreadyRegistered = await getUserByEmail(email);

  if (userAlreadyRegistered != null) {
    return res.status(400).json({
      status: "error",
      message: "email already used!",
      account: null,
    });
  }

  const userCreated = await createUser(username, email, password);

  if (typeof userCreated != "undefined" && userCreated.affectedRows > 0) {
    const user = await getUserByUsername(username);
    return res.status(200).json({
      status: "success",
      message: "register success!",
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } else {
    return res.status(400).json({
      status: "error",
      message: "register failed!",
      data: null,
    });
  }
};
