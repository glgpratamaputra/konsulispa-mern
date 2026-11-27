import obatModel from "../models/obatModel.js"

const obatList = async (req, res) => {
    try {

        const dataObat = await obatModel.find({})

        res.json({ success: true, dataObat })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {obatList}