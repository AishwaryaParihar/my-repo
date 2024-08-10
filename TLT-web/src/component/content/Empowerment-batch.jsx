import React, { useState } from "react";
import Registration from "./Registration";
import SummaryApi from "../../Common/SummaryAPI";
import { toast } from "react-toastify";

const EmpowermentBatch = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [data, setData] = useState({
    // photo:"",
    name: "",
    birthplace: "",
    birthdate: "",
    address: "",
    state: "",
    pincode: "",
    qualification: "",
    university: "",
    pursuingLLb: "",
    yearOfPassing: "",
    email: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    pState: "",
    pCity: "",
    // adhaarPhoto: "",
    paidAmount: "",
    oldStudent: "",
    institute: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((...prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleRadioChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  console.log("data", data);

  // 
  
//latest
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  
  // Append files
  // if (data.photo) formData.append('photo', data.photo);
  // if (data.adhaarPhoto) Array.from(data.adhaarPhoto).forEach(file => formData.append('adhaarPhoto', file));
  
  // // Append other form data
  // Object.keys(data).forEach(key => {
  //   if (key !== 'photo' && key !== 'adhaarPhoto') formData.append(key, data[key]);
  // });

  try {
    const response = await fetch('https://tlt-project-backend.onrender.com/api/empowermentForm', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('An error occurred');
  }
};


const states = [
  { id: 1, name: 'Andaman and Nicobar Islands' },
  { id: 2, name: 'Andhra Pradesh' },
  { id: 3, name: 'Arunachal Pradesh' },
  { id: 4, name: 'Assam' },
  { id: 5, name: 'Bihar' },
  { id: 6, name: 'Chandigarh' },
  { id: 7, name: 'Chhattisgarh' },
  { id: 8, name: 'Dadra and Nagar Haveli' },
  { id: 9, name: 'Daman and Diu' },
  { id: 10, name: 'Delhi' },
  { id: 11, name: 'Goa' },
  { id: 12, name: 'Gujarat' },
  { id: 13, name: 'Haryana' },
  { id: 14, name: 'Himachal Pradesh' },
  { id: 15, name: 'Jammu and Kashmir' },
  { id: 16, name: 'Jharkhand' },
  { id: 17, name: 'Karnataka' },
  { id: 18, name:  'Kenmore'},
  { id: 19, name: 'Kerala' },
  { id: 20, name: 'Lakshadweep' },
  { id: 21, name: 'Madhya Pradesh' },
  { id: 22, name: 'Maharashtra' },
  { id: 23, name: 'Manipur' },
  { id: 24, name: 'Meghalaya' },
  { id: 25, name: 'Mizoram' },
  { id: 26, name: 'Nagaland' },
  { id: 27, name: 'Odisha' },
  { id: 28, name: 'Paschim Medinipur ' },
  { id: 29, name: 'Pondicherry' },
  { id: 30, name: 'Punjab' },
  { id: 31, name: 'Rajasthan' },
  { id: 32, name: 'Sikkim' },
  { id: 33, name: 'Tamil Nadu' },
  { id: 34, name: 'Telangana' },
  { id: 35, name: 'Tripura' },
  { id: 36, name: 'Uttar Pradesh' },
  { id: 37, name: 'Uttarakhand' },
  { id: 38, name: 'Vaisali' },
  { id: 39, name: 'West Bengal' },
];

const cities = {
//Andaman and Nicobar Islands
  1: ['Bombuflat', 'Garacharma', 'Port Blair', 'Rangat' ],
//'Andhra Pradesh'
  2: ['Adoni','Amalapuram','Anantapur','Bhimavaram','Chittoor',' Chirala','Dharmavaram','Eluru','Guntur','Gudivada','Hindupur','Kakinada','Kavali','Kurnool','Machilipatnam',
  'Machilipatnam','Mangalagiri',' Markapur',' Narasaraopet','Narsipatnam','Nellore','   Nidadavole','Nuzvid','Ongole','Palasa','Piduguralla','Pithapuram','Ponnur','Proddatur',
  'Pulivendula','Punganur','Puttur',' Rajahmundry',' Rayachoti','Samalkot','Srikakulam',
  'Sullurpeta','Tadepalligudem','Tadpatri','Tenali','Tirupati','Tuni','Venkatagiri','Vijayawada','Vinukonda','Visakhapatnam','Vizianagaram','Yemmiganur'],
//'Arunachal Pradesh' 
  3: ['Aalo', 'Anini', 'Bomdila', 'Changlang', 'Daporijo', 'Hawai', 'Itanagar', 'Khonsa', 'Koloriang', 'Longding', 'Naharlagun', 'Namsai', 'Pasighat', 'Roing', 'Seppa', 'Tawang', 'Tezu', 'Yingkiong', 'Ziro'],
// 'Assam' 
  4: ['Abhayapuri', 'Amguri', 'Badarpur', 'Baihata', 'Baksa', 'Barpeta', 'Barpeta', 'Biswanath Chariali', 'Bongaigaon', 'Dhekiajuli', 'Dhubri', 'Dibrugarh', 'Diphu', 'Doom Dooma', 'Gauripur', 'Goalpara', 'Golaghat', 'Haflong', 'Hailakandi', 'Hojai', 'Jorhat', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Lanka', 'Lumding', 'Mangaldoi', 'Morigaon', 'Nagaon', 'Nalbari', 'North Lakhimpur', 'Pathsala', 'Rangia', 'ibsagar',  'Silchar', 'Tinsukia', 'Tezpur'],
//'Bihar'
  5: ['Arrah', 'Aurangabad', 'Bagaha', 'Barauni',  'Bettiah', 'habua', 'Bhagalpur', ' Sharif', 'Buxar', 'Chhapra', 'Darbhanga', 'Dehri', 'Gaya', 'Gopalganj', 'Hajipur', 'Jamui', 'Jehanabad', 'Katihar', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Motihari', 'Munger', 'Muzaffarpur','Nawada', 'Patna', 'Purnia', 'Samastipur', 'Sasaram', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul'],
//'Chandigarh'
  6: ['Behlana', 'Burail', 'Daria', 'Dhanas', 'Hallo Majra', 'Kaimbwala', 'Khuda Alisher', 'Khuda Jassu', 'Kishangarh', 'Maloya', 'Manimajra', 'Mauli Jagran', 'Raipur Kalan', 'Raipur ', 'Sarangpur'],
//'Chhattisgarh'
  7: ['Ambagarh Chowki',  'Arang', 'Bade Bacheli', 'Balod', 'Baloda', 'Baloda Bazar',  'Bhairamgarh', 'Bhatapara',  'Bhilai Charoda', 'Bhilai Nagar', 'Bilaspur', 'Birgaon', 'Chhuikhadan', 'Dalli-Rajhara', 'Dhamtari', 'Dongargarh', 'Durg', 'Gariaband', 'Jagdalpur', 'Janjgir', 'Jashpurnagar', 'Kanker', 'Kawardha', 'Kondagaon', 'Korba', 'Mahasamund', 'Mungeli', 'Naila Janjgir', 'Pandaria', 'Pendra', 'Raigarh','Raipur', 'Rajnandgaon', 'Ramanujganj', 'Saraipali', 'Simga', 'Takhatpur'],
//'Dadra and Nagar Haveli'
  8: ["Amli", "Dadra","Naroli","Silvassa"],
//'Daman and Diu'
  9: ["Daman","Diu"],
  //delhi
  10:[
    "Delhi Cantonment", "New Delhi"],
  //goa
  11: ["Curchorem","Madgaon","Mapusa","Marmagao","Panaji", "Ponda","Sancoale","Valpoi"
  ],
  //gujarat
  12:["Ahmedabad","Amreli","Anand","Anjar","Ankleshwar","Bharuch","Bhavnagar","Bhuj",
    "Bilimora","Borsad","Botad","Chhapra","Dahod","Deesa","Dhoraji","Gandhidham",
    "Gandhinagar","Godhra","Gondal","Himatnagar","Jamnagar","Jetpur","Junagadh","Kadi","Kalol","Kapadvanj","Keshod","Khambhat","Kundla","Mahuva","Mandvi","Mangrol","Mehmedabad","Morbi","Nadiad","Navsari","Palanpur","Patan","Porbandar","Rajkot","Savarkundla","Sidhpur","Surat","Surendranagar","Vadodara","Valsad","Vapi","Veraval","Visnagar"],
  //haryana
  13:["Ambala","Ambala Cantt","Bahadurgarh","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad",
    "Gohana","Gurgaon","Hansi","Hisar","Jagadhri","Jind","Kaithal","Karnal","Kurukshetra",
    "Mahendragarh","Narnaul","Narwana","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Thanesar","Tohana","Yamunanagar"],
 //himachal pradesh 
  14:["Baddi", "Bilaspur", "Chamba", "Dalhousie", "Dharamshala", "Hamirpur", "Kangra", "Kullu", "Mandi", "Nahan", "Palampur", "Shimla", "Solan", "Una"],
//jammu kashmir
  15:["Anantnag", "Baramulla", "Bari Brahmana", "Batote", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Leh", "Poonch", "Pulwama", "Rajauri", "Samba", "Sopore", "Srinagar", "Udhampur"],
//jharkhand
  16:["Adityapur", "Bokaro Steel City", "Chaibasa", "Chirkunda", "Deoghar", "Dhanbad", "Dumka", "Giridih", "Hazaribagh", "Jamshedpur", "Jharia", "Jhumri Tilaiya", "Jorapokhar", "Kanke", "Katras", "Khunti", "Lohardaga", "Madhupur", "Mihijam", "Musabani", "Pakaur", "Patratu", "Phusro", "Ramgarh Cantonment", "Ranchi", "Sahibganj", "Saunda", "Simdega", "Tenu dam-cum-Kathhara"],
//karnataka
  17:["Bagalkot", "Bengaluru", "Belagavi", "Bellary", "Bidar", "Chikkamagaluru", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Hospet", "Hubballi-Dharwad", "Kolar", "Mandya", "Mangaluru", "Mysuru", "Raichur", "Shivamogga", "Tumakuru", "Udupi", "Vijayapura", "Yadgir"],
//kenmore
  18: ["Kenmore"],
//kerala
  19:["Adoor", "Alappuzha", "Attingal", "Changanassery", "Cherthala", "Chittur-Thathamangalam", "Guruvayoor", "Kanhangad", "Kannur", "Kasaragod", "Kayamkulam", "Kochi", "Kollam", "Koothuparamba", "Kottayam", "Kozhikode", "Kunnamkulam", "Malappuram", "Manjeri", "Nedumangad", "Neyyattinkara", "Nilambur", "Ottappalam", "Palakkad", "Ponnani", "Punalur", "Shoranur", "Taliparamba", "Thalassery", "Thiruvananthapuram", "Thrissur", "Tirur", "Tiruvalla", "Vadakara"],
//lakshadweep
  20: ["Agatti", "Amini", "Andrott", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kavaratti", "Kiltan", "Minicoy"],
//mp 
  21:["Alirajpur", "Ashoknagar", "Balaghat", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Itarsi", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandsaur", "Morena", "Nagda", "Narsinghgarh", "Neemuch", "Pithampur", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shivpuri", "Singrauli", "Ujjain", "Vidisha"],
//maharastra 
  22: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Baramati", "Bhandara", "Bhiwandi", "Bhusawal", "Chandrapur", "Dhule", "Gondia", "Ichalkaranji", "Jalgaon", "Jalna", "Kalyan-Dombivli", "Kolhapur", "Latur", "Malegaon", "Mumbai", "Nagpur", "Nanded", "Nashik", "Navi Mumbai", "Osmanabad", "Palghar", "Panvel", "Parbhani", "Pimpri-Chinchwad", "Pune", "Ratnagiri", "Sangli", "Satara", "Solapur", "Thane", "Ulhasnagar", "Vasai-Virar", "Wardha", "Yavatmal"],
// manipur
23: ["Bishnupur", "Churachandpur", "Imphal", "Kakching", "Lilong", "Mayang Imphal", "Nambol", "Thoubal", "Ukhrul"],
24: ["Baghmara", "Cherrapunji", "Jowai", "Nongpoh", "Nongstoin", "Resubelpara", "Shillong", "Tura", "Williamnagar"],
25: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
26: ["Dimapur", "Kohima", "Mokokchung", "Tuensang", "Wokha", "Zunheboto"],
27: ["Balangir", "Baleshwar (Balasore)", "Baripada", "Bhadrak", "Bhubaneswar", "Brahmapur", "Cuttack", "Dhenkanal", "Jeypore", "Konark", "Paradip", "Puri", "Rourkela", "Sambalpur"],
28: ["Belda", "Chandrakona", "Garbeta", "Ghatal", "Jhargram", "Kharagpur", "Medinipur", "Nayagram", "Salboni", "Sankrail", "Sutahata"],
29: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
30: ["Amritsar", "Bathinda", "Faridkot", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Ludhiana", "Mohali", "Pathankot", "Patiala", "Sangrur"],
31: ["Ajmer", "Alwar", "Banswara", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
32: ["Gangtok", "Gyalshing", "Mangan", "Namchi", "Singtam"],
33: ["Chennai", "Coimbatore", "Erode", "Kanchipuram", "Madurai", "Salem", "Thanjavur", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Vellore"],
34: ["Adilabad", "Hyderabad", "Jagtial", "Karimnagar", "Khammam", "Mahbubnagar", "Medak", "Miryalaguda", "Nalgonda", "Nizamabad", "Ramagundam", "Sangareddy", "Siddipet", "Suryapet", "Warangal"],
35: ["Agartala", "Belonia", "Dharmanagar", "Kailasahar", "Udaipur"],
36: ["Agra", "Aligarh", "Allahabad", "Amroha", "Azamgarh", "Bareilly", "Basti", "Bijnor", "Bulandshahr", "Etawah", "Faizabad", "Firozabad", "Ghaziabad", "Gorakhpur", "Hapur", "Jhansi", "Kanpur", "Lucknow", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Noida", "Prayagraj", "Rampur", "Saharanpur", "Sambhal", "Shahjahanpur", "Varanasi"],
37: ["Almora", "Dehradun", "Haridwar", "Haldwani", "Mussoorie", "Nainital", "Pauri", "Rishikesh", "Roorkee", "Rudrapur", "Tehri", "Udham Singh Nagar", "Uttarkashi"],
38: ["Hajipur", "Lalganj", "Mahua", "Raghopur", "Vaishali"],
39: ["Asansol", "Baharampur", "Bally", "Baranagar", "Barasat", "Barrackpore", "Bhatpara", "Bidhannagar", "Durgapur", "Halisahar", "Howrah", "Kolkata", "Kulti", "Malda", "North Dumdum", "Panihati", "Raiganj", "Siliguri", "South Dumdum", "Titagarh"]
};
  return (
<div className="">
      <div className="px-5 md:px-10 lg:px-20 py-0">
        <Registration />
      </div>

      <div className="text-justify mx-auto sm:px-10 px-5 md:px-10 lg:px-40 py-0 ">
        <div className="mt-4 ">
          <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-20">
            EMPOWERMENT BATCH 01
          </h2>
        </div>
        <br />
        <form className="mt-0" onSubmit={handleSubmit} action="/empowermentForm" method="post" encType="multipart/form-data">
          <div className="space-y-5">
            <div className="sm:flex items-center">
              <label
                htmlFor="photo"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Choose picture:
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="name"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={data.name}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="birthplace"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Place Of Birth:
              </label>
              <input
                type="text"
                name="birthplace"
                id="birthplace"
                onChange={handleChange}
                value={data.birthplace}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="birthdate"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Date Of Birth:
              </label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                onChange={handleChange}
                value={data.birthdate}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="address"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Full Address:
              </label>
              <textarea
                name="address"
                id="address"
                onChange={handleChange}
                value={data.address}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="state"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                State:
              </label>
              <select
                className="form-control border rounded w-full p-2"
                name="state"
                id="state"
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setData((prev) => ({ ...prev, state: e.target.value }));
                }}
                value={data.state}
              >
                <option value="" disabled>Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="pincode"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Pin Code:
              </label>
              <input
                type="number"
                name="pincode"
                id="pincode"
                onChange={handleChange}
                value={data.pincode}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="qualification"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Qualification:
              </label>
              <input
                type="text"
                name="qualification"
                id="qualification"
                onChange={handleChange}
                value={data.qualification}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="university"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                College/University:
              </label>
              <input
                type="text"
                name="university"
                id="university"
                onChange={handleChange}
                value={data.university}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label className="block text-left font-bold text-lg sm:w-1/5">
                Pursuing LL.B:
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="pursuingLLb"
                    value="yes"
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="pursuingLLb"
                    value="no"
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="yearOfPassing"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Year Of Passing:
              </label>
              <input
                type="number"
                name="yearOfPassing"
                id="yearOfPassing"
                onChange={handleChange}
                value={data.yearOfPassing}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="email"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={data.email}
                className="border rounded w-full p-2"
              />
            </div>

            <div>
              <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">
                Personal Information
              </h2>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="fatherName"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Father's Name:
              </label>
              <input
                type="text"
                name="fatherName"
                id="fatherName"
                onChange={handleChange}
                value={data.fatherName}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="motherName"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Mother's Name:
              </label>
              <input
                type="text"
                name="motherName"
                id="motherName"
                onChange={handleChange}
                value={data.motherName}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="permanentAddress"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Permanent Address:
              </label>
              <textarea
                name="permanentAddress"
                id="permanentAddress"
                onChange={handleChange}
                value={data.permanentAddress}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="pState"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                State:
              </label>
              <select
                className="form-control border rounded w-full p-2"
                name="pState"
                id="pState"
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setData((prev) => ({ ...prev, pState: e.target.value }));
                }}
                value={data.pState}
              >
                <option value="" disabled>Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="pCity"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                City:
              </label>
              <select
                className="form-control border rounded w-full p-2"
                name="pCity"
                id="pCity"
                onChange={handleChange}
                value={data.pCity}
                disabled={!selectedState}
              >
                <option value="" disabled>Select City</option>
                {selectedState && cities[selectedState]?.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="adhaarPhoto"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Upload Aadhar (Front and Back):
              </label>
              <input
                type="file"
                name="adhaarPhoto"
                id="adhaarPhoto"
                onChange={handleChange}
                multiple 
                className="border rounded w-full p-2"
              />
            </div>

            <div>
              <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
                Fees Paid ( First Installment )
              </h2>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex text-left font-bold text-lg sm:w-1/5">
                Online / UPI:
                <input
                  type="radio"
                  name="paymentMethod"
                  value="yes"
                  onChange={handleRadioChange}
                  className="mx-2 mt-1"
                />
              </label>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="paidAmount"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Amount Paid:
              </label>
              <input
                type="number"
                name="paidAmount"
                id="paidAmount"
                onChange={handleChange}
                value={data.paidAmount}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label className="block text-left font-bold text-lg sm:w-1/5">
                Old Student of Shubham Sir:
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="oldStudent"
                    value="yes"
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="oldStudent"
                    value="no"
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="institute"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Institution:
              </label>
              <input
                type="text"
                name="institute"
                id="institute"
                onChange={handleChange}
                value={data.institute}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-red-500 border text-white font-bold py-2 px-4 rounded mb-10"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpowermentBatch;
