// import User from "../models/User.js";

// // Middleware to check if user is authenticated

// export const protect = async(req, res, next)=>{
//   const {userId} = req.auth;
//   if(!userId){
//     res.json({success: false, message:'not authenticated'})
//   }else{
//     const user = await User.findById(userId);
//     req.user = user;
//     next()
//   }
// }

import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const { userId } = await req.auth(); // ✅ updated usage

    if (!userId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ success: false, message: "Authentication failed" });
  }
};