export default function useState<T>(initial:T){
    let value = initial;
    function setValue(newValue:T){
        value = newValue;
    }
    return [value, setValue] as const;
}
