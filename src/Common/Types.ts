export type LoginPostType = {
    password: string
    email: string
    rememberMe: boolean
}
export type LoginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

export type LogoutResponseType = {
    info: `logOut success —ฅ/ᐠ.̫ .ᐟ\ฅ—`;

    error: string;
}