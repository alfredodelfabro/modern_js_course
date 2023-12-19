let d;

d = new Date();

d = d.toString();

d = new Date(2021, 6, 10, 12, 30, 0); // zero based

d = new Date('2021-07-10');

d = new Date('2022-07-10'); // problem with timezone

// timestamps

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1699012848027);

d = Math.floor(Date.now() / 1000);

console.log(d);