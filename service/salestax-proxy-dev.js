var PORT = process.env.PORT || 51003

require('seneca')()
  .client( {pin:'role:salestax,cmd:calculate',port:51001})
  .client( {pin:'role:salestax,cmd:calculate,country:*',port:51002})
  .listen( PORT )

