const {
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
} = require("firebase/firestore");
const db = require("../../database/firebase");

//To add data in firebase
exports.fireBaseAddData = async (req, res) => {
  try {
    const { blogId, data } = req.body;

    if (!data) {
      return res.status(400).json({ error: "Data is required." });
    }
    if (blogId) {
      const blogDocRef = doc(db, "blogs", blogId);
      await setDoc(blogDocRef, data);

      return res.status(200).json({
        message: "Data added successfully!",
        documentId: blogId,
      });
    } else {
      const blogsRef = collection(db, "blogs");
      const docRef = await addDoc(blogsRef, data);

      return res.status(200).json({
        message: "Data added successfully!",
        documentId: docRef.id,
      });
    }
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({
      error: "Error adding data to Firestore.",
      message: error.message,
    });
  }
};

//To get data from firebase
exports.fireBaseGetData = async (req, res) => {
  try {
    const blogsRef = collection(db, "blogs");
    const getData = await getDocs(blogsRef);

    if (getData.empty) {
      return res.status(404).json({ error: "No data found" });
    }

    const blogs = getData.docs.map((doc) => doc.data());
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};

//To update data in firebase

exports.fireBaseUpdateData = async (req, res) => {
  try {
    const blogId = req.params.id;
    const data = req.body;
    const blogDocRef = doc(db, "blogs", blogId);
    await updateDoc(blogDocRef, data);
    res.status(200).json({ message: "Data updated successfully!" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Error updating data" });
  }
};
