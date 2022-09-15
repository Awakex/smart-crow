import AppConfig from "../../../app.json";

export const keycloakConfiguration = {
    clientId: "mobile",
    realm: "tournament",
    url: "https://umnayavorona.ru:8543/auth",
    scheme: AppConfig.expo.scheme,
};
