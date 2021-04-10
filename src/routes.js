import { faBars, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';
import Courses from "./components/courses/Courses";
import ContentManage from "./components/contentManageMent/ContentManage";

const routes = [
    {   
        id: 1,
        path: "/",
        name: "MENU",
        icon: faBars,
        component: Courses,
        layout: "/courses",
        redirect: true
    },
    {   
        id: 2,
        collapse: true,
        name: "CONTENT MANAGEMENT",
        icon: faEdit,
        views: [
            {
                path: "/content",
                id: "2X",
                name: "FIRST",
                icon: faBars,
                mini: "AD",
                miniIcon: faEdit,
                component: ContentManage,
                layout: "/content"
            },
        ]
    },
    {
        id: 3,
        path: "/courses",
        name: "COURSES",
        icon: faBook,
        component: Courses,
        layout: "/courses",
        redirect: true
    },
];

export default routes;
