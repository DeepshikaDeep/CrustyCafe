import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  SocialLink,
  SocialMedia,
  SocialMediaWrap,
} from "./FooterElements";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLink
              style={{ textDecoration: "none" }}
              href=""
              target="_blank"
            >
              {" "}
             CRUSTY CAFE
            </SocialLink>

            <SocialIcons>
              <SocialLink
                href=""
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href=""
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialLink>
              <SocialLink
                href=""
                target="_blank"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </SocialLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
