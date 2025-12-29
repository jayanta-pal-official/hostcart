import db from "../db/db.js";

export const index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const search = req.query.search || "";
    let query = "SELECT * FROM users";
    let countQuery = "SELECT COUNT(*) as total FROM users";
    let params = [];
    let countParams = [];
    if (search) {
      query +=
        " WHERE name LIKE ? OR email LIKE ? OR phone LIKE ?";
      countQuery +=
        " WHERE name LIKE ? OR email LIKE ? OR phone LIKE ?";
      params.push(
        `%${search}%`,
        `%${search}%`,
        `%${search}%`
      );
      countParams.push(
        `%${search}%`,
        `%${search}%`,
        `%${search}%`
      );
    }
    query += " LIMIT ? OFFSET ?";
    params.push(limit, offset);
    const [rows] = await db.query(query, params);
    const [countResult] = await db.query(
      countQuery,
      countParams
    );
    const total = countResult[0].total;
    // const [rows] = await db.query('SELECT * FROM users');

    return res.status(200).json({
      success: true,
      users: rows,
      total: total,
    });
  } catch (err) {
    console.error("Error in allUser:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const store = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const [result] = await db.query(
      "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
      [name, email, phone, password]
    );
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      userId: result.insertId,
    });
  } catch (err) {
    console.error("Error in createUser:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    if (rows.length > 0) {
      return res.status(200).json({
        success: true,
        user: rows[0],
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.error("Error in editUser:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query(
      "DELETE FROM users WHERE id = ?",
      [id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.error("Error in deleteUser:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const [result] = await db.query(
      "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?",
      [name, email, phone, id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "User updated successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.error("Error in updateUser:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


