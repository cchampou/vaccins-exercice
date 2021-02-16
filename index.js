const fetch = require('node-fetch')
const url = 'http://cchampou.dyndns.org:7000/data.csv';

fetch(url)
  .then(res => res.text())
  .then(body => {
    const lines = body.split('\n');
    const shiftedLines = lines.slice(1);
    const splittedLines = shiftedLines.map(str => {
      return str.split(',');
    })
    console.log(splittedLines[0][0])
    const result = splittedLines.reduce((acc, entry) => {
      const exists = acc.find(line => line[0] === entry[0]);
      // if (exists >= 0 && ) {
      //    TODO: Finish this reduce ! \o/
      // }
    }, [])
  });
