import Image from "next/image";

const Header = () => {
  return (
    <div>
      <h1>Header components</h1>

      {/* left */}
      <div>
        <div>
          <Image src="https://links.papareact.com/ocw" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Header;
