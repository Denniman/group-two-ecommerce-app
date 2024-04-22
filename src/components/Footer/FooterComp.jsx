import { Footer } from "flowbite-react";

export function FooterComp () {
  return (
    <Footer container className="px-12">
      <Footer.Copyright href="#" by={"Business Name" + "™"} year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
