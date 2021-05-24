interface IProject {
    name: string
    route: string
    githubUrl: string
    productionUrl: string
    image: string
    imageArr: string[]
    descriptionBrief: string
    descriptionLong: string
    tools: ITool[]
}

interface ITool {
    name: string
    url: string
}