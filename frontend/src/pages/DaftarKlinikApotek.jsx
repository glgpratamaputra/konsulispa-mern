import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedKlinikApotek from '../components/RelatedKlinikApotek'
import { toast } from 'react-toastify'
import axios from 'axios'

const DaftarKlinikApotek = () => {

  const navigate = useNavigate()

  const { placeId } = useParams()
  const { dataKlinikApotek, backendUrl, token, getKlinikApotekData } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [placeInfo, setPlaceInfo] = useState(null)
  {/* Booking */ }
  const [placeSlots, setPlaceSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0) // default index
  const [slotTime, setSlotTime] = useState('')

  const fetchPlaceInfo = async () => {
    const placeInfo = dataKlinikApotek.find(place => place._id === placeId)
    setPlaceInfo(placeInfo)

  }

  const getAvailableSlots = async () => {
    setPlaceSlots([])

    // getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = placeInfo?.slots_booked?.[slotDate]?.includes(slotTime) ? false : true

        if (isSlotAvailable) {
          // add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })
        }

        // increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setPlaceSlots(prev => ([...prev, timeSlots]))
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to booking')
      return navigate('/login')
    }

    try {

      const date = placeSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { placeId, slotDate, slotTime }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getKlinikApotekData()
        navigate('/my-appointment')
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchPlaceInfo()
  }, [dataKlinikApotek, placeId])

  useEffect(() => {
    getAvailableSlots()
  }, [placeInfo])

  useEffect(() => {
    console.log(placeSlots)
  }, [placeSlots])

  return placeInfo && (
    <div>
      {/* Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-pink-100 w-full sm:max-w-72 rounded-lg' src={placeInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-7 py-7 px-5 bg-white'>
          {/* name dsb */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {placeInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{placeInfo.category}</button>
          </div>

          {/* About */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Alamat
              {/* Logo Google Maps di sebelah kanan teks */}
              <a
                href={placeInfo.mapsLink} // Harus berupa URL Google Maps, bukan alamat mentah, sesuaikan dengan alamat
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.googlemaps}
                  alt="Google Maps"
                  className="w-5 h-5 ml-2 cursor-pointer"
                />
              </a>
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{placeInfo.alamat}</p>
          </div>


          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Jam Operasional
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{placeInfo.jamoperasional}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Layanan
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{placeInfo.layanan}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              WhatsApp
              {/* Logo WhatsApp di sebelah kanan teks */}
              <a
                href={placeInfo.waLink} // Harus berupa URL WhatsApp, sesuaikan dengan kontak
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.whatsapp}
                  alt="WhatsApp"
                  className="w-5 h-5 ml-2 cursor-pointer"
                />
              </a>
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{placeInfo.kontak}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Fee Konsultasi: Rp. <span>{placeInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Book Slot */}
      <div className='sm:ml-72 sm:pl-4 mt-10'>
        <p className='text-2x1 font-medium text-gray-900'>Booking Konsultasi</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 text-sm text-gray-500'>
          {
            placeSlots.length && placeSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 px-1 min-w-16 rounded-xl cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-400'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 text-sm text-gray-500'>
          {placeSlots.length && placeSlots[slotIndex].map((item, index) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm flex-shrink-0 px-5 py-2 rounded-xl cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'border border-gray-400'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book Konsultasi</button>
      </div>

      {/* Related Klinik Apotek */}
      <RelatedKlinikApotek placeId={placeId} Category={placeInfo.category} />

    </div>
  )
}

export default DaftarKlinikApotek