import { CtaButton, InfoContent, InfoTitle, InfoHeader } from "./components";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <InfoHeader header="404" />
        <InfoTitle title="Page Not Found" />
        <InfoContent content="Sorry, we couldn’t find the page you’re looking for." />
        <CtaButton cta="Go Back Home" />
      </div>
    </main>
  );
}
