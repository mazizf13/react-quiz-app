export const questions = [
  {
    question: "How do you create a functional component?",
    options: {
      A: "function MyComponent = () => {}",
      B: "function MyComponent() {}",
      C: "const MyComponent() => {}",
      D: "const MyComponent = function() {}",
    },
    answer: "B",
  },
  {
    question: "How do you update state in a class component?",
    options: {
      A: "setState()",
      B: "updateState()",
      C: "changeState()",
      D: "modifyState()",
    },
    answer: "A",
  },
  {
    question: "What is JSX?",
    options: {
      A: "JavaScript syntax",
      B: "CSS",
      C: "XML-like syntax",
      D: "JSON",
    },
    answer: "C",
  },
  {
    question: "How do you pass props to a child?",
    options: {
      A: "<Child prop={value} />",
      B: "<Child.prop = {value} />",
      C: "<Child[prop] = value />",
      D: "<Child(prop={value}) />",
    },
    answer: "A",
  },
  {
    question: "What does useEffect do?",
    options: {
      A: "Manages state",
      B: "Handles side effects",
      C: "Manipulates the DOM",
      D: "Creates context",
    },
    answer: "B",
  },
  {
    question: "How do you create a ref?",
    options: {
      A: "React.createRef()",
      B: "React.useRef()",
      C: "React.createRef",
      D: "React.useRef",
    },
    answer: "A",
  },
  {
    question: "Which hook creates state variables?",
    options: {
      A: "useState",
      B: "useEffect",
      C: "useContext",
      D: "useReducer",
    },
    answer: "A",
  },
  {
    question: "How do you handle form submissions?",
    options: {
      A: "submit event",
      B: "onSubmit handler",
      C: "formSubmit method",
      D: "handleSubmit function",
    },
    answer: "B",
  },
  {
    question: "What is the purpose of keys?",
    options: {
      A: "Identify elements",
      B: "Handle events",
      C: "Manage state",
      D: "Create refs",
    },
    answer: "A",
  },
  {
    question: "Which method runs after updates?",
    options: {
      A: "componentDidUpdate",
      B: "componentDidMount",
      C: "componentWillUnmount",
      D: "componentWillUpdate",
    },
    answer: "A",
  },
];

export default questions;
