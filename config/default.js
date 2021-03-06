'use strict';

module.exports = {
	port: 3000,
    url: 'mongodb://localhost:27017/interface',
    session : {
        name : 'secretID',
        secret : 'xiaoshidaicrpto',
        cookie: {
				httpOnly: true,
			    secure:   false,
			    maxAge:   365 * 24 * 60 * 60 * 1000,
			}
    },
    //密码加密盐
    cryptoSecret : 'skrskrskr',
		//token
		jwtTokenSecret : 'xsdTokenBaby',
		//微信
		weChat : {
			//小程序appid
			appid : 'wx82ad24f0812d8860',
			//小程序appsecret
			appsecret : '0f92f734cae576404b2042e9bd3201b7'
		}
}
