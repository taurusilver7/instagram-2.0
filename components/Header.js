import Image from "next/image";

const Header = () => {
  return (
    <div>
      {/* left */}
      <div className="flex justify-between max-w-6xl">
        <div className="relative h-24 w-24">
          <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />

        </div>
      </div>
    </div>
  );
};

export default Header;
