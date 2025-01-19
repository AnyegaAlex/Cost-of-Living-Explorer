import { Button } from 'shadcn/ui';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">Cost of Living Explorer</h1>
      <p className="mt-2">Compare the economic situation across various countries.</p>
      <Button variant="primary" className="mt-4">Explore Now</Button>
    </header>
  );
};

export default Header;

