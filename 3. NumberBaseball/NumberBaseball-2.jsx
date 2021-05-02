const React = require('react');
const { useState, useRef } = React;

// 숫자 네 개를 겹치지 않게 만들어내는 함수
const getMembers = () => {


}

const NumberBaseball2 = () => {
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
                    {[
                        { like: 'like1', word: '얍' },
                        { like: 'like2', word: '욥' },
                        { like: 'like3', word: '윱' },
                        { like: 'like4', word: '왂' },
                        { like: 'like5', word: '웎' }
                    ].map( (v, i) => {
                        return (
                            /*
                            key는 고유한 값이어야 함,
                            요소가 추가만 되는 배열인 경우,
                            key에다가 i(index)를 써도 되긴 함
                            하지만 좋은 방법은 아님!
                            리액트에서 key를 기준으로 element를 추가하거나 수정/삭제/판단 하기 때문에,
                            배열의 순서가 바뀌면 문제가 생긴다고 함!
                            */
                            <li key={v.like + v.word}><b>{v.like}</b> - {v.word} : {i}</li>
                        );
                    })}
                </ul>

                {/*<li><b>like1</b> - 얍</li>
                <li><b>like2</b> - 욥</li>
                <li><b>like3</b> - 윱</li>
                <li><b>like4</b> - 왂</li>
                <li><b>like5</b> - 웎</li>*/}
            </div>
        </>
    )


}
module.exports = NumberBaseball2;