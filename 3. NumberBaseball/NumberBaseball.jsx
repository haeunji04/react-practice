const React = require('react');
const { useState, useRef } = React;

// 숫자 네 개를 겹치지 않게 만들어내는 함수
const getMembers = () => {


}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getMembers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = () => {

    }

    const onChangeInput = () => {

    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>
                시도: {tries.length}
                <ul>
                    {['like1', 'like2', 'like3', 'like4', 'like5'].map( (v) => {
                        return (
                            <li>{v}</li>
                        );
                    })}

                </ul>
            </div>
        </>
    )


}
module.exports = NumberBaseball;