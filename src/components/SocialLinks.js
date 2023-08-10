import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/alexanderuson">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/profile.php?id=100004887077490">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://instagram.com/alexx_usn?igshid=MzNlNGNkZWQ4Mg==">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;