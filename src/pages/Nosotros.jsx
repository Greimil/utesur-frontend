import { Section } from "../components/ui/wrappers/Section";

export const Nosotros = () => {
  return (
    <Section>
      <div>
        <h1 className="text-4xl font-bold text-primary">
          Sobre Nuestra universidad
        </h1>
        <p>
          We are a diverse and inclusive community, committed to the pursuit of
          knowledge, the discovery of new ideas and service to society.
        </p>
      </div>

      <div className="flex flex-col gap-y-5 pt-5">
        <div>
          <h3 className="text-2xl py-3 font-bold text-primary">Nuestra historia</h3>
          <p>
            {`In 1885, Leland and Jane Stanford founded the University to "promote the public welfare by exercising an influence on behalf of humanity and civilization." Stanford opened its doors in 1891, and more than a century later, it remains dedicated to finding solutions to the great challenges of the day and to preparing our students for leadership in today's complex world. Stanford, is known for its entrepreneurial character, drawn from the legacy of its founders, Jane  and Leland Stanford, and its relationship to Silicon Valley. Areas of excellence range from the humanities to social sciences to engineering and the sciences. Stanford is located in California's Bay Area, one of the most intellectually dynamic and culturally diverse areas of the nation.`}
          </p>
        </div>

        <div>
          <h3 className="text-2xl py-3 font-bold text-primary">Nuestra Vision</h3>
          <p>
            {
              "Stanford's founding grant states the university's objective is to qualify students for personal success and direct usefulness in life; And its object, directly or indirectly, is to do the best possible educational and research work. The university's mission is to promote the public welfare by exercising an influence in behalf of humanity and civilization."
            }
          </p>
        </div>

        <div>
          <h3 className="text-2xl py-3 font-bold text-primary">Nuestra Misión</h3>
          <p>
            The university will be a leader in the creation, development and
            dissemination of knowledge, and will educate students to be critical
            thinkers, lifelong learners, and participants in a broad and
            increasingly diverse global community.
          </p>
        </div>
      </div>
    </Section>
  );
};
