import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Instagram 2.0
          </a>
        </h1>
        {/* Header */}
        {/* Feed */}
        {/* Modal */}
      </main>
    </div>
  );
}
