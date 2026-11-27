import mongoose from "mongoose";

const klinikApotekSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    alamat: { type: String, required: true },
    jamoperasional: { type: String, required: true },
    layanan: { type: String, required: true },
    kontak: { type: String, required: true },
    mapsLink: { type: String, required: true },
    waLink: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} }
}, { minimize:false })

const klinikApotekModel = mongoose.models.klinikApotek || mongoose.model('klinikApotek', klinikApotekSchema)

export default klinikApotekModel