const config = {
  user :'rubin_admin',
  password :'admin1234',
  server:'127.0.0.1',
  database:'Cinema_plus',
  options:{
      trustedconnection: true,
      trustServerCertificate: true,
      enableArithAbort : true, 
      instancename :'CIMGJAD'
  },
  port : 1433
}

module.exports = config; 