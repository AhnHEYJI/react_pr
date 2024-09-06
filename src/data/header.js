//아이콘//
import { CiBaseball } from "react-icons/ci";
import { FiFolder } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";



export const headerMenus = [
    {
        title: "Ahnyoutube",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <FiFolder />,
        src: "/today"
    },
    {
        title: "내가 즐겨찾는 개발자 유튜버",
        icon: <FiHeart />,
        src: "/developer"
    },
    {
        title: "코딩공부 할때듣는음악추천",
        icon: <FiMusic />,
        src: "/music"
    },
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/AhnHEYJI",
        icon: <AiFillGithub />
    },
];