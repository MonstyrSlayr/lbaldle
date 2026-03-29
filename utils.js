//these functions were taken straight from squirdle hehehe
export function getLocalDateDay()
{
    let date = new Date()
    let localOffsetMilliseconds = date.getTimezoneOffset() * 60000
    return new Date(date.getTime() - localOffsetMilliseconds).toISOString().split("T")[0]
}

export function getCookie(cname, daily)
{
    cname = (daily ? "d_" : "") + cname
    let cookies = ` ${document.cookie}`.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] == ` ${cname}`) {
            return cookie[1];
        }
    }
    return "";
}

export function setCookie(cname, cvalue, exdays, daily, streak=false)
{
    cname = (daily ? "d_" : "") + cname;
    const d = new Date();
    if (daily)
    {
        d.setHours(23,59,59,0)
    }
    else if (streak)
    {
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
        d.setHours(23,59,59,0)
    }
    else
    {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    }
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";samesite=strict";
}