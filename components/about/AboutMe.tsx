import Link from "@/components/Link";
const AboutMe = () => {
  return (
    <section>
      <h2 id="about" className="scroll-margin-nav">
        <Link className="text-3xl" href="#about">
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>L RMN</b>, you can call me{" "}
        <b>L</b> for short. If you&apos;re my school
        friend you maybe know me as <b>Teng</b> or <b>Masteng</b>.
      </p>
      <p>
        I grew up in a small village located in{" "}
        <Link
          className="underline"
          isExternal
          href="https://www.google.com/search?q=bogor+jawa+barat"
        >
          Bogor, Jawa Tengah
        .
      </p>
      <p>
      I love exploring everything related to technology. Besides that, I really like the world of photography, especially virtual photography games.
        .
      </p>
      <p>
      Outside of software developing thingy, virtual photography game. I love playing and{" "}
        <Link
          isExternal
          className="underline"
          href="https://open.spotify.com/user/31urnjrljaimmmf52sealktmdz3i"
        >
          listening music
        </Link>
        .
      </p>
    </section>
  );
};

export default AboutMe;
