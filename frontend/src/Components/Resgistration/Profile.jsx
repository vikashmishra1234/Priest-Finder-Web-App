import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg"
import { FaPhoneAlt, FaEdit, FaSignOutAlt, FaTrashAlt, FaUserCircle, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { deleteProfile } from '../../Services/Apis'




const Profile = ({ profileData, setToken }) => {
  const [activeTab, setActiveTab] = useState('profile')
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      const res = await deleteProfile()
      if (res.success) {
        localStorage.removeItem("priestToken")
        alert(res.message)
        setToken(null)
      }
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("priestToken")
    setToken(null)
  }

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-orange-100">
          <div className="p-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-orange-300 mb-4">
              <img
                src={profileData.Profile || "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"}
                alt={`${profileData.Name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-orange-800 mb-6">{profileData.Name}</h2>
            <nav>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left py-2 px-4 rounded-md mb-2 transition duration-300 ease-in-out ${activeTab === 'profile' ? 'bg-orange-200 text-orange-800' : 'hover:bg-orange-200'}`}
              >
                <FaUserCircle className="inline-block mr-2" /> Profile
              </button>
              <button
                onClick={() => navigate('/user/edit')}
                className={`w-full text-left py-2 px-4 rounded-md mb-2 transition duration-300 ease-in-out ${activeTab === 'edit' ? 'bg-orange-200 text-orange-800' : 'hover:bg-orange-200'}`}
              >
                <FaEdit className="inline-block mr-2" /> Edit Profile
              </button>
              <button
                onClick={handleLogOut}
                className="w-full text-left py-2 px-4 rounded-md mb-2 hover:bg-orange-200 transition duration-300 ease-in-out"
              >
                <FaSignOutAlt className="inline-block mr-2" /> Log Out
              </button>
              <button
                onClick={handleDelete}
                className="w-full text-left py-2 px-4 rounded-md text-red-600 hover:bg-red-100 transition duration-300 ease-in-out"
              >
                <FaTrashAlt className="inline-block mr-2" /> Delete Account
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 p-6">
          {activeTab === 'profile' && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CgProfile className="text-orange-500 w-6 h-6 mr-3" />
                    <span className="text-lg">{profileData.Name}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-blue-500 w-5 h-5 mr-3" />
                    <span>+91 {profileData.Phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{profileData.Bio}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 w-5 h-5 mr-3" />
                    <span>Mathura-Vrindavan</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-3">Invites:</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">{profileData.Invites}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'edit' && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Edit Profile</h3>
              <p className="text-gray-600 mb-4">This feature is coming soon. You'll be able to update your profile information here.</p>
              <button
                onClick={() => setActiveTab('profile')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Back to Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile

