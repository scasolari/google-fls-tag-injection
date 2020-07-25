function google_fls(src, type, cat, variables) {
    const axel = Math.random() + "";
    const a = axel * 10000000000000;
    if (typeof src !== "number") throw new TypeError("src wants a number");
    if (typeof type !== "string") throw new TypeError("type wants a string");
    if (typeof cat !== "string") throw new TypeError("cat wants a string");
    if (variables === undefined){
        return document.write('<iframe src="https://' + src + '.fls.doubleclick.net/activityi;src=' + src + ';type=' + type + ';cat=' + cat + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
    } else {
        let custom_variables_object = [];
        for(let key in variables){
            if (variables.hasOwnProperty(key)) {
                custom_variables_object.push(key + "=" + variables[key]);
            }
        }
        if (typeof variables !== "object") throw new TypeError("variables wants an object");
        return document.write('<iframe src="https://' + src + '.fls.doubleclick.net/activityi;src=' + src + ';type=' + type + ';cat=' + cat + ';' + custom_variables_object.join(";") + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
    }
};
module.exports = google_fls;
