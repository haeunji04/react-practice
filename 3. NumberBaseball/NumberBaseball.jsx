const React = require('react');
const { useState, useRef } = React;
// const Try = './Try';

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

    const arrayData = [
        { like: 'like1', word: '얍' },
        { like: 'like2', word: '욥' },
        { like: 'like3', word: '윱' },
        { like: 'like4', word: '왂' },
        { like: 'like5', word: '웎' }
    ];

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>
                시도: {tries.length}
                <ul>
                    {arrayData.map( (v, i) => {
                        return (
                            <li key={v.like + v.word}>
                                <b>{v.like}</b> - {v.word} : {i}
                                <div>컨텐츠</div>
                                <div>컨텐츠1</div>
                                <div>컨텐츠2</div>
                                <div>컨텐츠3</div>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </>
    )


}
module.exports = NumberBaseball;