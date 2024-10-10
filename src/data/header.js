//아이콘//
import { CiBaseball } from "react-icons/ci";
import { FiFolder } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
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
   
];
export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/AhnHEYJI",
        icon: <AiFillGithub />
    },
];