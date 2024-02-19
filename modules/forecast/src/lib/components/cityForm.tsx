import { components } from '@interviewspnpm/utils';
const { Input, Label, Button } = components;
export function CityForm({ onCitySet }: { onCitySet: (city: string) => void }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const cityInput = form.elements.namedItem('city') as HTMLInputElement;
    onCitySet(cityInput.value);
  };
  return (
    <div className="container mx-auto grid items-center gap-4 p-4">
      <form
        className="flex flex-col lg:flex-row items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="grow flex items-center self-stretch lg:self-auto gap-4">
          <Label className="m-0" htmlFor="city">
            City
          </Label>
          <Input id="city" name="city" placeholder="Enter your city" required />
        </div>
        <Button className="self-stretch lg:self-auto" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
