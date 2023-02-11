import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../model/User.js";

export const signup = async (req, res) => {
  const {
    name,
    email,
    password,
    city,
    state,
    country,
    occupation,
    phoneNumber,
    transactions,
    role,
  } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name,
      city,
      state,
      country,
      occupation,
      phoneNumber,
      transactions,
      role,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "48h",
      }
    );

    const user = {
      _id: result._id,
      email: result.email,
      password: result.password,
      name: result.name,
      city: result.city,
      state: result.state,
      country: result.country,
      occupation: result.occupation,
      phoneNumber: result.phoneNumber,
      transactions: result.transactions,
      role: result.role,
    };

    res.status(201).json({
      status: 201,
      message: "User register successfully!",
      result: user,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const oldUser = await User.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: oldUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "148h" }
    );

    res
      .status(200)
      .json({ status: 200, message: "User login successfully!", token: token });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Internal server error!", error: err });
  }
};

export const fetchUser = async (req, res) => {
  try {
      const id = req.params.id;

      const result = await User.findById(id);

      res.status(200).json(result);
  } catch(e) {
    res.status(404).json({message: e.message});
  }
}