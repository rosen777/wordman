import ExpensiveComponent from './expensive-component';
import Game from './game';

const Application = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <Game>
        <ExpensiveComponent />
      </Game>
    </main>
  );
};

export default Application;
