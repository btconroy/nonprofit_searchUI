function spaceConvert(str) {
    let regex = /\s/g;
    str.replace(regex, "%20");
}


export function dataToString(obj) {
    const queryStr = spaceConvert(obj.query);
    const stateStr = obj.state;
    const nteeNum = obj.ntee;
    const taxCodeNum = obj.taxCode;
    let uri;
    const uriArr = ['https://projects.propublica.org/nonprofits/api/v2/search.json', `q=${queryStr}`];

    if(stateStr != null) {
        uriArr.push(`&state%5Bid%5D=${stateStr}`);
    }

    if(nteeNum != null) {
        uriArr.push(`&ntee%5Bid%5D=${nteeNum}`);
    }

    if(taxCodeNum != null) {
        uriArr.push(`&c_code%5Bid%5D=${taxCodeNum}`);
    }

    uri = uriArr.join('');

    return uri
}