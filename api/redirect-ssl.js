/* code as recommend in umbler help page
 * https://community.umbler.com/br/t/redirecionamento-https-em-aplicacoes-nodejs/676
 */
export default (req, res, next) => {
  // if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) {
  //   res.writeHead(301, {
  //     Location: 'https://www.euyo.me' + req.url,
  //   });
  //   res.end();
  // } else {
  next();
  // }
};
