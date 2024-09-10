import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { LuGithub } from "react-icons/lu";
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import LinkIcon from '@mui/icons-material/Link';
import { CgWebsite } from "react-icons/cg";
import { GoDatabase } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
function EmailsIcon() {
    return (
        <MdOutlineEmail fontSize="24px" color='#ffb300' />
    );
}
function PhoneIcon() {
    return (
        <MdWhatsapp fontSize="24px" color='#ffb300' />
    );
}

function PortfolioIcon() {
    return (
        <TbBrandLinkedin fontSize="24px" color='#ffb300' />
    );
}

function GitIcon() {
    return (
        <LuGithub fontSize="24px" color='#ffb300' />
    );
}

// Redes sociales

function FbIcon() {
    return (
        <LiaFacebookSquare fontSize="24px" color='#ffb300' />
    );
}
function XIcon() {
    return (
        <FaXTwitter fontSize="20px" color='#ffb300' />
    );
}
function IgIcon() {
    return (
        <LiaInstagram fontSize="24px" color='#ffb300' />
    );
}

// Herramientas
function LinksIcon() {
    return (
        <LinkIcon fontSize="small" color='secondary' />
    );
}


// Icons do
function DesignIcon() {
    return (
        <CgWebsite fontSize="20px" fontWeight='100' color='#ffb300' />
    );
}

function CodeIcon() {
    return (
        <FaCode fontSize="20px" fontWeight='100' color='#ffb300' />
    );
}

function ApiIcon() {
    return (
        <GoDatabase fontSize="20px" fontWeight='100' color='#ffb300' />
    );
}

function VisualIcon() {
    return (
        <FiPenTool fontSize="20px" fontWeight='100' color='#ffb300' />
    );
}



export { EmailsIcon, PhoneIcon, PortfolioIcon, GitIcon, FbIcon, XIcon, IgIcon, LinksIcon, DesignIcon, CodeIcon, ApiIcon, VisualIcon };
