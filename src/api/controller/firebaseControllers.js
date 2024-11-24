const {
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  deleteDocs,
} = require("firebase/firestore");
const db = require("../../database/firebase");

//To add data in firebase
exports.fireBaseAddData = async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: "Data is required." });
    }

    const blogsRef = collection(db, "blogs");
    const docRef = await addDoc(blogsRef, data);

    return res.status(200).json({
      message: "Data added successfully!",
      documentId: docRef.id,
    });
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

    const blogs = getData.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};


// To get specific data from Firebase
exports.fireBaseGetSpecificData = async (req, res) => {
  try {
    const id = req.params.id;
    const blogRef = doc(db, "blogs", id);  
    const getData = await getDoc(blogRef); 
    if (!getData.exists()) {
      return res.status(404).json({ error: "No data found" });
    }

    const blog = {
      id: getData.id,
      ...getData.data(),
    };

    res.status(200).json(blog);
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

//To delete data in firebase

exports.fireBaseDeleteData = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogDocRef = doc(db, "blogs", blogId);
    await deleteDoc(blogDocRef);
    res.status(200).json({ message: "Data deleted successfully!" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error deleting data" });
  }
};




