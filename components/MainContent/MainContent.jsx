import ResultItem from "../results/ResultItem";

export default function MainContent() {
  return (
    <div className="w-2/5 text-center mt-5 h-max grow">
      <p className="block">Search Results</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-5">
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
      </div>
    </div>
  );
}
