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
    cryptoSecret : 'skrskrskr'
}