// Importa la configuración de Firebase
import { db } from "./src/firebase/configFirebase.js"; // Asegúrate de incluir la extensión .js
import { collection, addDoc } from "firebase/firestore";

// Importa productos desde el JSON
import productos from "./products.json" assert { type: "json" };

// Función para subir productos
const subirProductos = async () => {
  const collectionRef = collection(db, "products");

  for (const producto of productos) {
    try {
      const docRef = await addDoc(collectionRef, producto);
      console.log(`Producto subido con ID: ${docRef.id}`);
    } catch (error) {
      console.error(`Error subiendo el producto ${producto.nombre}:`, error);
    }
  }

  console.log("Todos los productos han sido subidos.");
};

// Ejecuta la función
subirProductos();
