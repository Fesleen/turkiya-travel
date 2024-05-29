export function LanguageValue(uz, ru, en) {
    if (window.localStorage.getItem('i18nextLng') == 'uz') {
        return uz
    } else if (window.localStorage.getItem('i18nextLng') == 'ru') {
        return ru
    } else if (window.localStorage.getItem('i18nextLng') == 'en') {
        return en
    } else {
        return ru
    }
}