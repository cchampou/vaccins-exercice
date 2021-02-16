const fetch = require('node-fetch')
const url = 'http://cchampou.dyndns.org:7000/data.csv';

fetch(url)
  .then(res => res.text())
  .then(body => {
    const lines = body.split('\n');
    const shiftedLines = lines.slice(1);
    const splittedLines = shiftedLines.map(str => {
      return str.split(',');
    });
    const result = splittedLines.reduce((acc, entry) => {
      const exists = acc.findIndex(line => line[0] === entry[0]);
      if(entry[0] == '')
      return acc;
      if (exists == -1)
        acc.push(entry);
      if ( exists > -1 && acc[exists][2] < entry[2]){
        acc[exists] = entry;
      }
      return acc;
    }, [])
    .reduce((current, entry)=>{
        current.push({
          country : entry[0],
          date : entry[2],
          people_fully_vaccinated_per_hundred : entry[3]
        });
      return current;
    },[])
  });
