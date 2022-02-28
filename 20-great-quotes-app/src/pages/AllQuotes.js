import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Neil Armstrong",
    text: "That’s one small step for a man, one giant leap for mankind.",
  },
  {
    id: "q2",
    author: "Albert Einstein",
    text: "I have no special talent. I am only passionately curious.",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
