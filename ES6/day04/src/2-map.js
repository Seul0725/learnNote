let map = new Map();
console.log(map);
console.log(map.size); //0
//添加数据
map.set('name', 'tom');
map.set('name', 'lisi');
map.set('age', '12');
map.set({}, 'lisi');
console.log(map); //Map { 'name' => 'lisi', 'age' => '12', {} => 'lisi' }
console.log(map.size);
console.log(map.constructor);
console.log(map.get('name')); //lisi
/* console.log(map.delete('name'));
console.log(map);
map.clear();
console.log(map); */
//遍历
let keys = map.keys();
console.log(keys);

let values = map.values();
console.log(values);

let entries = map.entries();
console.log(entries);

map.forEach((value, key, map) => {
    console.log(value, key, map);
});