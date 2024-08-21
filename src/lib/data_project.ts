import axios from "axios";

type type_project = {
    id: number;
    title: string;
    d_name: string;
    description: string;
    tech: string[];
    time: string;
};

const Project_data: type_project[] = [
    {
        id: 1,
        title: "DEV-CONNECT",
        d_name: "Team",
        description: "A Project Listing Website",
        tech: ["Nextjs", "Nodejs", "Tailwind css"],
        time: "1 month"
    },
    {
        id: 2,
        title: "pokemon",
        d_name: "",
        description: "",
        tech: ["", "", ""],
        time: ""
    },
    {
        id: 3,
        title: "",
        d_name: "",
        description: "",
        tech: ["", "", ""],
        time: ""
    },
    {
        id: 4,
        title: "",
        d_name: "",
        description: "",
        tech: ["", "", ""],
        time: ""
    },
    {
        id: 5,
        title: "",
        d_name: "",
        description: "",
        tech: ["", "", ""],
        time: ""
    },
    {
        id: 6,
        title: "",
        d_name: "",
        description: "",
        tech: ["", "", ""],
        time: ""
    }
];

export const getUserData = async (userId: string) => {
    const options = {
        method: 'GET',
        url: `http://localhost:3001/api/users/${userId}`,
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const response = await axios.request(options);
        return response.data?.[0];
    } catch (error) {
        console.error("Couldn't fetch user", error);
        return [];
    }
};

export const getALLUserData = async () => {
    const options = {
        method: 'GET',
        url: `http://localhost:3001/api/users`,
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error("Couldn't fetch user", error);
        return [];
    }
};

export const getproject_data = async () => {
    const options = {
        method: 'GET',
        url: `http://localhost:3001/api/project`,
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const response = await axios.request(options);
        const projects = response.data;
        const userId = sessionStorage.getItem('userId');
        const newProjects = projects?.filter?.((pjt: any) => {
            if (pjt?.ownerId?._id == userId) return true;
            let isCollab = false;
            pjt?.collaboratorIds?.map?.((project: any) => {
                if (project?._id == userId) isCollab = true;
            });
            return isCollab === true;
        });
        return newProjects;
    } catch (error) {
        console.error("Couldn't fetch user", error);
        return [];
    }
};

// Add project data
export const addproject_data = (post: type_project) => {
    Project_data.push(post);
};

// Get project data by ID
export const getproj_data_id = (id: number) => {
    const proj_data = Project_data.find(proj_data => proj_data.id === id);
    return proj_data;
};
