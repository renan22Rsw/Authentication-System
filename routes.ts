/*
Um array de rotas publicas que não precisam de autenticação
*/
export const publicRoutes = ["/"];

/*
um array de rotas que são usadas para autenticação
estas rotas irão redirecionar o usuario para tela de configuração
*/

export const authRoutes = ["/auth/login", "/auth/register"];

/*
procede para rotas que exigem autenticação
rotas que comecam com /api/auth/... são usadas para autenticação de api

*/

export const apiPrefix = "/api/auth";

/*
Rota de redirecionamento padrão para tela de configuração ao fazer login
*/

export const DEFAULT_LOGIN_REDIRECT = "/settings";
