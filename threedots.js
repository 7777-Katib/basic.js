const ages=[12,14,16,13,17];
const ages2=[15,16,12];
const ages3=[25,26,22];
const allAges=ages.concat(ages3).concat([5]).concat(ages2);
const allAges2=[...ages,...ages2,5,...ages3];
// console.log(allAges2);

const business=650;
const misinster=450;
const sochib=250;
const takaPaisa=[650,450,250,67889];
const maximum=Math.max(...takaPaisa);
console.log(maximum);
