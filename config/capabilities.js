module.exports = [
    {
        "browserName": "chromium",
        "browserVersion": "140.0",
        "LT:Options": {
            'build': 'Playwright 101 Certification',
            'name': 'Playwright Test for chrome 140.0 in Windows 10 OS',
            'user': process.env.LT_USERNAME,
            'accessKey': process.env.LT_ACCESS_KEY,
            "platform": "Windows 10",
            "console": true,
            "video": true,
            "network": true,
            "screenshots": true,
        },
        screenshot: "on",
        video: "on",
    },
    /*{
        "browserName": "pw-firefox",
	    "browserVersion": "134.0",
        "LT:Options": {
            'build': 'Playwright 101 Certification',
            'name': 'Playwright Test for firefox 134.0 in macOS Catalina',
            'user': process.env.LT_USERNAME,
            'accessKey': process.env.LT_ACCESS_KEY,
            "platform": "macOS Catalina",
            "console": true,
            "video": true,
            "network": true,
            "screenshots": true,
        },
        screenshot: "on",
        video: "on",
    }
*/
    ]