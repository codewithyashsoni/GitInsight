import {useState} from "react"
import ProfileCard from "./ProfileCard.jsx"
import RepositorySection from "./RepositorySection.jsx"

function UserData({data}){
    return(
        <div className="userdata-container">
            <ProfileCard data={data.user} />
            <RepositorySection data={data.repos} />
        </div>
    )
}
export default UserData