export const loaderPublicListingAdvertising = async () => {
    const res = await fetch('http://idealista.local/public-listing')
    const data = await res .json();

    return {data};
}

export const loaderQualityListingAdvertising = async () => {
    const res = await fetch('http://idealista.local/quality-listing')
    const data = await res.json();

    return {data}
}