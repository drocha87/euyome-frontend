/* code as recommend in umbler help page
 * https://community.umbler.com/br/t/redirecionamento-https-em-aplicacoes-nodejs/676
 */
export default (req, res, next) => {
  if (req.originalUrl !== '/_loading/sse') {
    console.log(
      req.originalUrl,
      req.headers['x-forwarded-proto'],
      req.url,
      req.headers.host,
      req.headers['x-forwarded-host']
    );
  }

  if (req.headers.host && !req.headers.host.startsWith('www.')) {
    res.writeHead(301, `https://www.euyo.me${req.url}`);
  } else {
    next();
  }

  // next();
  // if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) {
  //   res.writeHead(301, {
  //     Location: 'https://www.euyo.me' + req.url,
  //   });
  //   res.end();
  // } else {
  //   next();
  // }
};
