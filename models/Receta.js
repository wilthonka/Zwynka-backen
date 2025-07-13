
import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  ingredientes: [{ nombre: String, cantidad: String }],
  pasos: [String],
  autor: { type: String },
  fechaCreacion: { type: Date, default: Date.now }
});

export default mongoose.model("Receta", recetaSchema);
