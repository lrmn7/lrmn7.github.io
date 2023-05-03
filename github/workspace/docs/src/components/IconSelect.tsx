import {
  IconContext,
  FacebookLogo,
  GlobeHemisphereEast,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  Envelope,
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
  MediumLogo,
  MapPinLine,
  DiscordLogo,
  MessengerLogo,
  RedditLogo,
  SpotifyLogo,
  SlackLogo,
  Phone,
  PinterestLogo,
} from "@phosphor-icons/react";

type Props = {
  name: string;
};

const IconSelect = ({ name }: Props) => {
  return (
    <IconContext.Provider
      value={{
        color: "teal",
        size: 24,
        weight: "duotone",
      }}
    >
      {name === "facebook" && <FacebookLogo />}
      {name === "instagram" && <InstagramLogo />}
      {name === "youtube" && <YoutubeLogo />}
      {name === "twitter" && <TwitterLogo />}
      {name === "linkedin" && <LinkedinLogo />}
      {name === "github" && <GithubLogo />}
      {name === "whatsapp" && <WhatsappLogo />}
      {name === "medium" && <MediumLogo />}
      {name === "discord" && <DiscordLogo />}
      {name === "messenger" && <MessengerLogo />}
      {name === "reddit" && <RedditLogo />}
      {name === "pinterest" && <PinterestLogo />}
      {name === "spotify" && <SpotifyLogo />}
      {name === "slack" && <SlackLogo />}
      {name === "website" && <GlobeHemisphereEast />}
      {name === "phone" && <Phone />}
      {name === "mail" && <Envelope />}
      {name === "location" && <MapPinLine />}
    </IconContext.Provider>
  );
};

export default IconSelect;
