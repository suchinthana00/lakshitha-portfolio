import React from "react";
import "./style.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaBehance,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch} target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
