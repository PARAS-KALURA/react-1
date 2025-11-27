import React from 'react'

const profile = {
    name: "Paras Kalura",
    hobby: "Coding is On...",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGg-eEe6OvzkUCbkCzRYVf7NxuJvAkGe4GQ&s"
};

const ProfileCard = () => {
  return (
  <div style={{border: '2px solid #ddd', padding: "20px", textAlign: 'center', width: "250px", borderRadius: "20px",   }} >
    <h2>{profile.name}</h2>
    <img
    style={{borderRadius: "50%" }}
    src={profile.img} alt="profile" />
    <p>{profile.hobby}</p>
  </div>
  );
}

export default ProfileCard