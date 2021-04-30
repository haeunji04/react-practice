const React = require('react');
const { useState, useRef } = React;


const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {

            // setResult(value + ' 정답!');   //아래처럼 쓸 수 있음
            setResult((prevResult) => {
                return value + ' 정답!'
            })
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();

        } else {
            setResult('오답입니다.');
            setValue('');
            inputRef.current.focus();
        }
    }

    console.log("렌더링");

    return (
        <>
            <div>{first} X {second} = ?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}/>
                <button type="submit">입력</button>
            </form>
            <div id="result">{result}</div>
        </>
    )
};

module.exports = GuGuDan;

