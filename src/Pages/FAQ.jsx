import React from 'react';
import '../Styles/FAQ.css';

const questionSet = [
    {
        "id": 0,
        "category": 0,
        "question": "How do I use Speedster?",
        "answer": "Click 'Type Test' on the navigation bar and then start typing!"
    },
    {
        "id": 1,
        "category": 0,
        "question": "How do I type faster?",
        "answer": "The only answer is to keep practicing! Start from using all your fingers while typing and then learn touch typing. After all the basics are perfected, start focusing on your accuracy then your speed!"
    },
    {
        "id": 2,
        "category": 1,
        "question": "What do the type test statistics mean?",
        "answer": "Words per minute (wpm):\nThe number of words typed per minute where each word is approximated to 5 characters. Different time controls will be scaled appropriately to one minute.\nRaw words per minute (raw wpm):\nThe same statistic as words per minute except the average approximation of 5 characters for each word is not used.\nAccuracy (acc):\nThe ratio between correctly typed letters and incorrectly typed letters as a percentage.\nSpeed Consistency (scons):\nThe distribution ratio of how the words per minute varies throughout the test.\nAccuracy Consistency (acons):\nThe distribution ratio of how the accuracy varies throughout the test."
    },
    {
        "id": 3,
        "category": 2,
        "question": "Why can't I log in to my account?",
        "answer": "There is not an answer yet as the account features have yet to be implemented."
    },
    {
        "id": 4,
        "category": 2,
        "question": "How do I delete my account?",
        "answer": "There is not an answer yet as the account features have yet to be implemented."
    },
    {
        "id": 5,
        "category": 3,
        "question": "How do I change the colour schematic of the site?",
        "answer": "There is not an answer yet as the feature is yet to be implemented."
    }
];

function FAQ() {
    return (
        <div class="pageBody">
            <div class="pageContent">
                <ul class="contentList">
                    <li>
                        <div class="textContent container">
                            <h1>FAQ</h1>
                            <p>This page is for Frequently Asked Questions (FAQ) about the website to clarify any common questions or confusions a user may have.</p>
                        </div>
                    </li>
                    <li>
                        <div class="textContent container">
                            <h1>General</h1>
                            {questionSet.map((set) => {
                                if (set.category == 0) {
                                    return (
                                        <>
                                            <h2>{set.question}</h2>
                                            <p>{ set.answer }</p>
                                        </>
                                    );
                                };
                            })}
                        </div>
                    </li>
                    <li>
                        <div class="textContent container">
                            <h1>Statistics</h1>
                            {questionSet.map((set) => {
                                if (set.category == 1) {
                                    return (
                                        <>
                                            <h2>{set.question}</h2>
                                            <p>{ set.answer }</p>
                                        </>
                                    );
                                };
                            })}
                        </div>
                    </li>
                    <li>
                        <div class="textContent container">
                            <h1>Account</h1>
                            {questionSet.map((set) => {
                                if (set.category == 2) {
                                    return (
                                        <>
                                            <h2>{set.question}</h2>
                                            <p>{ set.answer }</p>
                                        </>
                                    );
                                };
                            })}
                        </div>
                    </li>
                    <li>
                        <div class="textContent container">
                            <h1>Other</h1>
                            {questionSet.map((set) => {
                                if (set.category == 3) {
                                    return (
                                        <>
                                            <h2>{set.question}</h2>
                                            <p>{ set.answer }</p>
                                        </>
                                    );
                                };
                            })}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FAQ;