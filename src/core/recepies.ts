import { firestore } from "./firebase"

const getRecipes = async () => {
    const snapshot = await firestore.collection("recipes").get()
    snapshot.docs.forEach(doc => console.log(doc.data()))
}

export { getRecipes }