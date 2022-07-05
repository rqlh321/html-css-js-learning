
export default function language() {
    const params = new URLSearchParams(window.location.search);
    const languagePram = params.get("language");
    return languagePram == null ? "en" : languagePram
}
