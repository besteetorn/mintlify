export function ErrorPage() {
  return (
    <main className="h-screen dark:bg-[#0f1117]">
      <article className="bg-custom bg-fixed bg-center bg-cover relative flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-xl px-10">
          <span className="inline-flex mb-6 rounded-full px-3 py-1 text-sm font-semibold mr-4 text-white ring-green-900/5 group-hover:ring-green-900/10 dark:group-hover:highlight-white/10 p-1 highlight-slate-700/5 bg-[#117866] dark:highlight-white/5">
            Error&nbsp;404
          </span>
          <h1 className="font-semibold mb-3 text-3xl">
            Well this is embarrassing…
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6">
            We can't find the page you are looking for. Please <a href="mailto:hi@mintlify.com" className="font-medium text-slate-700 dark:text-gray-100 border-b hover:border-b-[2px] border-[#2AB673] dark:border-[#117866]">contact support</a> or go to <a href="https://mintlify.com" className="font-medium text-slate-700 dark:text-gray-100 border-b hover:border-b-[2px] border-[#2AB673] dark:border-[#117866]">mintlify.com</a> to find what you&nbsp;need.
          </p>
        </div>
      </article>
    </main>
  );
}

export default function Error() {
  return <ErrorPage />;
}

Error.layoutProps = {
  meta: {
    title: '404',
  },
};
