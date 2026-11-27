import mongoose from "mongoose";

const obatSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, lowercase: true, trim: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    kelasterapi: { type: String, required: true },
    mekanismekerja: { type: String, required: true },
    bentuksediaan: { type: String, required: true },
    indikasi: { type: String, required: true },
    kontraindikasi: { type: String, required: true },
    efeksamping: { type: String, required: true },
    dosis: { type: Object, default: {} },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} }
}, { minimize: false })

const obatModel = mongoose.models.obat || mongoose.model('obat', obatSchema)

export default obatModel