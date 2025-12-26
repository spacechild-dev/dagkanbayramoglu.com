import { IconType } from "react-icons";
import { 
    HiOutlineRocketLaunch, 
    HiOutlineDocumentText, 
    HiOutlineBriefcase, 
    HiOutlineIdentification, 
    HiOutlineSquare3Stack3D,
    HiOutlineHome
} from "react-icons/hi2";

export const iconLibrary: Record<string, IconType> = {
    rocket: HiOutlineRocketLaunch,
    home: HiOutlineHome,
    document: HiOutlineDocumentText,
    briefcase: HiOutlineBriefcase,
    id: HiOutlineIdentification,
    layers: HiOutlineSquare3Stack3D,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;