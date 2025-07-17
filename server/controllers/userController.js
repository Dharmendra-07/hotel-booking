
// GET /api/user/

import { messageInRaw } from "svix";

export const getUserData = async(req, res) =>{
  try {
    const role = req.user.role;
    const recentearchedCities = req.user.recentearchedCities;
    res.json({success: true, role, recentearchedCities})
  } catch (error) {
    res.json({succes: false, message: error.message})
  }
}

// Store User Recent Searched Cities

export const storeRecentSearchedCities = async (req, res)=>{
  try {
    const {recentearchedCities} = req.body
    const user = await req.user;

    if(user.recentearchedCities.length < 3){
      user.recentearchedCities.push(recentearchedCity)
    }else {
      user.recentearchedCities.shift();
      user.recentearchedCities.push(recentearchedCity)
    }
    await user.save();
    res.json({success: true, message: 'City added'})


  } catch (error) {
    res.json({success: false, message: error.message })
  }
}