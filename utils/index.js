import crypto from 'crypto' 
import config from 'config-lite'

//明文密码加密,暂时这样设置后期修改
const setPasswordCrtpto = (val) => {
    var hash = crypto.createHmac('sha256', config.cryptoSecret)
                     .update(val)
                     .digest('hex')
    return hash
}

export {
    setPasswordCrtpto
}