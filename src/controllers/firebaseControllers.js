const { collection, addDoc, getDocs } = require("firebase/firestore");
const db  =require("../database/firebase.js");

const addBlogToFirestore = async (req, res) => {
  const { title, content, author,blogId } = req.body;
  try {
    const docRef = await addDoc(collection(db, "blogs"), { title:title, content:content, author:author,blogId:blogId });
    res.status(201).json({ id: docRef.id, message: "Blog added to Firestore" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports={addBlogToFirestore};