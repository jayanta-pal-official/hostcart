import db from "../db/db.js";



export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log( "Login attempt with email:", email );
    const [rows] = await db.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    );
    if (rows.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: rows[0],
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (err) {
    console.error("Error in loginUser:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};