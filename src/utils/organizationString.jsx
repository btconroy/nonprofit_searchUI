export function organizationString(str) {
    const baseStr = 'https://projects.propublica.org/nonprofits/api/v2/organizations/';
    const oranizationEin = str;

    return `${baseStr}${oranizationEin}.json`
}