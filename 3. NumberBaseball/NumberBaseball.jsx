import React, {Component} from 'react';
import Try from './Try';

// 숫자 네 개를 겹치지 않게 만들어내는 함수
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i< 4; i+=1 ) {
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),   //ex. [1,3,5,7]
        tries: [],  //push 쓰면 안 됨!
    };
    // const [result, setResult] = useState('');
    // const [value, setValue] = useState('');
    // const [answer, setAnswer] = useState(getMembers());
    // const [tries, setTries] = useState([]);

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value===this.state.answer.join('')){
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, { try: this.state.value, result: '홈런!' }],
            })
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >= 9){
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for(let i=0; i<4; i +=1){
                    if(answerArray[i] === this.state.answer[i]){
                        strike += 1;
                    } else if(this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                    value: '',
                });
            }
        }
    }

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    render() {

        return (
            <>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>
                    시도: {this.state.tries.length}
                    <ul>
                        {this.state.tries.map( (v, i) => {
                            return (
                                <Try key={`${i + 1}차 시도:`} tryInfo={v} />
                                /*<li key={v.like + v.word}>
                                    <b>{v.like}</b> - {v.word} : {i}
                                    <div>컨텐츠</div>
                                    <div>컨텐츠1</div>
                                    <div>컨텐츠2</div>
                                    <div>컨텐츠3</div>
                                </li>*/
                            );
                        })}
                    </ul>

                </div>
            </>
        )

    }


}

export default NumberBaseball;