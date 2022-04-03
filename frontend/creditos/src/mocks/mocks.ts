import { Profile, Project, ProjectType } from "src/types";

export const MOCKED_PROJECTS: { [id: string]: Project } = {
    "1": {
        id: 1,
        profileId: 2,
        name: 'Hablalo',
        description: 'App',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        quantity: 10,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://pbs.twimg.com/profile_images/1128894758003232768/c4aW179f_400x400.png"
    },
    "2": {
        id: 2,
        profileId: 2,
        name: 'Hablalo2',
        description: 'App2',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        quantity: 10,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
    },
    "3": {
        id: 3,
        profileId: 1,
        name: "Champions 2007 🏆",
        createdOn: new Date("2007-11-02"),
        startOn: new Date("2007-11-02"),
        category: "Deportes",
        description: "",
        invested: 100000,
        earning: 2540000,
        type: ProjectType.Service,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU",
    },
    "4": {
        id: 4,
        profileId: 1,
        name: "Lote de Pelotas Jabulani Mundial 2010 ⚽️",
        createdOn: new Date("2010-05-02"),
        startOn: new Date("2010-06-25"),
        category: "Deportes",
        description: "",
        invested: 1000000,
        earning: 500000,
        type: ProjectType.Service,
        quantity: 500,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU",
    },
    "5": {
        id: 5,
        profileId: 2,
        name: 'Artesanías',
        description: "Un juego de tres en raya, calendario de escritorio y bloques ABC de madera hechos a mano sin acabados artificiales y desperdicio “0”. Solo 100 piezas disponibles.",
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        quantity: 100,
        category: 'Artesanía',
        type: ProjectType.Product,
        imageUrl: "https://ksr-ugc.imgix.net/assets/015/224/684/620baaa681d2c1841ab3fe0993c6915a_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1485368631&auto=format&frame=1&q=92&s=d0f2c993c02b6367a4dd7ccdb0b8af44"
    }
};


export const MOCKED_PROFILES: { [id: string]: Profile } = {
    "1": {
        id: 1,
        name: "Leonel Messi",
        bio: "Jugador de futbol 🇦🇷 amateur en Colegiales. Papa de 3 hijos y un perro.",
        imageUrl: "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
        scoring: 7,
        location: "Paris, Francia 🇫🇷",
    },
    "2": {
        id: 2,
        name: "Juan Perez",
        bio: "Soy un hombre común.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsq3kDxmodhIcO_4PWBuBm8nxLLF9efcsnbw&usqp=CAU",
        scoring: 4,
        location: "Buenos Aires, Argentina",
    }
};

export const getProfileProjects = (profileId: number) => {
    return Object.values(MOCKED_PROJECTS).filter((project) => project.profileId === profileId);
}