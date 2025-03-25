/**
 * @param {number} timestamp bilibili pubdate, 10位时间戳
 * @return {string} 格式化后的字符串，例如 "2023/01-03"
 */
function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const utc8Offset = 8 * 60; // UTC+8 偏移量（分钟）
    const utc8Date = new Date(date.getTime() + utc8Offset * 60000);
    const year = utc8Date.getUTCFullYear();
    const month = utc8Date.getUTCMonth() + 1;
    // 计算月份范围的起始和结束月份 01-03， 04-06， 07-09，10-12
    const quarter = Math.ceil(month / 3);
    const startMonth = (quarter - 1) * 3 + 1;
    const endMonth = quarter * 3;
    const formattedMonthStart = String(startMonth).padStart(2, '0');
    const formattedMonthEnd = String(endMonth).padStart(2, '0');
    return `${year}/${formattedMonthStart}-${formattedMonthEnd}`
}
const regex = /(Hacker\s?News\s?|科技)周报/
export const listen = function(data) {
    /** @type {number} */
    const pubdate = data.archives[0].pubdate
    /** @type {string} */
    const title = data.archives[0].title
    const datePath = formatTimestamp(pubdate)
    if (regex.test(title)) {
        const sanitizedTitle = title.replace(/[^\p{L}\p{N}_.\-]/gu, '_')
        return {
            filepath: `docs/koala聊开源/${datePath}/${sanitizedTitle}.md`,
        }
    }
}

export const template = function(data) {
    /** @type {number} */
    const pubdate = data.pubdate
    /** @type {string} */
    const title = data.title
    const datePath = formatTimestamp(pubdate)
    if (regex.test(title)) {
        const sanitizedTitle = title.replace(/[^\p{L}\p{N}_.\-]/gu, '_')
        return {
            filepath: `docs/koala聊开源/${datePath}/${sanitizedTitle}.md`,
        }
    }
}