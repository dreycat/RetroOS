// TODO: добавить типы
export default (...fns: any[]) => (init: any) => fns.reduceRight((value, fn) => fn(value), init);
