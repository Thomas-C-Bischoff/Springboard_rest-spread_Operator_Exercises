const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => Math.min(nums);

const mergeObjects = (obj1, obj2) => [{...obj1, ...obj2}];

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)];

const removeRandom = (items) => {
    const index = Math.floor(items.length * Math.random());
    return [...items.slice(0, index), ...items.slice(index + 1)];
};

const extend = (array1, array2) => {
    return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
    const obj2 = {...obj};
    obj2[key] = val;
    return obj2;
};

const removeKey = (obj, key) => {
    const obj2 = {...obj};
    delete obj2[key];
    return obj2;
};

const combine = (obj1, obj2) => {
    return {...obj1, obj2};
};

const update = (obj, key, val) => {
    return addKeyVal(obj,key,val);
};