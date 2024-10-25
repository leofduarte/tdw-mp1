import { Button } from "./components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-3/5 mx-auto my-16">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Fugas e Romances - As Aventuras de Vale de Judeus
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          As notícias mais espetaculares, surreais e cheias de humor! 🚔💨
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            📰 Destaques de Hoje:
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                🔥 “Os Cinco Magníficos” e a Escada de 20 Metros
              </h3>
              <p className="text-gray-700 mt-2">
                A fuga que deixou todos boquiabertos: como uma escada XXL e uma
                prisão &quot;sem segurança&quot; levaram à escapadela do ano!
              </p>
              <Link
                href="/posts"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Ler mais
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                💔 Fábio &quot;Cigano&quot; Loureiro Apanhado em Tânger
              </h3>
              <p className="text-gray-700 mt-2">
                O líder da fuga épica foi apanhado... graças à namorada que
                levou a polícia a ele com uma série de selfies apaixonadas.
              </p>
              <Link
                href="/posts"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Ler mais
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                🔌 Vale de Judeus: A Prisão Sem Grades
              </h3>
              <p className="text-gray-700 mt-2">
                Uma investigação revela que a prisão parece ter saído de um
                manual de como NÃO garantir segurança: câmaras de enfeite,
                cercas que se desligam, e um guarda distraído.
              </p>
              <Link
                href="/posts"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Ler mais
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            📊 Tendências no Momento:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              🏃‍♂️ Como planejar uma fuga com estilo (e uma escada de 20 metros)
            </li>
            <li>
              📸 Selfies comprometedoras: dicas para não acabar preso pelo
              Instagram
            </li>
            <li>
              💡 Histórias reais de prisioneiros e guardas com mais azar que
              jeito
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            💬 Os leitores comentam:
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-700">
              🗣️ &quot;Esta prisão parece um parque temático para
              criminosos!&quot;
            </p>
            <p className="text-gray-700">
              🗣️ &quot;Ainda bem que a polícia usa o Instagram como ferramenta
              de investigação!&quot;
            </p>
            <p className="text-gray-700">
              🗣️ &quot;Vale de Judeus devia ser um reality show! Já imagino o
              nome: &apos;Fugas, Fábios e Férias&apos;!&quot;
            </p>
          </div>
        </section>

        <div className="flex justify-center w-full">
          <Link href="/posts">
            <Button variant="destructive" className="p-8 mt-8 text-2xl">
              Ver Notícias
            </Button>
          </Link>
        </div>
      </main>

      <footer className="mt-12 text-center">
        <div className="bg-yellow-100 text-yellow-900 p-4 rounded-lg inline-block">
          <p>
            📢 <strong>Alerta de Conteúdo:</strong> Todo o conteúdo deste site é
            puramente humorístico e satírico! As histórias foram criadas por uma
            inteligência artificial (ChatGPT), e têm o único objetivo de
            divertir. 😄
          </p>
        </div>
      </footer>
    </div>
  );
}
