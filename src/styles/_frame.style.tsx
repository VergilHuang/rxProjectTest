import HomeStyle from "../pages/Home/styles/_frame.style"

const DefaultStyle = {
    ...HomeStyle
}

export default class Skin {
    company = 1

    constructor() {

    }

    setCompanyId(id: number) {
        this.company = id
    }

    getStyleConfig(): typeof DefaultStyle {
        return DefaultStyle
    }
}