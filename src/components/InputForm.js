import React from 'react';

export default function InputForm(props) {
    const {text, content, onClick, btnName} = props;
    let inputName;
    let inputContent;

    return (
        <div><p>
            <input ref={(input) => {inputName = input}} placeholder={text}/>
            <input ref={(input) => {inputContent = input}} placeholder={content}/>
            <button onClick={() => {
                // if (!inputName.value || !inputContent.value) {
                //     alert('field can not be empty');
                //     return;
                // }

                onClick(inputName.value || text, inputContent.value || content);
                inputName.value = inputContent.value = '';
            }} >
                {btnName}
            </button></p>
        </div>
    );
}
