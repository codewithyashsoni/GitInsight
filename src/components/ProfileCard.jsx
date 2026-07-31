import React, {useState} from "react"
import {ArrowUpRight} from "lucide-react"

function ProfileCard({data}){
    const {name, avatar_url, login, bio, followers, following, public_repos, html_url} = data;
    return(
        <div className="profile-container">
            <div className="user-profile">
                <img src={avatar_url} alt={`${name} avatar`} className="avatar"/>

                <div className="user-info">
                    <h2>{name}</h2>
                    <p>@{login}</p>
                </div>
            </div>

            {bio && <p className="user-bio">{bio}</p>}

            <div className="user-socials">
                <p className="user-social"><span className="bold">{followers}</span> followers</p>
                <p className="user-social"><span className="bold">{following}</span> following</p>
                <p className="user-social"><span className="bold">{public_repos}</span> repos</p>
            </div>

            <a 
                href={html_url}
                className="profile-link"
                target="_blank"
                rel="noopener noreferrer"

            >
                <span>View on GitHub</span>
                <ArrowUpRight className="profile-link-icon" />
            </a>
        </div>
    )
}
export default ProfileCard