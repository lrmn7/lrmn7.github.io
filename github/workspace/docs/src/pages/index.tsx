import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Balancer from "react-wrap-balancer";
import { getBioLinkContent } from "@/lib/api";
import IconSelect from "@/components/IconSelect";

type Props = {
  data: {
    name: string;
    bio: string;
    profilePhoto: string;
    links: {
      name: string;
      url: string;
    }[];
    socialLinks: {
      name: string;
      url: string;
    }[];
    customize: {
      fontFamily: string;
      theme: string;
    };
  };
};

export default function Home({ data }: Props) {
  const {
    name,
    bio,
    profilePhoto,
    links,
    socialLinks,
    customize: { theme, fontFamily },
  } = data;
  return (
    <main
      className={`min-h-screen ${
        theme === "light"
          ? "bg-teal-50 text-teal-800"
          : "bg-teal-900 text-teal-50"
      }`}
      style={{
        fontFamily: fontFamily,
      }}
    >
      <div className="max-w-2xl mx-auto flex flex-col space-y-4 items-center px-4 py-8 text-center">
        {!data ? (
          <p>Loading...</p>
        ) : (
          <>
            <NextSeo
              title={name}
              description={bio}
              openGraph={{
                title: name,
                description: bio,
                type: "profile",
                images: [
                  {
                    url: profilePhoto,
                    width: 800,
                    height: 600,
                    alt: name,
                  },
                ],
                site_name: name,
              }}
            />
            <Head>
              <link rel="shortcut icon" href={profilePhoto} />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link
                href={`https://fonts.googleapis.com/css2?family=${fontFamily.replace(
                  / /g,
                  "+"
                )}&display=swap`}
                rel="stylesheet"
              />
            </Head>
            <Image
              src={profilePhoto}
              width={90}
              height={90}
              alt="profile name"
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>
              <Balancer>{bio}</Balancer>
            </p>
            <div className="flex flex-col space-y-2">
              {links.map((link: any, index: number) => (
                <a
                  target="_blank"
                  key={index}
                  href={link.url}
                  className="bg-teal-50 hover:bg-teal-200 text-teal-700 py-2 px-4 rounded shadow hover:scale-105 transition-all duration-200 ease-in-out"
                >
                  <Balancer>{link.name}</Balancer>
                </a>
              ))}
            </div>
            <div className="flex space-x-2">
              {socialLinks.map((link: any, index: number) => (
                <a
                  target="_blank"
                  key={index}
                  href={link.url}
                  className={`
                   bg-teal-50 hover:bg-teal-200 p-2 rounded shadow hover:scale-110 transition-all duration-200 ease-in-out
                  ${index % 2 === 0 ? "hover:-rotate-3" : "hover:rotate-3"}
                `}
                >
                  <IconSelect name={link.name} />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const { data } = getBioLinkContent();

  return {
    props: { data },
    revalidate: 10,
  };
};
