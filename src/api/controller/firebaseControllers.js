const firebaseApp = require("../../database/firebase");
exports.fireBaseGetData = async (req, res) => {
  try {
    const db = firebaseApp.firestore();
    const data = await db.collection("blogs").get();
    const users = data.docs.map((blogsdata) => blogsdata.data());
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};








